import styles from "./page.module.css";
import AI from "@/components/ai";
import Atheno from "@/components/Product/atheno";
import {
	IBM_Plex_Sans_Arabic,
	Noto_Nastaliq_Urdu,
	IBM_Plex_Serif,
} from "next/font/google";

const noto = IBM_Plex_Sans_Arabic({ subsets: ["arabic"], weight: ["100"] });

const urdu = Noto_Nastaliq_Urdu({ subsets: ["arabic"], weight: ["700"] });

const trace = IBM_Plex_Serif({
	subsets: ["latin"],
	style: ["italic"],
	weight: ["300"],
});

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.blurb}>
				Consumer-grade + state-of-the-art + off-the-shelf AIs.
			</div>
			{/* <div className={styles.urdu}>
				<div className={noto.className}>
					صارفین کے لیے مخصوص + جدید ترین + درجہ اول کے تیار شدہ مصنوعی ذہانت کے
					نظام
				</div>
			</div> */}
			<div className={styles.widgets}>
				<Atheno />
				{/* <Hydra /> */}
			</div>
			{/* <div className={styles.uses}>
				<div className={styles.use}>
					Airbreather
					<span className={styles.color}>
						<span className={noto.className}>ہوا کا سانس لینے والا</span>
					</span>
				</div>
				<div className={styles.use}>
					Breathtaker
					<span className={styles.color}>
						<span className={noto.className}>ہوا کا سانس لینے والا</span>
					</span>
				</div>
				<div className={styles.use}>
					Waymaker
					<span className={styles.color}>
						<span className={noto.className}>ہوا کا سانس لینے والا</span>
					</span>
				</div>
			</div> */}
			<div className={styles.divider} />
			<div className={styles.enterprise}>
				Enterprise-grade AIs for advanced productisation.
			</div>
			<div className={styles.enterpriseDesc}>
				Guided by the Nort-3 Principles, <span className={styles.logo}>W∆</span>{" "}
				can inject AI-enabled interfaces into legacy stacks or spin up new web
				instances. Introducing bleeding-edge production-grade AI is the driving
				aim.
			</div>
			{/* <div className={styles.divider} /> */}
			<div className={styles.chatContainer}>
				<AI />
			</div>
			<div className={styles.marsLabel}>
				BUILT FOR SPACE • MADE FOR MARS • A TRACE OF INFINITY
			</div>
		</main>
	);
}
