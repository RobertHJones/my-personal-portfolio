import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";
import DesktopNav from "./Components/DesktopNav";
import MobileNav from "./Components/MobileNav";
import { useState, useEffect } from "react";
import { projects } from "../data/data.js";
import List from "./Components/List";

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
        <p className={styles.tech}>
          A sample of some of the projects on which I have worked and some
          upcoming projects
        </p>
      </header>
      <main className={styles.description}>
        {projects.map((item, index) => {
          return (
            <List
              link={item.link}
              key={index}
              title={item.title}
              text={item.info}
            />
          );
        })}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
