"use client";

import styles from "./navigation.module.css";
import Link from "next/link";
import Pathname from "./pathname";
import { CircleStroke } from "@carbon/icons-react";
import { useState } from "react";

export default function Nav() {
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [isBackdropVisible, setIsBackdropVisible] = useState(false);

  const handleButtonClick = () => {
    document.body.classList.toggle("scroll-locked");
    setIsScrollLocked((prevIsScrollLocked) => !prevIsScrollLocked);
    setIsBackdropVisible((prevIsBackdropVisible) => !prevIsBackdropVisible);

    console.log(
      "isScrollLocked",
      isScrollLocked,
      "isBackdropVisible",
      isBackdropVisible
    );
  };

  return (
    <>
      <div className={styles.home}>
        <Link href="/">
          <div className={styles.w}>W∆</div>
        </Link>
        <div className={styles.path}>
          <Pathname />
        </div>
      </div>
      <div className={styles.menu}>
        <button onClick={handleButtonClick} className={styles.w_}>
          <span className={styles.circle_icon}>
            <CircleStroke size={16} />
          </span>
        </button>
      </div>
      <div
        className={`${styles.backdrop} ${
          isBackdropVisible ? styles.backdropVisible : ""
        }`}
      />
    </>
  );
}
