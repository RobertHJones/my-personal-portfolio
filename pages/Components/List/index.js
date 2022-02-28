import React from "react";
import styles from "../../../styles/Home.module.css";

export default function List({ link, title, text }) {
  return (
    <div>
      <h2 className={styles.subheader}>
        <a className={styles.link} href={link} target="_blank" rel="noreferrer">
          {title}
        </a>
      </h2>
      <p className={styles.blurb}>{text}</p>
    </div>
  );
}
