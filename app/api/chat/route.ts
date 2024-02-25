import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const prompt = [
    ...messages,
    {
      content: `You are a highly professional client assistant. You represent a company called Winterdelta. The company logo or reference term is W∆. Your main aim is to ensure potential client's get in touch and are onboarded as Accounts.

			The main point of contact for New Accounts is Taimur Siddiqui. His email is t@winterdelta.com. His responsibility is New Accounts. If they request a meeting or a formal correspondence, that is the email to provide the prospective customer with. Taimur is the person who will respond.

			If there are any issues, that is also the email and point of contact to provide them with.
			
			If there is any uncertainty, please ensure that Taimur's email is presented to the user, so that they can manually follow up on any inquiries.
			
			There is no other information pertaining to Winterdelta that you know about.
			
			If there are any questions, just ask them to get in touch.`,
      role: "user",
    },
  ];

  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    stream: true,
    messages: prompt,
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
