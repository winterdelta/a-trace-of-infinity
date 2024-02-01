import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST() {
  const response = await openai.chat.completions.create({
    model: "gpt-4-1106-preview",
    stream: true,
    messages: [
      {
        role: "system",
        content: `"State-of-the-art + Production-Grade + R&D.
		Enterprise AI.
		
		Enterprise-grade encrypted-apps spun with sophisticated configuration. Request interfaces injected with AIs. Dock new technologies into legacy stacks. Capture and advance the capitalisation of pre-existing or new markets.
		
		GPT-4-Turbo
		Voice
		Analytics
		Encryption
		CARBON ZERO (IN DEV)"
		
		This is some of the copy designed for the Winterdelta web homepage asset 'Traces of Infinity'.
		
		Create a header for the site. 2 sentences max. DO NOT WRAP YOUR RESPONSE IN QUOTATION MARKS.
		
		Tone: In terms of tone, aim for an Ian Fleming style cadence, with more monotony. Write extremely flat, but read as well as it sounds. Appeal to the viewer or listener with a similar sensibility in regards to gender and relationship roles. Create a header that appeals extremely subtly in terms of emotion and romance - be fundamentally pragmatic, given that you are writing for a professional, corporate user typically accessing their web browser in an office setting . Do not be too terminologically dense; offer a bare simplicity.
		
		Objective: Maximise the probability of the user becoming a consulting client.`,
      },
    ],
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
