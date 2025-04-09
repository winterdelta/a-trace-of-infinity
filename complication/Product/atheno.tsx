import Link from "next/link";
import styles from "./link.module.css";
import { AssemblyReference } from "@carbon/icons-react";
import Image from "next/image";
import {
  IBM_Plex_Mono,
  IBM_Plex_Sans_Arabic,
  Noto_Nastaliq_Urdu,
} from "next/font/google";

const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["500", "700"],
});

const noto = IBM_Plex_Sans_Arabic({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["300", "500", "700"],
});

const urdu = Noto_Nastaliq_Urdu({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["500", "700"],
});

export default function Home() {
  return (
    <>
      <div className={styles.styllcraft}>
        <div className={ibm.className}>Styllcraft</div>
      </div>
      <div className={styles.product}>
        <Link className={styles.widget} href="https://atheno.winterdelta.com">
          <div className={styles.icon}>
            <AssemblyReference size={16} />
          </div>
        </Link>
        <div className={styles.feature}>0 - $8.00 / month</div>
        <div className={styles.feature}>voice</div>
        <div className={styles.feature}>multi-lingual</div>
        <div className={styles.feature}>STT</div>
        <div className={styles.feature}>TTS</div>
        <div className={styles.feature}>playlists</div>
        <div className={styles.feature}>GPT-4</div>
        <div className={styles.dolby}>
          <Image alt="" src="dolby-icon-grey.svg" height={24} width={24} />
          <div className={styles.text}>Dolby Enhance</div>
        </div>
      </div>
    </>
  );
}
