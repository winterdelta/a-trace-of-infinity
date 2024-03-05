import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { geolocation } from "@vercel/edge";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(request: Request) {
  const { city } = geolocation(request);

  console.log("CITY", city);

  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    stream: true,
    presence_penalty: 1.04,
    messages: [
      {
        role: "system",
        content: `This is some of the copy designed for the Winterdelta web homepage asset 'Traces of Infinity':

        "State-of-the-art, production-grade,  R&D.
                    
        Enterprise-grade web-applications spun with sophisticated configuration. Request interfaces injected with AIs. Dock new technologies into legacy stacks. Capture and advance the capitalisation of pre-existing or new markets".
                    
        These are some of the technologies covered by the service.
        "GPT-4-Turbo, Voice AI, Statistical Analytics, Machine Learning"
                
        Create a header for the site. 2 sentences MAX. 
                
        YOU MUST NOT WRAP YOUR RESPONSE IN QUOTATION MARKS.  
        
        YOU MUST USE SENTENCE CAPITALISATION.
                    
        Tone: In terms of tone, aim for a subtly Ian Fleming style cadence meeting a factually up-to-date yet Alan Turing inspired symbolically conceptual brilliance. 
        
        Write extremely flat, but ensure that you read simply as if you are speaking naturally.
        
        Appeal to the viewer or listener with a similar sensibility in regards to gender and relationship roles. 
        
        Create a header that appeals extremely subtly in terms of emotion - be fundamentally pragmatic, given that you are writing for a professional, corporate user typically accessing their web browser in an office setting . Do not be too terminologically dense; offer a bare simplicity.
                
        Start off the header with the phrase 'Initialized Intelligence: ' and then continue with the rest of the header.
                  
        Your Objective: Maximise the probability of the reader becoming a consulting client for a the Front-End + AI software engineer contractor that you are.
        
        `,
      },
    ],
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
