import Link from "next/link";
import styles from "./HUD.module.css";
import Pathname from "./pathname";

export default function HUD() {
  return (
    <>
      <div style={{ zIndex: "1000" }} className={styles.winterdelta}>
        <Link className={styles.logo} href="/">
          W∆
        </Link>
      </div>
      <Pathname />
    </>
  );
}
