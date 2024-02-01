"use client";

import { PlayFilledAlt } from "@carbon/icons-react";
import styles from "./Player.module.css";
import { PauseFilled } from "@carbon/icons-react";
import { IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";

const en = IBM_Plex_Mono({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300"],
});

interface PlayerProps {
  play_status: boolean;
  play_ctrl: (value: boolean) => void;
}

export default function Player({ play_status, play_ctrl }: PlayerProps) {
  const handleClick = () => {
    play_ctrl(!play_status);
  };

  return (
    <div className={styles.player}>
      <button
        onClick={handleClick}
        className={`${styles.play_btn} ${
          play_status && styles.animate_rotate_clockwise
        }`}
      >
        <div
          className={`${styles.icon} ${
            play_status && styles.animate_rotate_anti_clockwise
          }`}
        >
          {play_status ? (
            <PlayFilledAlt size={24} />
          ) : (
            <PauseFilled size={24} />
          )}
        </div>
      </button>
      <div className={styles.time}>
        <div className={en.className}>01:32</div>
      </div>
      <div className={styles.di}>
        <div className={styles.faviD}>
          <Image
            src="/dolby-icon-grey.svg"
            className={styles.imageD}
            alt=""
            fill={true}
            quality={100}
            style={{
              objectFit: "cover",
              overflow: "hidden",
            }}
            sizes="(max-width: 768px) 250px, 400px"
          />
        </div>
        <div className={styles.dolby}>Dolby Enhance</div>
      </div>
    </div>
  );
}
