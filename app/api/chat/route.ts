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
			content: `Atheno is an AI platform that is designed to encourage consumers to explore and experiment with state-of-the-art AIs. 

			The platform packages a number of different AI technologies, such as STT, and TTS, GPT-4 and other deep learning MLs to encourage the people to get closer to what AI can deliver for them, personally.
			
			Rephrase this to encourage the sale to a lay-person, or a non-technical user. 
			
			Use utilitarian - product or feature- focused language. 2 sentences max.
			
			Don't use exclamation marks. Be sincere and honest. Almost impartial.`,
			role: "user",
		},
	];

	const response = await openai.chat.completions.create({
		model: "gpt-4",
		stream: true,
		messages: prompt,
	});

	const stream = OpenAIStream(response);

	return new StreamingTextResponse(stream);
}
