import styles from "./prebuilt.module.css";
import {
	IBM_Plex_Mono,
	IBM_Plex_Sans_Arabic,
	IBM_Plex_Serif,
} from "next/font/google";
import { AssemblyReference } from "@carbon/icons-react";
import Image from "next/image";
import Link from "next/link";

const mono = IBM_Plex_Mono({
	subsets: ["latin"],
	style: ["normal", "italic"],
	weight: ["500", "700"],
});

const serif = IBM_Plex_Serif({
	subsets: ["latin"],
	style: ["normal", "italic"],
	weight: ["500", "700"],
});

const ar = IBM_Plex_Sans_Arabic({
	subsets: ["arabic"],
	weight: ["200"],
});

export default function PreBuilt() {
	return (
		<div className={styles.athenian}>
			<div className={styles.introContainer}>
				<div className={styles.intro}>
					<div className={mono.className}>PRE-BUILT:</div>
				</div>
			</div>
			<Link className={styles.audio} href='https://play.winterdelta.com/'>
				<div className={styles.button}>
					{/* <AssemblyReference size={32} /> */}
					<span className={serif.className}>A</span>
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
				<div className={styles.b}>
					<div className={mono.className}>Demo</div>
				</div>
				<div className={styles.b}>
					<div className={mono.className}>Purchase</div>
				</div>
			</div>
		</div>
	);
}
