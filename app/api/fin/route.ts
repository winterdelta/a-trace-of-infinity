import { NextApiRequest, NextApiResponse } from "next";
// import { NextReponse, NextApiResponse } from "next";
import { NextResponse } from "next/server";
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// export default async function (req: NextApiRequest, res: NextApiResponse) {
// 	const session = await stripe.checkout.sessions.create({
// 		line_items: [
// 			{
// 				price: "{{PRICE_ID}}",
// 				quantity: 1,
// 			},
// 		],
// 		mode: "payment",
// 		success_url: `www.winterdelta.com/?success=true`,
// 		cancel_url: `www.winterdelta.com/?canceled=true`,
// 		automatic_tax: { enabled: true },
// 	});
// 	res.redirect(303, session.url);
// }

export async function POST(req: Request) {
	console.log("This is the way");

	const session = "string";

	return NextResponse.json({ session });
}
