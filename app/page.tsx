import styles from "./page.module.css";
import AI from "@/components/ai";
import { IBM_Plex_Mono, IBM_Plex_Serif } from "next/font/google";
import Atheno from "@/components/Links/atheno";

const mono = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: "700",
});

const serif = IBM_Plex_Serif({
	subsets: ["latin"],
	style: "italic",
	weight: "300",
});

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.widgets}>
				<Atheno />
			</div>
			<div className={styles.chatContainer}>
				<AI />
			</div>
			<div className={styles.marsLabel}>
				<div className={styles.marsLabelText}>
					<div className={mono.className}>
						BUILT FOR SPACE • MADE FOR MARS • MULTI-OS • A TRACE OF INFINITY
					</div>
				</div>
			</div>
		</main>
	);
}
