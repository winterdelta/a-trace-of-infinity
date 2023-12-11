import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req: NextRequest, res: NextResponse) {
	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price: "{{PRICE_ID}}",
				quantity: 1,
			},
		],
		mode: "payment",
		success_url: `www.winterdelta.com/?success=true`,
		cancel_url: `www.winterdelta.com/?canceled=true`,
		automatic_tax: { enabled: true },
	});
	NextResponse.redirect("303", session.url);
}
