"use client";

import styles from "@/complication/HUD/styles.module.css";
import Breadcrumbs from "./breadcrumbs/breadcrumbs";
import { AddFilled } from "@carbon/icons-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AI_Nav() {
  const [isBackdropVisible, setIsBackdropVisible] = useState<boolean>(false);
  const [isEphemeralVisible, setIsEphemeralVisible] = useState<boolean>(false);

  return (
    <div
      style={{
        zIndex: 0,
        pointerEvents: "all",
        position: "fixed",
        isolation: "isolate",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <div className={styles.bg_linear_fade} />
      <Breadcrumbs
        isBackdropVisible={isBackdropVisible}
        setIsBackdropVisible={setIsBackdropVisible}
        isEphemeralVisible={isEphemeralVisible}
        setIsEphemeralVisible={setIsEphemeralVisible}
      />
      {/* <Tourbillon /> */}
      <motion.nav
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.314,
          ease: [0.314, 0.314, 0.157, 1],
        }}
        className={styles.nav}
      >
        {/* {!isEphemeralVisible && (
          <div className={styles.functionals}>
            <div className={styles.chat_cognitive}>
              <AddFilled size={16} />
            </div>
          </div>
        )} */}
        <motion.div
          className={styles.nav_labels_anim}
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1.256,
            duration: 0.314,
            ease: [0.314, 0.314, 0.157, 1],
          }}
        ></motion.div>
      </motion.nav>
    </div>
  );
}
