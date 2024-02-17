"use client";

import { useState } from "react";
import Languages from "./Languages";
import Player from "./Player";
import styles from "@/components/Multi-lingual/Player.module.css";
// import Controls from "./Optional_Control_Symbols";

export default function Main() {
  const [play, setPlay] = useState(false);
  const [lang, setLang] = useState("English");

  const languages = [
    {
      name: "English",
      font: "english.className",
      preview: false,
      audioSrc:
        "https://waveforms.s3.us-east-2.amazonaws.com/a_trace_of_infinity/1+-+less+B.mp3",
    },
    {
      name: "اردو",
      font: "urdu.className",
      preview: false,
      audioSrc:
        "https://waveforms.s3.us-east-2.amazonaws.com/a_trace_of_infinity/3+-+less+B.mp3",
    },
    {
      name: "中文",
      font: "chinese.className",
      preview: false,
      audioSrc:
        "https://waveforms.s3.us-east-2.amazonaws.com/a_trace_of_infinity/2+-+less+B.mp3",
    },
    {
      name: "Cymraeg",
      font: "english.className",
      preview: true,
      audioSrc: "",
    },
    {
      name: "Gàidhlig",
      font: "english.className",
      preview: true,
      audioSrc: "",
    },
    {
      name: "Gaeilge",
      font: "english.classname",
      preview: true,
      audioSrc: "",
    },
  ];

  const currentLanguage = languages.find((language) => language.name === lang);
  const [currentAudioSource, setCurrentAudioSource] = useState(
    "https://waveforms.s3.us-east-2.amazonaws.com/a_trace_of_infinity/1+-+less+B.mp3"
  );

  // const currentAudioSource = currentLanguage?.audio || "";

  return (
    <div className={styles.main}>
      <Languages
        languages={languages}
        lang={lang}
        setLang={setLang}
        setCurrentAudioSource={setCurrentAudioSource}
      />
      <Player
        play_status={play}
        languages={languages}
        play_ctrl={setPlay}
        currentAudioSource={currentAudioSource}
      />
    </div>
  );
}
