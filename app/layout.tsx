import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import HUD from "@/components/HUD/HUD";

const ibm = IBM_Plex_Sans({
	subsets: ["latin"],
	style: ["normal", "italic"],
	weight: ["500", "700"],
});

export const metadata: Metadata = {
	title: "Winterdelta",
	// description: "Specialised productisation - AI R&D for technological interfaces.",
	description: "Specialised R&D - consumer-grade R&D.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={ibm.className}>
				<HUD />
				{children}
			</body>
		</html>
	);
}
