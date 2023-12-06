import Image from "next/image";
import styles from "./Playlist.module.css";

export default function Playlist() {
	return (
		<div className={styles.imageContainer}>
			<Image
				src='/Whale.jpg'
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
		</div>
	);
}
