"use client";

import styles from "./navigation.module.css";
import Link from "next/link";
import Pathname from "./pathname";
import { CircleStroke } from "@carbon/icons-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [isBackdropVisible, setIsBackdropVisible] = useState(false);

  const toggle_backdrop = () => {
    setIsScrollLocked(!isScrollLocked);
    document.body.style.overflow = isScrollLocked ? "auto" : "hidden";
    setIsBackdropVisible(!isBackdropVisible);
  };

  const sharedTransition = {
    duration: 0.3,
    ease: [0.42, 0, 0.58, 1],
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      y: "0%",
      opacity: 0.8,
      transition: sharedTransition,
    },
  };

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
      <div className={styles.menu}>
        <button onClick={toggle_backdrop} className={styles.w_}>
          <span className={styles.circle_icon}>
            <CircleStroke size={16} />
          </span>
        </button>
      </div>
      <AnimatePresence>
        {isBackdropVisible && (
          <motion.div
            className={`${styles.backdrop}`}
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
