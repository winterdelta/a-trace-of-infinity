import {
	ArrowRight,
	Buoy,
	Collaborate,
	IbmWatsonLanguageTranslator,
	IbmWatsonSpeechToText,
	IbmWatsonTextToSpeech,
	IbmWatsonxAssistant,
	Laptop,
	MachineLearningModel,
	Mobile,
	Money,
	Music,
	Purchase,
	ShareKnowledge,
	ShoppingCartPlus,
	Sustainability,
	VoiceActivate,
} from "@carbon/icons-react";
import styles from "./prebuilt.module.css";
import {
	IBM_Plex_Mono,
	IBM_Plex_Sans_Arabic,
	IBM_Plex_Serif,
	IBM_Plex_Sans_Condensed,
	Noto_Nastaliq_Urdu,
} from "next/font/google";
import Link from "next/link";
import Click from "@/components/Shop/click";

const mono = IBM_Plex_Mono({
	subsets: ["latin"],
	style: ["normal", "italic"],
	weight: ["300", "500", "700"],
});

const serif = IBM_Plex_Serif({
	subsets: ["latin"],
	style: ["normal", "italic"],
	weight: ["500", "700"],
});

const urdu = Noto_Nastaliq_Urdu({
	subsets: ["arabic"],
	style: ["normal"],
	weight: ["500"],
});

const condensed = IBM_Plex_Sans_Condensed({
	subsets: ["latin"],
	style: ["normal", "italic"],
	weight: ["500", "700"],
});

const ar = IBM_Plex_Sans_Arabic({
	subsets: ["arabic"],
	weight: ["200"],
});

export default function PreBuilt() {
	const gen_color = () => {
		return "transparent";
	};

	return (
		<div className={styles.athenian}>
			<div className={styles.introContainer}>
				<div className={styles.intro}>
					<div className={mono.className}>PRE-CONFIGURED + OFF-THE-SHELF</div>
				</div>
			</div>
			<Link className={styles.audio} href='https://atheno.winterdelta.com/'>
				{/* <div className={styles.button}>
					<AssemblyReference size={32} />
					<span className={serif.className}>A</span>
				</div> */}
				<div className={styles.athens}>
					{/* <div className={styles.firstlight}>
						Explore the First Light platform.
					</div> */}
					<div className={styles.device}>
						<span className={styles.musicIcon}>
							<span>ATHENO</span>
							{/* <span className={styles.ml}>
								<MachineLearningModel size={16} />
							</span> */}
						</span>
						<span className={styles.d}>
							<MachineLearningModel size={24} />
						</span>
						{/* <span className={styles.d}>
							<Mobile size={24} />
						</span>
						<span className={styles.d}>
							<Laptop size={24} />
						</span> */}
					</div>
					{/* <div className={styles.buttons}>
						<div className={styles.b}>
							<div className={mono.className}>Demo</div>
						</div>
						<div className={styles.b}>
							<div className={mono.className}>Purchase</div>
						</div>
					</div> */}
					{/* <div className={styles.athensTag}>
						Consumer-grade web-platform designed for experimentation with AI.
						Explore meaningful problems with the most advanced commercially
						technologies available.
					</div> */}
					{/* <div className={styles.urdu}>
						<span className={urdu.className}>
							آتنس - آڈیو پیغام بھیجنے والی ہومینگ ایپ
						</span>
					</div> */}
				</div>
			</Link>
			<div className={styles.fea}>
				<div style={{ backgroundColor: gen_color() }} className={styles.f}>
					<span className={styles.fi}>
						<IbmWatsonLanguageTranslator size={16} />
					</span>
					<span className={styles.fit}>MULTI-LINGUAL</span>
				</div>
				<div style={{ backgroundColor: gen_color() }} className={styles.f}>
					<span className={styles.fi}>
						<MachineLearningModel size={16} />
					</span>
					<span className={styles.fit}>GPT-4</span>
				</div>
				<div style={{ backgroundColor: gen_color() }} className={styles.f}>
					<span className={styles.fi}>
						<VoiceActivate size={16} />
					</span>
					<span className={styles.fit}>VOICE-INTERFACE</span>
				</div>
				<div style={{ backgroundColor: gen_color() }} className={styles.f}>
					<span className={styles.fi}>
						<Music size={16} />
					</span>
					<span className={styles.fit}>PLAYLISTS</span>
				</div>
				<div style={{ backgroundColor: gen_color() }} className={styles.f}>
					<span className={styles.fi}>
						<IbmWatsonxAssistant size={16} />
					</span>
					<span className={styles.fit}>THREADS</span>
				</div>
				<div style={{ backgroundColor: gen_color() }} className={styles.f}>
					<span className={styles.fi}>
						<IbmWatsonSpeechToText size={16} />
					</span>
					<span className={styles.fit}>SPEECH-TO-TEXT</span>
				</div>
				<div style={{ backgroundColor: gen_color() }} className={styles.f}>
					<span className={styles.fi}>
						<IbmWatsonTextToSpeech size={16} />
					</span>
					<span className={styles.fit}>TEXT-TO-SPEECH</span>
				</div>
				<div style={{ backgroundColor: gen_color() }} className={styles.f}>
					<span className={styles.fi}>
						<Collaborate size={16} />
					</span>
					<span className={styles.fit}>COLLABORATIVE</span>
				</div>
				<div style={{ backgroundColor: gen_color() }} className={styles.f}>
					<span className={styles.fi}>
						<ShareKnowledge size={16} />
					</span>
					<span className={styles.fit}>SHARE URLs</span>
				</div>
				<div style={{ backgroundColor: gen_color() }} className={styles.f}>
					<span className={styles.fi}>
						<Sustainability size={16} />
					</span>
					<span className={styles.fit}>CARBON ZERO (IN DEV)</span>
				</div>
			</div>
			{/* <div className={styles.ics}>
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
				<div className={styles.dg}>
					<div className={styles.dgi}>
						<Image
							src='/deepgram.svg'
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
					<div className={styles.nova}>Deepgram | Nova</div>
				</div>
			</div> */}
			{/* <div className={styles.price}>
				<span className={mono.className}>0 - $8.00</span>{" "}
				<span>
					Atheno - the AI - will be in touch during usage. So you know if you
					are nearing usage limits.
				</span>
			</div> */}
			<div className={styles.priceWid}>
				<div className={styles.slider}>
					<Click />
					<span className={styles.p}>
						<span className={styles.bi}>
							<Purchase size={24} />
						</span>
						{/* <span className={styles.division} /> */}
						<span>
							0.00 <ArrowRight size={16} /> $8.00
						</span>
						<span className={styles.division} />
						<span className={styles.month}>
							<span className={mono.className}>MONTH \ UNLIMITED REQUESTS</span>
							<span className={styles.fair}>
								<span className={mono.className}>
									{" "}
									FAIR-USAGE \ CAPPED PRICE
								</span>
							</span>
						</span>
					</span>
				</div>
			</div>
		</div>
	);
}
