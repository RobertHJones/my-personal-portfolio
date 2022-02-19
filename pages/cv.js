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
    <div className={styles.container}>
      <header>
        <div>{isDesktop ? <DesktopNav /> : <MobileNav />} </div>
      </header>
      <main></main>
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
