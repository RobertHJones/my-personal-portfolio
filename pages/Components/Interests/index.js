import React from "react";
import styles from "../../../styles/Home.module.css";

export default function Interests({ subject, text }) {
  // interest subject and text
  return (
    <div>
      <h2>{subject}</h2>
      <p className={styles.interests}>{text}</p>
    </div>
  );
}
