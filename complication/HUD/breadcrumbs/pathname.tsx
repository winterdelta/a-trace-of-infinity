"use client";

import {
  MediaLibrary,
  TransformLanguage,
  Chip,
  EarthFilled,
} from "@carbon/icons-react";
import styles from "./breadcrumbs.module.css";
import { usePathname } from "next/navigation";

export default function Pathname() {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/playlist" && (
        <div className={styles.i__}>
          <MediaLibrary size={16} />
        </div>
      )}
      {pathname.includes("/playlist/") && (
        <div className={styles.i__}>
          <TransformLanguage size={16} />
        </div>
      )}
      {pathname === "/" && (
        <div className={styles.i__}>
          {/* <AssemblyReference size={16} /> */}
          <EarthFilled size={16} />
        </div>
      )}
      {pathname === "/tourbillon" && (
        <div className={styles.i__}>
          <Chip size={16} />
        </div>
      )}
      {/* <div className={styles.pathname}>
        {pathname === "" ? (
          ""
        ) : pathname === "playlist" ? (
          <Link href="/playlist">playlists</Link>
        ) : (
          <EarthFilled size={16}>
        )}
      </div> */}
      {/* {pathname.includes("99034458529") && (
        <>
          <div className={styles.divider}>/</div>
          <div className={styles.pathname}>job application</div>
        </>
      )} */}
    </>
  );
}
