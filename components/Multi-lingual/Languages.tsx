"use client";

import styles from "./Player.module.css";
import {
  IBM_Plex_Sans,
  IBM_Plex_Sans_Arabic,
  IBM_Plex_Sans_JP,
} from "next/font/google";

const english = IBM_Plex_Sans({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["500"],
});

const urdu = IBM_Plex_Sans_Arabic({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["500"],
});

const chinese = IBM_Plex_Sans_JP({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["500"],
});

interface Language {
  name: string;
  font: string;
}

interface LangProps {
  languages: { name: string; font: string }[];
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
}

export default function Languages({ languages, lang, setLang }: LangProps) {
  return (
    <div className={styles.languages}>
      {languages.map((language) => (
        <button
          key={language.name}
          onClick={() => setLang(language.name)}
          className={
            lang === language.name ? styles.lang : styles.lang_unselected
          }
        >
          <div className={chinese.className}>{language.name}</div>
        </button>
      ))}
    </div>
  );
}
