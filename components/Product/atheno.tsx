import Link from "next/link";
import styles from "./link.module.css";
import { AssemblyReference } from "@carbon/icons-react";
import Image from "next/image";

export default function Home() {
	return (
		<div className={styles.product}>
			<Link className={styles.widget} href='https://atheno.winterdelta.com'>
				<div className={styles.icon}>
					<AssemblyReference size={16} />
				</div>
				<div className={styles.link}>On</div>
			</Link>
			<div className={styles.feature}>0 - $8.00 / month</div>
			<div className={styles.feature}>voice</div>
			<div className={styles.feature}>multi-lingual</div>
			<div className={styles.feature}>STT</div>
			<div className={styles.feature}>TTS</div>
			<div className={styles.feature}>playlists</div>
			<div className={styles.feature}>GPT-4</div>
			<div className={styles.dolby}>
				<Image alt='' src='dolby-icon-grey.svg' height={24} width={24} />
				<div className={styles.text}>Dolby Enhance</div>
			</div>
		</div>
	);
}
