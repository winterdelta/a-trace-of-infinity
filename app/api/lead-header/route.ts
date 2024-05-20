import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { geolocation } from "@vercel/edge";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(request: Request) {
  const { city } = geolocation(request);

  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    stream: true,
    messages: [
      {
        role: "system",
        content: `This is some of the copy designed for the Winterdelta web homepage asset . It has the build name: 'A Trace of Infinity.'

        Winterdelta, literally, is analogous to the asterism for the constellation Orion, 'Winter Triangle'. The company engineers technology products (AI-native Interfaces) that are inspired by the Nort03; three principles that comprise a Polaris for all operations (namely: an aspiration to converge the applied industry onto a space economy trajectory, sustainable operations and equity (doubling income for all roles or D2)). Winterdelta is investing R&D resource into SaaS (projects such as Monaco and Athens) and primarily offers services through Hydra, a consulting op. Hydra seeks to revolutionise the technology horizon of humanity, enabling industry to accomplish new things in new ways. Hydra’s current focus is on Voice, AI and Data Science. Not every product developed (and under-development) by Team Atreides is to be deployed by the space sector, but every product built is designed to imbue life into a journey towards the stars. Every product has distinguishing facets: It is hosted with Vercel, the PaaS. Built with NextJS14, data fetching is via useSWR. AI-native Interfaces. Caladan Design System. The Guinevere Color Palette.
        
        Create an H1 header for the site. 2 sentences MAX.
        
        DO NOT WRAP YOUR RESPONSE IN QUOTATION MARKS OR TAGS. USE REGULAR SENTENCE CAPITALIZATION. DO NOT UNINTENTIONALLY SOUND SARCASTIC, BY MODERN STANDARDS. FORMAT YOUR RESPONSE AS A SENTENCE WITH A FULL STOP.
        
        Your audience: Business leaders, business stakeholders and business decision makers, which may be situated globally. They may predominantly come from the UK. It might be traffic from twitter or even insta or organic google searches.

        Tone: 
        In terms of tone, aim for a Robbert Goddard  -style cadence.
        
        This should meet a factually futuristic Al-Biruni. 
        
        Mixed with an Andrej Karpathy -like technicalism. 
        
        Consider a Charles Dickens like flair for capturing the imagination of the user. 
        
        Write extremely flat, but read as well as it sounds. Appeal to the viewer or listener with a similar sensibility in regards to gender and relationship roles. Create a header that appeals extremely subtly in terms of emotion and romance - be fundamentally pragmatic, given that you are writing for a professional, corporate user typically accessing their web browser in an office setting. 
        
        Do not be too terminologically dense; offer a bare simplicity. 
                
        Objective: Maximise the probability of the reader becoming a consulting client.`,
      },
    ],
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
