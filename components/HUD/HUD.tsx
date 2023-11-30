import Link from "next/link";
import styles from "./HUD.module.css";

export default function HUD() {
	return (
		<div>
			<div className={styles.winterdelta}>
				<Link href='/'>W∆</Link>
			</div>
		</div>
	);
}
