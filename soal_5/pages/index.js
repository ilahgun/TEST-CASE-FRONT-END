import Image from "next/image";
import styles from "../styles/Gallery.module.css";

export default function Gallery() {
  const images = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ];

  return (
    <div className={styles.gallery}>
      {images.map((src, index) => (
        <div key={index} className={styles.image}>
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            width={300}
            height={300}
            layout="responsive"
          />
        </div>
      ))}
    </div>
  );
}
