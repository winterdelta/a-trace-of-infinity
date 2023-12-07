import Link from "next/link";
import styles from "./HUD.module.css";

export default function HUD() {
	return (
		<div className={styles.winterdelta}>
			<Link className={styles.logo} href='/'>
				W∆
				{/* <MicrophoneFilled size={16} /> */}
			</Link>
		</div>
	);
}
