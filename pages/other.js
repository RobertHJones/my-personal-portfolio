import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";
import DesktopNav from "./Components/DesktopNav";
import MobileNav from "./Components/MobileNav";
import { useState, useEffect } from "react";
import { images, interests } from "../data/data";
import Card from "./Components/Card";
import Interests from "./Components/Interests";

export default function Other() {
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
      {" "}
      <header>
        <div>{isDesktop ? <DesktopNav /> : <MobileNav />} </div>
        <h1 className={styles.title}>Other Information</h1>
        <p className={styles.tech}>
          This page details and showcases some of my other interests outside
          Tech
        </p>
      </header>
      <main>
        <div className={styles.otherTopContainer}>
          <div className={styles.otherText}>
            {interests.map((item, index) => {
              return (
                <Interests
                  key={index}
                  subject={item.subject}
                  text={item.info}
                />
              );
            })}{" "}
          </div>
          <div className={styles.otherImages}>
            {images.map((item, index) => {
              return (
                <Card key={index} image={item.image} text={item.caption} />
              );
            })}
          </div>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
