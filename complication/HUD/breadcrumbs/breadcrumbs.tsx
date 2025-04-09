"use client";

import styles from "./breadcrumbs.module.css";
import Link from "next/link";
import Pathname from "./pathname";
import {
  AssemblyReference,
  ChevronRight,
  Draw,
  Power,
} from "@carbon/icons-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Ephemeral_Fade_Playlist from "@/complication/HUD/ephemera/ephemeral";
// import { TourbillonContext } from "@/complication/tourbillon/Tourbillon_Clock_Context";
import { useContext } from "react";
// import { useAI } from "@/app/AI_Context";
import { useRouter } from "next/navigation";

interface BreadcrumbsProps {
  isBackdropVisible: boolean;
  setIsBackdropVisible: (value: boolean) => void;
  isEphemeralVisible: boolean;
  setIsEphemeralVisible: (value: boolean) => void;
}

export default function Breadcrumbs({
  isBackdropVisible,
  setIsBackdropVisible,
  isEphemeralVisible,
  setIsEphemeralVisible,
}: BreadcrumbsProps) {
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  const pathname = usePathname();
  // const { isAPIFiring } = useAI();

  // const { iconIndex } = useContext(TourbillonContext);
  const router = useRouter();

  const toggle_backdrop = () => {
    setIsScrollLocked(!isScrollLocked);
    document.body.style.overflow = isScrollLocked ? "auto" : "hidden";
    setIsBackdropVisible(!isBackdropVisible);
  };

  const sharedTransition = {
    duration: 0.314,
    ease: [0.314, 0.314, 0.157, 1],
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
    <div className={styles.breadcrumbs}>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.314,
          ease: [0.314, 0.314, 0.157, 1],
        }}
        className={styles.home}
      >
        {pathname !== "/" ? (
          <Link href="/">
            <motion.div
              // initial={{ borderColor: "rgba(125, 125, 125, 0)" }}
              // animate={{
              //   borderColor:
              //     iconIndex === 4
              //       ? "var(--border-tourbillon)"
              //       : "rgba(125, 125, 125, 0)",
              // }}
              // transition={{
              //   duration: 0.000185,
              //   ease: [0.314, 0.314, 0.157, 1],
              // }}
              className={styles.w}
            >
              <AssemblyReference size={16} />
            </motion.div>
          </Link>
        ) : (
          <Link href="https://winterdelta.com">
            <motion.div
              className={styles.w}
              style={{
                color: "var(--font)",
              }}
              // initial={{ borderColor: "red" }}
              // animate={{
              //   borderColor:
              //     iconIndex === 4
              //       ? "var(--border-tourbillon)"
              //       : "rgba(125, 125, 125, 0)",
              // }}
              transition={{
                duration: 0.000185,
                ease: [0.314, 0.314, 0.157, 1],
              }}
            >
              W∆
            </motion.div>
          </Link>
        )}
        <div className={styles.divider}>
          <ChevronRight size={8} />
        </div>
        <div className={styles.path}>
          <Pathname />
        </div>
        {/* <div className={styles.divider_}>
          <DotMark size={8} />
        </div>
        <div className={styles.path}>
          <div
            style={{
              border: "1px solid var(--orange)",
              height: "8px",
              width: "8px",
              borderRadius: "10px",
              marginLeft: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </div> */}
      </motion.div>
      {/* <div className={styles.menu_user_profile}>
        {isAuthenticated ? (
          <LogoutLink className={styles.login_logout}>
            <div className={styles.i_}>
              <UserAvatarFilledAlt size={16} />
            </div>
          </LogoutLink>
        ) : (
          <LoginLink className={styles.login_logout}>
            <div className={styles.i_}>
              <UserAvatarFilledAlt size={16} />
            </div>
          </LoginLink>
        )}
      </div> */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.314,
          ease: [0.314, 0.314, 0.157, 1],
        }}
        className={styles.menu}
      >
        {/* <Image
          width={16}
          height={16}
          src="https://waveforms.s3.us-east-2.amazonaws.com/images/IMG_4187.png"
          alt=""
          style={{
            height: "16px",
            width: "16px",
            // border: "2px solid red",
            borderRadius: "100px",
            marginRight: "4px",
          }}
        /> */}
        {/* {isAPIFiring && (
          <motion.div
            animate={{
              color: isAPIFiring
                ? ["var(--background)", "var(--invert)", "var(--background)"]
                : "var(--background)",
            }}
            transition={{
              color: {
                duration: 0.0314 * 4.8,
                repeat: isAPIFiring ? Infinity : 0,
                ease: [0.314, 0.314, 0.157, 1],
              },
            }}
            style={{
              marginRight: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SoftwareResourceCluster size={16} />
          </motion.div>
        )} */}
        {/* {isAuthenticated && (
          <button
            className={styles.w_}
            style={{ marginRight: "-4px" }}
            onClick={() => router.refresh()}
          >
            <Renew size={16} />
          </button>
        )} */}
        {/* <button
          onClick={() => setIsEphemeralVisible(!isEphemeralVisible)}
          className={`${styles.w_} ${styles.draw}`}
          style={{ marginRight: "4px" }}
        >
          <span className={styles.circle_icon}>
            <Draw size={16} />
          </span>
        </button> */}
        <button
          style={{ color: "transparent", marginRight: "15px" }}
          className={styles.power}
        >
          <Power size={12} />
        </button>
      </motion.div>
      {/* <AnimatePresence>
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
      <AnimatePresence>
        {isEphemeralVisible && <Ephemeral_Fade_Playlist />}
      </AnimatePresence> */}
    </div>
  );
}
