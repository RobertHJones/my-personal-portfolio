import React from "react";
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

  // set navbar by screen size
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
              // map through interest data to display them on the page
              return (
                <Interests
                  key={index}
                  subject={item.subject}
                  text={item.info}
                />
              );
            })}{" "}
          </div>
          <h2 className={styles.gallery}>Gallery</h2>
          <div className={styles.otherImages}>
            {images.map((item, index) => {
              // map through images to display them on the page
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
