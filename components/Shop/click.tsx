"use client";

import {
  ArrowRight,
  Close,
  CloseFilled,
  CloseOutline,
  Compass,
  IntentRequestActive,
  MagicWand,
  TwoFactorAuthentication,
} from "@carbon/icons-react";
import styles from "./prebuilt.module.css";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";
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
      {/* {!click && (
				<div className={styles.getContainer}>
					<button onClick={() => setClick(true)} className={styles.authBtn}>
						<div className={styles.authi}>
							<IntentRequestActive size={16} />
						</div>
						<div className={styles.authenLabel}>AUTHENTICATE</div>
					</button>
				</div>
			)} */}
      {click && (
        <div className={styles.clickContainer}>
          <div className={styles.click}>
            <video className={styles.video} autoPlay playsInline muted loop>
              <source
                src="https://waveforms.s3.us-east-2.amazonaws.com/images/Gen-2+16s+cam_H+-29.mp4"
                type="video/mp4"
              />
            </video>
            <div className={styles.overlay} />

            <div className={styles.bs}>
              <Link href="https://accounts.winterdelta.com/sign-in">
                <div className={styles.authBtnM}>
                  <div className={styles.authiM}>
                    <MagicWand size={16} />
                  </div>
                  <div className={styles.authenLabelA}>
                    <div>CHECK OUT A DEMO PLAYLIST</div>
                  </div>
                </div>
              </Link>
              <Link href="https://accounts.winterdelta.com/sign-in">
                <div className={styles.authBtnA}>
                  <div className={styles.authA}>
                    <IntentRequestActive size={16} />
                  </div>
                  <div className={styles.authenLabel}>
                    <div>ATHENO</div>
                  </div>
                </div>
              </Link>
            </div>

            <button className={styles.close} onClick={() => setClick(false)}>
              <CloseFilled size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
