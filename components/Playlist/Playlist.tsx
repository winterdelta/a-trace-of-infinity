// "use client";

import styles from "./Playlist.module.css";

export default function Playlist() {
	return (
		<div className={styles.imageContainer}>
			{/* <Image
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
			/> */}
			<video className={styles.video} autoPlay playsInline muted loop>
				<source
					// src='/butterfly.mp4'
					src='https://waveforms.s3.us-east-2.amazonaws.com/images/Gen-2+16s+cam_H+75.mp4'
					type='video/mp4'
				/>
			</video>
			<div className={styles.overlay} />
		</div>
	);
}
