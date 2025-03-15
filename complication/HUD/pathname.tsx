"use client";

import { EarthFilled } from "@carbon/icons-react";
import styles from "./navigation.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Pathname() {
  const path = usePathname().substring(1);
  function removeAfterSlash(inputString: string): string {
    const index = inputString.indexOf("/");
    if (index > -1) {
      return inputString.substring(0, index);
    } else {
      return inputString;
    }
  }

  const pathname = removeAfterSlash(path);
  return (
    <>
      <div className={styles.divider}>/</div>
      <div className={styles.pathname}>
        {pathname === "" ? (
          <span className={styles.homei}>
            <EarthFilled size={16} />
          </span>
        ) : pathname === "playlist" ? (
          <Link href="/">playlists</Link>
        ) : (
          pathname
        )}
      </div>
      {usePathname().includes("99034458529") && (
        <>
          <div className={styles.divider}>/</div>
          <div className={styles.pathname}>job application</div>
        </>
      )}
    </>
  );
}
