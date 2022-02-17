import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Other() {
  return (
    <div className={styles.container}>
      {" "}
      <header>
        <div className={styles.topnav}>
          {" "}
          <div className={styles.menuicon}>
            <Link href="/">Home</Link>
          </div>
          {/* replace icon with an
          icon, add onclick to icon, when clicked, display div with the links in
          mobile friendly format, div created but hidden on default and display is toggled from hidden to block on click. State */}
          <div className={styles.desktop}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/cv">CV</Link>
            <Link href="/other">Other Information</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <h1 className={styles.title}>Other Information</h1>
      </header>
      <main>
        <h2>Music</h2>
        <h2>Yoga</h2>
        <h2>Gaming</h2>
        <h2>Film & Television</h2>
        <h2>Learning</h2>
        <h2>Sport</h2>
        SA work etc, MOOCs (list em), sport (snooker lesson with Nigel
        conservatoire champion, football tourney winners), chess school chess
        champion
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
