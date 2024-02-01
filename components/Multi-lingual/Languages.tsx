"use client";

import styles from "./Player.module.css";
import { useState } from "react";
import {
  IBM_Plex_Sans,
  IBM_Plex_Sans_Arabic,
  IBM_Plex_Sans_JP,
} from "next/font/google";

const en = IBM_Plex_Sans({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["500"],
});

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["500"],
});

const chinese = IBM_Plex_Sans_JP({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["500"],
});

export default function Player() {
  const [play, setPlay] = useState(false);

  return (
    <div className={styles.languages}>
      <button className={styles.lang}>
        <div className={en.className}>English</div>
      </button>
      <button className={styles.lang}>
        <div className={arabic.className}>اردو</div>
      </button>
      <button className={styles.lang}>
        <div className={chinese.className}>中文</div>
      </button>
    </div>
  );
}
