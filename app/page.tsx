import styles from "./page.module.css";
import AI from "@/components/ai";
import Atheno from "@/components/Product/atheno";
import {
	IBM_Plex_Sans_Arabic,
	Noto_Nastaliq_Urdu,
	IBM_Plex_Serif,
} from "next/font/google";
import Image from "next/image";

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
			{/* <div className={styles.consumer}> */}
			{/* <div className={styles.item}> */}
			{/* <span className={styles.bold}>Off-the-shelf</span>: */}
			{/* AIs to use right now: */}
			{/* </div> */}
			{/* </div> */}
			{/* <div className={styles.blurb}>
				<div>Off-the-shelf: Pre-built apps ready for use. </div>
				<div>
					State-of-the-art: Complex apps spun up with sophisticated
					configurations.
				</div>
				<div>
					Bleeding-edge: AI R&D apps designed to push the manifold of what is
					physically feasible - dedivvered as fast as feasible.
				</div>
			</div> */}
			{/* <div className={styles.urdu}>
				<div className={noto.className}>
					صارفین کے لیے مخصوص + جدید ترین + درجہ اول کے تیار شدہ مصنوعی ذہانت کے
					نظام
				</div>
			</div> */}
			<div className={styles.widgets}>
				<Atheno />
			</div>

			<div className={styles.imageContainer}>
				<Image
					src='/M2.jpg'
					className={styles.image}
					alt=''
					fill={true}
					quality={100}
					style={{
						objectFit: "cover",
						overflow: "hidden",
					}}
					sizes='(max-width: 768px) 250px, 400px'
				/>
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
			{/* <div className={styles.divider} />
			<div className={styles.enterprise}>
				Enterprise-grade AIs for advanced productisation.
			</div>
			<div className={styles.enterpriseDesc}>
				Guided by the Nort-3 Principles, <span className={styles.logo}>W∆</span>{" "}
				can inject AI-enabled interfaces into legacy stacks or spin up new web
				instances. Introducing bleeding-edge production-grade AI is the driving
				aim.
			</div> */}
			<div className={styles.divider} />
			<div className={styles.itemRow}>
				<div className={styles.items}>
					<div className={styles.item}>
						<span className={styles.bold}>Enterprise-grade apps:</span> Spun up
						with sophisticated configuration. Deploy State-of-the-art. Request
						new interfaces injected with AIs. Dock new technologies. Capture and
						advance the capitalisation of pre-existing and new markets.
					</div>
					<div className={styles.row}>
						<div className={styles.price}>$100K+ quote</div>
						{/* <div className={styles.item}>
							Bleeding Edge: R&D apps designed to push the manifold of what is
							physically feasible - delivered as fast as feasible.
						</div> */}
						<div className={styles.feature}>GPT-4</div>
						<div className={styles.feature}>Voice</div>
						<div className={styles.feature}>Web</div>
						<div className={styles.feature}>Analytics</div>
					</div>
					<div className={styles.itemDesc}></div>
				</div>
				{/* <div className={styles.imageContainer}>
					<Image
						src='/M1.jpg'
						className={styles.image}
						alt=''
						fill={true}
						quality={100}
						style={{
							objectFit: "cover",
							overflow: "hidden",
						}}
						sizes='(max-width: 768px) 250px, 400px'
					/>
				</div> */}
				{/* <div className={styles.divider} /> */}
				{/* <div className={styles.divider} />
				<div className={styles.nort3}>
					<div>Ask about the Nort-3. It is the guiding framework for c-dev.</div>
				</div> */}
				{/* <div className={styles.divider} /> */}
				<div className={styles.items}>
					<div className={styles.item}>
						<span className={styles.bold}>Experimental-grade:</span> Bleeding
						Edge R&D designed to push the manifold of what is physically
						feasible - delivered as fast as feasible.
					</div>
					<div className={styles.price}>Asset Securities Quote</div>
				</div>
			</div>
			{/* <div className={styles.marsLabelBuild}>
				&apos;A TRACE OF INFINITY&apos; BUILD
			</div> */}
			{/* <div className={styles.imageContainer}>
				<Image
					src='/USGS1.jpg'
					className={styles.image}
					alt=''
					fill={true}
					quality={100}
					style={{
						objectFit: "cover",
						overflow: "hidden",
					}}
					sizes='(max-width: 768px) 250px, 400px'
				/>
			</div> */}
			{/* <div className={styles.divider} /> */}
			{/* <div className={styles.margin} /> */}
			<div className={styles.chatContainer}>
				<AI />
			</div>
			<div className={styles.marsLabel}>
				&apos;A TRACE OF INFINITY&apos; BUILD
			</div>
		</main>
	);
}
