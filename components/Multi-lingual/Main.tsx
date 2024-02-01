"use client";

import { useState } from "react";
import Languages from "./Languages";
import Player from "./Player";
import { Repeat } from "@carbon/icons-react";
import styles from "@/components/Multi-lingual/Player.module.css";
import Controls from "./Optional_Control_Symbols";

export default function Main() {
  const [play, setPlay] = useState(false);
  const [lang, setLang] = useState("English");

  const languages = [
    { name: "English", font: "english.className" },
    { name: "اردو", font: "urdu.className" },
    { name: "中文", font: "chinese.className" },
  ];

  return (
    <>
      {/* <div className={styles.controls}> */}
      <Languages languages={languages} lang={lang} setLang={setLang} />
      {/* </div> */}
      <Player play_status={play} play_ctrl={setPlay} />
    </>
  );
}
