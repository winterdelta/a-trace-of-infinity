import styles from "./page.module.css";
import AI from "@/components/ai";
import { IBM_Plex_Mono } from "next/font/google";

const mono = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: "700",
});

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.marsLabel}>
				<div className={styles.marsLabelText}>
					<div className={mono.className}>BUILT FOR SPACE • MADE FOR MARS</div>
				</div>
			</div>
			<div className={styles.chatContainer}>
				<AI />
			</div>
		</main>
	);
}
