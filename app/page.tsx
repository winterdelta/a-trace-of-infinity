import Horizon from "@/components/Horizon/Vista";
import styles from "./page.module.css";
import AI from "@/components/Monaco/Chat/ai";
import {
  IBM_Plex_Mono,
  IBM_Plex_Sans_Arabic,
  Noto_Nastaliq_Urdu,
  UnifrakturMaguntia,
} from "next/font/google";
import React from "react";
import { FlightInternational, Sustainability } from "@carbon/icons-react";
import Multi_lingual from "@/components/Multi-lingual/Main";
import Lead_Header from "@/components/Monaco/Lead-Header/Copy";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["500"],
});

const urdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  style: ["normal"],
  weight: ["500"],
});

const uni = UnifrakturMaguntia({
  subsets: ["latin"],
  weight: ["400"],
});

const ar = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["200"],
});

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.linear_fade} />
      <Horizon />
      <Multi_lingual />
      <div className={styles.divider} />
      <Lead_Header />
      {/* <div className={styles.title}>
        <span className={styles.headline}>
          <span className={styles.headline}>AIs</span>
          <span className={styles.urduH}>
            <span className={urdu.className}>مصنوعی ذہانتیں</span>
          </span>
        </span>
      </div>
      <div className={styles.introContainer}>
        <div className={styles.intro}>
          <div className={mono.className}>
            STATE-OF-THE-ART + PRODUCTION-GRADE + R&D
          </div>
        </div>
      </div>

      <div className={styles.dividerHeader} />
      <div className={styles.itemRow}>
        <div className={styles.items}>
          <div className={styles.item}>
            <span className={styles.bold}>
              <span className={styles.ic}>
                <FlightInternational size={16} />
              </span>
              <span className={styles.ic}>Enterprise AI</span>
            </span>
            Enterprise-grade encrypted-apps spun with sophisticated
            configuration. Request interfaces injected with AIs. Dock new
            technologies into legacy stacks. Capture and advance the
            capitalisation of pre-existing or new markets.
          </div>
          <div className={styles.row}>
            <div className={styles.feature}>GPT-4</div>
            <div className={styles.feature}>Voice</div>
            <div className={styles.feature}>Analytics</div>
            <div className={styles.feature}>Encryption</div>
            <div className={styles.f}>
              <span className={styles.fi}>
                <Sustainability size={16} />
              </span>
              <span className={styles.fit}>CARBON ZERO (IN DEV)</span>
            </div>
          </div>
        </div>
      </div>
       */}
      <div className={styles.aiContainer}>
        <span className={styles.headline}>Chat with Client Services</span>
      </div>
      <div className={styles.chatContainer}>
        <AI />
      </div>
      {/* <div className={styles.label}>
        <span className={styles.logo}>W∆</span> &apos;TRACES OF INFINITY&apos;
      </div> */}
    </main>
  );
}
