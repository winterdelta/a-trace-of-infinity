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
  weight: ["700"],
});

const urdu = IBM_Plex_Sans_Arabic({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["700"],
});

const chinese = IBM_Plex_Sans_JP({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["700"],
});

interface Language {
  name: string;
  font: string;
  preview: boolean;
  audioSrc: string;
}

interface LangProps {
  languages: {
    name: string;
    font: string;
    preview: boolean;
    audioSrc: string;
  }[];
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
  setCurrentAudioSource: React.Dispatch<React.SetStateAction<string>>;
}

export default function Languages({
  languages,
  lang,
  setLang,
  setCurrentAudioSource,
}: LangProps) {
  const handleLanguageChange = (selectedLanguageName: string) => {
    const selectedLanguage = languages.find(
      (language) => language.name === selectedLanguageName
    );
    if (selectedLanguage) {
      setLang(selectedLanguageName);
      setCurrentAudioSource(selectedLanguage.audioSrc);
    }
  };

  return (
    <div className={styles.languages}>
      {languages.slice(0, 3).map((language) => (
        <button
          key={language.name}
          onClick={() => {
            setLang(language.name);
            console.log(language.name);
            setCurrentAudioSource(language.audioSrc);
          }}
          className={
            lang === language.name ? styles.lang : styles.lang_unselected
          }
        >
          {language.name}
        </button>
      ))}
      {languages.slice(3, 6).map((language) => (
        <button
          key={language.name}
          onClick={() => setLang(language.name)}
          className={styles.lang_unselected}
        >
          <div className={language.preview ? styles.preview : undefined}>
            <div className={english.className}>{language.name}</div>
          </div>
        </button>
      ))}
    </div>
  );
}
