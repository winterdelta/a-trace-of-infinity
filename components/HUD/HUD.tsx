import Link from "next/link";
import styles from "./HUD.module.css";

export default function HUD() {
	return (
		<div>
			<div className={styles.winterdelta}>
				<Link className={styles.logo} href='/'>
					W∆
				</Link>
				{/* <div className={styles.divider}>/</div> */}
				{/* <span className={styles.build}>A Trace of Infinity</span> */}
			</div>
		</div>
	);
}
