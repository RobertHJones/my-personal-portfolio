import React from "react";
import styles from "../../../styles/Home.module.css";

export default function Card({ image, text }) {
  return (
    <div className={styles.otherImages}>
      <img className={styles.imageWed} src={image} alt="" />
      <p className={styles.imageInfo}>{text}</p>
    </div>
  );
}
