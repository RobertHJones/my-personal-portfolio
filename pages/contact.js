import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Contact() {
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
        <h1 className={styles.title}>Contact me</h1>
      </header>
      <main>
        <p>
          If you would like to contact me about any opportunities, please feel
          free to do so at any of the below.
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Email address:{" "}
            <Image
              src="https://img.icons8.com/ios-filled/24/000000/mail.png"
              alt=""
              width={24}
              height={24}
            />
            <a
              className={styles.link}
              href="mailto: roberthuwjones@outlook.com"
            >
              {" "}
              RobertHuwJones@outlook.com{" "}
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <Image
              src="https://img.icons8.com/material/24/4a90e2/linkedin--v1.png"
              alt=""
              width={24}
              height={24}
            />
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/robert-jones-711bb489/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Robert Jones
            </a>
          </li>
          <li>
            Github:{" "}
            <Image
              src="https://img.icons8.com/material/24/000000/github.png"
              alt=""
              width={24}
              height={24}
            />
            <a
              className={styles.link}
              href="https://github.com/RobertHJones"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Robert Jones
            </a>{" "}
          </li>
        </ul>
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
        <a href="https://icons8.com/icon/20675/github">GitHub icon by Icons8</a>
      </footer>
    </div>
  );
}
