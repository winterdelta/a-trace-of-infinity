import Image from "next/image";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
	return new ImageResponse(
		(
			<div
				style={{
					display: "flex",
					background: "#f6f6f6",
					width: "100%",
					height: "100%",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Image alt='' width='256' height='256' src='./S2.png' />
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	);
}
