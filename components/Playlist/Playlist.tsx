// "use client";

import styles from "./Playlist.module.css";

export default function Playlist() {
  return (
    <div className={styles.imageContainer}>
      <video className={styles.video} autoPlay playsInline muted loop>
        <source
          src="https://waveforms.s3.us-east-2.amazonaws.com/images/Text+to+Video+Gen-2+8s.mp4"
          type="video/mp4"
        />
      </video>
      <div className={styles.overlay} />
    </div>
  );
}
