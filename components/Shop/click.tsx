"use client";

import {
	ArrowRight,
	Close,
	CloseFilled,
	CloseOutline,
} from "@carbon/icons-react";
import styles from "./prebuilt.module.css";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { useEffect, useState } from "react";
// import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const ar = IBM_Plex_Sans_Arabic({
	subsets: ["arabic"],
	weight: ["200"],
});

export default function PreBuilt() {
	const [click, setClick] = useState<Boolean>(false);
	// const targetRef = useRef(null);

	// useEffect(() => {
	// 	if (click) {
	// 		disableBodyScroll(targetRef.current);
	// 	} else {
	// 		enableBodyScroll(targetRef.current);
	// 	}
	// }, [click]);``

	return (
		<div
		// ref={targetRef}
		>
			<button onClick={() => setClick(true)} className={styles.authBtn}>
				<div className={styles.authi}>
					<ArrowRight size={16} />
				</div>
				<div className={styles.authenLabel}>GET</div>
			</button>
			{click && (
				<div className={styles.clickContainer}>
					<div className={styles.click}>
						<button className={styles.close} onClick={() => setClick(false)}>
							<CloseFilled size={24} />
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
