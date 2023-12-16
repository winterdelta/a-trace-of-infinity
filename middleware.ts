import { createMiddleware, rateLimit } from "@arcjet/next";

export const config = {
	matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

const middleware = createMiddleware({
	// key: process.env.OPENAI_API_KEY ?? "",

	key: process.env.OPENAI_API_KEY!,
	rules: [
		rateLimit({
			mode: "LIVE",
			match: "/api/chat",
			window: "1h",
			max: 60,
			timeout: "10m",
		}),
	],
});

export default middleware;
