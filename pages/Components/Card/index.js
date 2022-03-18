import React from "react";
import styles from "../../../styles/Home.module.css";

export default function Card({ image, text }) {
  // image and caption from data
  return (
    <div>
      <img className={styles.imageWed} src={image} alt="" />
      <p className={styles.imageInfo}>{text}</p>
    </div>
  );
}
