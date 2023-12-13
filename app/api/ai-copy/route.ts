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
				content: `Atheno is an AI platform that is designed to encourage consumers to explore and experiment with state-of-the-art AIs. 

				The platform packages a number of different AI technologies, such as STT, and TTS, GPT-4 and other deep learning MLs to encourage the people to get closer to what AI can deliver for them, personally.
				
				Rephrase this to encourage the sale to a lay-person, or a non-technical user. 
				
				Use utilitarian - product or feature- focused language. 2 sentences max.
				
				Don't use exclamation marks. Be sincere and honest. Almost impartial.`,
			},
		],
	});

	const stream = OpenAIStream(response);
	return new StreamingTextResponse(stream);
}
