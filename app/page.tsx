import Playlist from "@/components/Playlist/Playlist";
import styles from "./page.module.css";
import AI from "@/components/ai";
import {
	IBM_Plex_Mono,
	Noto_Nastaliq_Urdu,
	IBM_Plex_Sans_Arabic,
	UnifrakturMaguntia,
} from "next/font/google";
import { ArrowRight, AssemblyReference } from "@carbon/icons-react";
import Link from "next/link";
import Image from "next/image";

const mono = IBM_Plex_Mono({
	subsets: ["latin"],
	style: ["normal"],
	weight: ["700"],
});

const noto = Noto_Nastaliq_Urdu({
	subsets: ["latin"],
	weight: ["700"],
});

const uni = UnifrakturMaguntia({
	subsets: ["latin"],
	weight: ["400"],
});

const ar = IBM_Plex_Sans_Arabic({
	subsets: ["arabic"],
	weight: ["200"],
});

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.fadeLayer} />
			<Playlist />
			<div className={styles.ai}>
				<div className={styles.halucinera}>
					{/* <div>Humanity-grade AIs</div> */}
					{/* <div className={mono.className}> */}
					<div>Halucinera</div>
					<div className={styles.icono}>
						<span className={styles.icon}>
							{/* <ArrowRight size={16} /> */}
							<AssemblyReference size={24} />
							{/* <span className={styles.onLabel}>ON</span> */}
						</span>
						<div className={styles.di}>
							<div className={styles.faviD}>
								<Image
									src='/dolby-icon-grey.svg'
									className={styles.imageD}
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
							<div className={styles.dolby}>Dolby | Enhance</div>
						</div>
					</div>
					<div className={styles.emotion}>
						From nuance emerges emotion. A literature review.
					</div>
					{/* <div className={styles.urdu}>
						<div className={ar.className}>
							نعتیہ موضوع سے جذبات کی پیداوار ہوتی ہے - ایک ادبی تنقید
						</div>
					</div> */}

					{/* <span className={styles.date}>Friday 8 Dec 10:01AM | Q4 2023</span> */}
					{/* </div> */}
				</div>
			</div>
			{/* <div className={styles.urdu}>
				<div className={noto.className}>
					صارفین کے لیے مخصوص + جدید ترین + درجہ اول کے تیار شدہ مصنوعی ذہانت کے
					نظام
				</div>
			</div> */}
			{/* <div className={styles.noto}> */}
			{/* <div className={noto.className}>آزادی</div> */}
			{/* <div className={styles.urdu}>
				<div className={ar.className}>
					دل کی آزادی سے جنما۔ ایک عالمی جشن جو ہمیں ستاروں تک لے جاتا ہے۔
				</div>
			</div> */}
			{/* </div> */}
			{/* <div className={uni.className}>
				Air a bhreith bho shaorsa a&apos; chridhe. Cèilidh cruinneil a bheir
				sinn chun na rionnagan.
			{/* </div> */}
			{/* <div className={styles.sc}>
				<div className={mono.className}>STYLLCRAFT</div>
			</div> */}
			{/* <div className={styles.divider} /> */}
			{/* <div className={styles.introContainer}>
				<div className={styles.intro}>
					Consumer-grade + off-the-shelf + Pre-built AIs:
				</div>
			</div> */}
			{/* <div className={styles.imagery}>
				<Link href='https://www.styllcraft.com'>
					<div className={styles.imageContainer}>
						<div>
							<AssemblyReference size={16} />
						</div>
					</div>
				</Link>
			</div> */}
			{/* <div className={styles.noto}>
				<div className={noto.className}>آزادی</div>
				<div className={noto.className}>دل کی آزادی</div>
			</div>
			<div className={styles.gaelic}>Saorsa a&apos; Chridhe</div> */}
			{/* <div className={styles.gaelic}>Saorsa a&apos; Chridhe</div> */}
			{/* <div className={styles.divider} /> */}
			{/* <div className={styles.consumer}> */}
			{/* <div className={styles.item}> */}
			{/* <span className={styles.bold}>Off-the-shelf</span>: */}
			{/* Pre-built AIs:
			</div> */}
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
			{/* <div className={styles.widgets}>
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
			</div> */}
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
			{/* <div className={styles.linearBlur} /> */}
			{/* <div className={styles.blurContainer}>
				<div className={styles.imageContainerAlbumArtblur}>
					<Image
						src='/M2.jpg'
						className={styles.imageBlur}
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
			</div> */}
			{/* <div className={styles.albumArtContainer}>
				<div className={styles.imageContainerAlbumArt}>
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
			</div> */}
			<div className={styles.divider} />
			{/* <div className={styles.introContainer}>
				<div className={styles.intro}>
					<div className={mono.className}>
						R&D + STATE-OF-THE-ART + BLEEDING EDGE AIs
					</div>
				</div>
			</div> */}
			<div className={styles.title}>
				<div className={styles.styllcraft}>
					{/* <div className={mono.className}>HYDRA</div> */}
					<div className={styles.dividerHeader} />
					{/* <div className={ibm.className}>craft</div> */}
				</div>
			</div>
			<div className={styles.itemRow}>
				<div className={styles.items}>
					<div className={styles.item}>
						<span className={styles.bold}>Enterprise apps</span> Spun up with
						sophisticated configurations. Request interfaces injected with AIs.
						Dock new technologies into legacy stacks. Capture and advance the
						capitalisation of pre-existing or new markets.
					</div>
					<div className={styles.row}>
						<div className={styles.price}>$100K+</div>
						{/* <div className={styles.item}>
							Bleeding Edge: R&D apps designed to push the manifold of what is
							physically feasible - delivered as fast as feasible.
						</div> */}
						<div className={styles.feature}>GPT-4</div>
						<div className={styles.feature}>Voice</div>
						<div className={styles.feature}>Web</div>
						<div className={styles.feature}>Analytics</div>
						<div className={styles.feature}>
							Carbon-neutral - cero - as standard
						</div>
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
						<span className={styles.bold}>R&D</span> Designed to push the
						manifold of what is physically feasible - delivered as fast as
						feasible.
					</div>
					<div className={styles.row}>
						<div className={styles.price}>Securities</div>
						<div className={styles.feature}>
							Carbon-neutral - cero - as standard
						</div>
					</div>
				</div>
			</div>
			{/* <div className={styles.marsLabelBuild}>
				&apos;A TRACE OF INFINITY&apos; BUILD
			</div> */}
			{/* <div className={styles.imageContainer}>
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
			</div> */}
			{/* <div className={styles.divider} /> */}
			{/* <div className={styles.margin} /> */}
			<div className={styles.chatContainer}>
				<AI />
			</div>
			<div className={styles.marsLabel}>A TRACE OF INFINITY BUILD</div>
		</main>
	);
}
