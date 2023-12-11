import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/HUD/nav";

const ibm = IBM_Plex_Sans({
	subsets: ["latin"],
	style: ["normal", "italic"],
	weight: ["500", "700"],
});

export const metadata: Metadata = {
	title: "Winterdelta",
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
				<Nav />
				{/* <HUD /> */}
				{children}
			</body>
		</html>
	);
}
