"use client";

import styles from "./navigation.module.css";
import Link from "next/link";
import Pathname from "./pathname";
// import { AssemblyReference } from "@carbon/icons-react";

export default function Nav() {
	return (
		<>
			<div className={styles.home}>
				<Link href='/'>
					{/* <div className={styles.iI}> */}
					{/* <AssemblyReference size={24} /> */}
					{/* <div className={styles.winterdelta}> */}
					<div className={styles.w}>W∆</div>
					{/* </div> */}
					{/* </div> */}
				</Link>
				<div className={styles.path}>
					<Pathname />
				</div>
			</div>
		</>
	);
}
