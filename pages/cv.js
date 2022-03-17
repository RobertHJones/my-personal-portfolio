import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import DesktopNav from "./Components/DesktopNav";
import MobileNav from "./Components/MobileNav";
import { useState, useEffect } from "react";
import "antd/dist/antd.css";

export default function Cv() {
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
    <div className={styles.containerExtended}>
      <header>
        <div>{isDesktop ? <DesktopNav /> : <MobileNav />} </div>
      </header>
      <main>
        <div className={styles.cvContainer}>
          <img
            className={styles.cvImage}
            src="https://i.postimg.cc/13n3m4J2/seventeen.png"
            alt=""
          />
          <img
            className={styles.cvImage}
            src="https://i.postimg.cc/NFFf6V8Q/msedge-1rb-Owc4vkq.png"
            alt=""
          />
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
