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
          This app enables the user to search for a game and then locate the
          cheapest deal available for it. It was built using React, AuthO and
          the cheapshark API.
        </p>
        <h2 className={styles.subheader}>
          <a
            className={styles.link}
            href="https://cocktail-generator.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Cocktail finder
          </a>
        </h2>
        <p className={styles.blurb}>
          Similar to the price comparison, this app allows a user to search for
          a cocktail by an ingredient, and then view instructions on how to
          prepare it.
        </p>
        <h2 className={styles.subheader}>
          {" "}
          <a
            className={styles.link}
            href="https://dbdb-game-db.herokuapp.com/games"
            target="_blank"
            rel="noreferrer"
          >
            Games Database
          </a>
        </h2>
        <p className={styles.blurb}>
          A full stack app to record and view ratings for videogames, providing
          the option to search by different criteria (title, genre etc) as well
          as add in new games. This included a PostgreSQL backend, and frontend
          initially written in vanilla JavaScript. I have since deployed the
          backend to Heroku (linked above) and am currently refactoring the
          frontend into React.
        </p>
        <h2 className={styles.subheader}>Ashtanga Yoga Pose Database</h2>
        <h2 className={styles.subheader}>
          {" "}
          <a
            className={styles.link}
            href="https://github.com/RobertHJones/game-python-soc"
            target="_blank"
            rel="noreferrer"
          >
            Rock Paper Scissors
          </a>
        </h2>
        <p className={styles.blurb}>
          I spent an afternoon building a Rock Paper Scissors game in Python
          with a colleague. Neither of us had used Python before but we wrote a
          detailed plan and so were able to contruct a fully functional app
          without any issues.
        </p>
        <h2 className={styles.subheader}>
          {" "}
          <a
            className={styles.link}
            href="https://github.com/RobertHJones/python-text-adventure"
            target="_blank"
            rel="noreferrer"
          >
            Text Adventure
          </a>
        </h2>
        <p className={styles.blurb}>
          Having enjoyed the previous project with Python I decided to brush up
          my skills by making a start on a text adventure. This allowed me to
          combine coding with another passion of mine - writing.
        </p>
        <h2 className={styles.subheader}>Handstand Site</h2>
        Christmas Project. Python rockpaperscissors. Python text adventure? Yoga
        database. Handstand site. This page (meta)
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
