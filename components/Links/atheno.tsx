import Link from "next/link";
import styles from "./link.module.css";
import { Assembly } from "@carbon/icons-react";

export default function Home() {
	return (
		<>
			<Link className={styles.widget} href='https://atheno.winterdelta.com'>
				<>
					<span className={styles.name}>
						<Assembly size={16} />
						<span className={styles.link}>Atheno - voice interface</span>
					</span>
				</>
			</Link>
		</>
	);
}
