import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";
import DesktopNav from "./Components/DesktopNav";
import MobileNav from "./Components/MobileNav";
import { useState, useEffect } from "react";

export default function Projects() {
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 736) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 736) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);
  return (
    <div className={styles.container}>
      <header>
        <div>{isDesktop ? <DesktopNav /> : <MobileNav />} </div>
        <h1 className={styles.title}>Projects</h1>
      </header>
      <main className={styles.description}>
        <h2 className={styles.subheader}>
          <a
            className={styles.link}
            href="https://game-price-search.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Videogame Price Comparison App
          </a>
        </h2>
        <p className={styles.blurb}>
          This app allows the user to search for a game and then find the
          cheapest deal available for it. It was built using React and the
          cheapshark API.
        </p>
        <h2 className={styles.subheader}>Cocktail finder</h2>
        <h2 className={styles.subheader}>Games Database</h2>
        <h2 className={styles.subheader}>Ashtanga Yoga Pose Database</h2>
        <h2 className={styles.subheader}>Rock Paper Scissors</h2>
        <h2 className={styles.subheader}>Text Adventure</h2>
        <h2 className={styles.subheader}>Handstand Site</h2>
        Game price checker. Cocktail finder. Christmas Project. Python
        rockpaperscissors. Python text adventure? Yoga database. Handstand site.
        This page (meta)
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
