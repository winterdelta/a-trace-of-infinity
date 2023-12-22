import Playlist from "@/components/Playlist/Playlist";
import styles from "./page.module.css";
import AI from "@/components/ai";
import {
	IBM_Plex_Mono,
	IBM_Plex_Sans_Arabic,
	Noto_Nastaliq_Urdu,
	UnifrakturMaguntia,
} from "next/font/google";
import React from "react";
import {
	CabinCareAlt,
	FlightInternational,
	Plane,
	Sustainability,
} from "@carbon/icons-react";
import PreBuilt from "@/components/Shop/prebuilt";
import Copy from "@/components/AI/Copy";
import Image from "next/image";

const mono = IBM_Plex_Mono({
	subsets: ["latin"],
	style: ["normal", "italic"],
	weight: ["500"],
});

const urdu = Noto_Nastaliq_Urdu({
	subsets: ["arabic"],
	style: ["normal"],
	weight: ["500"],
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
					{/* <Link href='https://play.winterdelta.com/playlist/99034458631'>
						<div>Halusinera: A literature review of Kang et al.</div>
					</Link> */}
					{/* <Link
						className={styles.emotion}
						href='https://play.winterdelta.com/playlist/99034458631'
					>
						From nuance emerges emotion. A literature review of Kang et al.
					</Link> */}
					<div className={styles.icono}>
						{/* <Link
							className={styles.icon}
							href='https://play.winterdelta.com/playlist/99034458631'
						>
							<AssemblyReference size={24} />
							<span className={styles.onLabel}>ON</span>
						</Link> */}
						{/* <div className={styles.di}>
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
							<div className={styles.dolby}>Dolby Enhance</div>
						</div> */}
					</div>
					{/* <div className={styles.urdu}>
						<div className={ar.className}>
							نعتیہ موضوع سے جذبات کی پیداوار ہوتی ہے - ایک ادبی تنقید
						</div>
					</div> */}
					{/* <span className={styles.date}>Friday 8 Dec 10:01AM | Q4 2023</span> */}
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
			<div className={styles.Desc}>
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
			{/* <div className={styles.divider} /> */}
			{/* <div className={styles.button}>
				<ShoppingBag size={32} />
			</div> */}
			<div className={styles.title}>
				{/* <span className={styles.winterdelta}>
					<span className={styles.logo}>W∆</span>
				</span> */}
				<span className={styles.headline}>
					<span>AIs</span>
					{/* <span className={styles.urduH}>
						<span className={urdu.className}>مصنوعی ذہانتیں</span>
					</span> */}
				</span>
			</div>
			{/* <PreBuilt /> */}
			{/* <Copy /> */}
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
			{/* <div className={st les.athenian}>
				<div className={styles.introContainer}>
					<div className={styles.intro}>
						<div className={mono.className}>PRE-BUILT:</div>
					</div>
				</div>
				<Link className={styles.audio} href='https://play.winterdelta.com/'>
					<div className={styles.button}>
						<AssemblyReference size={32} />
					</div>
					<div className={styles.athens}>
						<div className={styles.musicIcon}>ATHENS</div>
						<div className={styles.athensTag}>
							<div className={mono.className}>AUDIO MESSAGING PRO</div>
						</div>
						<div className={styles.urdu}>
							<div className={ar.className}>
								آتنس - آڈیو پیغام بھیجنے والی ہومینگ ایپ
							</div>
						</div>
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
							<div className={styles.dolby}>Dolby Enhance</div>
						</div>
					</div>
				</Link>
				<div className={styles.buttons}>
					<div>Demo</div>
					<div>Purchase</div>
				</div>
			</div> */}
			{/* <div className={styles.divider} /> */}
			<div className={styles.introContainer}>
				<div className={styles.intro}>
					<div className={mono.className}>
						STATE-OF-THE-ART + PRODUCTION-GRADE + R&D
					</div>
				</div>
			</div>
			<div className={styles.title}>
				<div className={styles.styllcraft}>
					<div className={styles.dividerHeader} />
				</div>
			</div>
			<div className={styles.itemRow}>
				<div className={styles.items}>
					<div className={styles.item}>
						<span className={styles.bold}>
							<span className={styles.ic}>
								<FlightInternational size={16} />
							</span>
							<span className={styles.ic}>FlightMode</span>
						</span>
						Enterprise-grade encrypted-apps spun with sophisticated
						configuration. Request interfaces injected with AIs. Dock new
						technologies into legacy stacks. Capture and advance the
						capitalisation of pre-existing or new markets.
					</div>
					<div className={styles.row}>
						{/* <div className={styles.price}>$100K+</div> */}
						{/* <div className={styles.item}>
							Bleeding Edge: R&D apps designed to push the manifold of what is
							physically feasible - delivered as fast as feasible.
						</div> */}
						<div className={styles.feature}>GPT-4</div>
						<div className={styles.feature}>Voice</div>
						<div className={styles.feature}>Analytics</div>
						<div className={styles.feature}>Encryption</div>
						<div className={styles.f}>
							<span className={styles.fi}>
								<Sustainability size={16} />
							</span>
							<span className={styles.fit}>CARBON ZERO (IN DEV)</span>
						</div>
					</div>
					{/* <div className={styles.itemDesc}></div> */}
				</div>
				{/* <div className={styles.divider} /> */}
				{/* <div className={styles.divider} />
				<div className={styles.nort3}>
					<div>Ask about the Nort-3. It is the guiding framework for c-dev.</div>
				</div> */}
				{/* <div className={styles.divider} /> */}
				{/* <div className={styles.items}>
					<div className={styles.item}>
						<span className={styles.bold}>R&D</span> Designed to push the
						manifold of what is physically feasible - delivered as fast as
						feasible.
					</div>
					<div className={styles.row}>
						<div className={styles.price}>Securities</div>
						<div className={styles.featureC}>
							Carbon-neutral - cero - as standard
						</div>
					</div>
				</div> */}
			</div>
			{/* <div className={styles.marsLabelBuild}>
				&apos;A TRACE OF INFINITY&apos; BUILD
			</div> */}

			{/* <div className={styles.divider} /> */}
			{/* <div className={styles.margin} /> */}
			<div className={styles.aiContainer}>
				<span className={styles.headline}>Chat with Client Services</span>
				{/* <span className={styles.urduH}>
					<span className={urdu.className}>کلائنٹ سروسز سے بات کریں</span>
				</span> */}
			</div>
			<div className={styles.chatContainer}>
				<AI />
			</div>
			<div className={styles.title}>
				{/* <span className={styles.winterdelta}>
					<span className={styles.logo}>W∆</span>
				</span> */}
				<div className={styles.marsLabel}>
					<span className={styles.logo}>W∆</span> \\ &apos;A TRACE OF
					INFINITY&apos;
					{/* BUILD */}
				</div>
			</div>
		</main>
	);
}
