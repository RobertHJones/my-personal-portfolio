import React from "react";
import styles from "../../../styles/Home.module.css";

function Card(image, caption) {
  return (
    <div>
      <img className={styles.imageWed} src={image} alt="" />
      <p className={styles.imageInfo}>{caption}</p>
    </div>
  );
}

export default Card;
