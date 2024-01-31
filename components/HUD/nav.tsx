"use client";

import styles from "./navigation.module.css";
import Link from "next/link";
import Pathname from "./pathname";

export default function Nav() {
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
    </>
  );
}
