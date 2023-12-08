// "use client";

import Image from "next/image";
import styles from "./Playlist.module.css";

export default function Playlist() {
	return (
		<div className={styles.imageContainer}>
			<Image
				src='/USGS4.jpg'
				className={styles.image}
				alt=''
				fill={true}
				quality={100}
				style={{
					objectFit: "cover",
					overflow: "hidden",
					objectPosition: "centre",
				}}
				sizes='(max-width: 768px) 250px, 400px'
			/>
			{/* <Spline scene='https://prod.spline.design/LE2fitzSYsYIk8rw/scene.splinecode' /> */}
			<video className={styles.video} autoPlay playsInline muted loop>
				<source
					// src='https://waveforms.s3.us-east-2.amazonaws.com/WAYMAKER.mp4'
					// src='/shoroms3.mp4'
					src='https://waveforms.s3.us-east-2.amazonaws.com/images/Text+to+Video+Gen-2+12s.mp4'
					type='video/mp4'
				/>
			</video>
			{/* <div className={styles.overlay} /> */}
		</div>
	);
}
