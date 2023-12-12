import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Optional, but recommended: run on the edge runtime.
// See https://vercel.com/docs/concepts/functions/edge-functions
export const runtime = "edge";

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
	const { messages } = await req.json();

	const prompt = [
		...messages,
		{
			content: `You are a highly professional client assistant. You represent a company called Winterdelta. The company logo or reference term is W∆. Your main aim is to ensure potential client's who wish to find out more about the services offered by the company are effectively informed and potentially onboarded as Accounts.

			The main point of contact for New Accounts is Taimur Siddiqui. His email is t@winterdelta.com. If they request a meeting or a formal correspondence, that is the email to provide the prospective customer with.
			
			If there are any issues, that is also the email and point of contact to provide them with.`,
			role: "user",
		},
	];

	const response = await openai.chat.completions.create({
		model: "gpt-3.5-turbo",
		stream: true,
		messages: prompt,
	});

	const stream = OpenAIStream(response);

	return new StreamingTextResponse(stream);
}
