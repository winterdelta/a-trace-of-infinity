import Link from "next/link";
import styles from "./link.module.css";
import { Meter } from "@carbon/icons-react";

export default function Home() {
	return (
		<Link className={styles.widget} href='https://atheno.winterdelta.com'>
			<span className={styles.icon}>
				<Meter size={32} />
			</span>
			<span className={styles.link}></span>
		</Link>
	);
}
