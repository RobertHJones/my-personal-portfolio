import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import DesktopNav from "./Components/DesktopNav";
import MobileNav from "./Components/MobileNav";
import { useState, useEffect } from "react";
import "antd/dist/antd.css";

export default function About() {
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
        <h1 className={styles.title}>About me</h1>
      </header>
      <p className={styles.description}>
        I am an ambitious and creative professional currently training as a full
        stack JavaScript developer on the School of Code Bootcamp, with a
        previous career in higher education. Having started the bootcamp with
        minimal programming experience I have now built and deployed multiple
        full-stack projects, including RESTful backend solutions, from scratch.
        Frontend development includes utilising React and Next.js. I have
        experience of unit testing with Jest and end-to-end testing with
        Cypress. Source control applications used include Git with GitHub. I am
        experienced in working under agile methodologies. I love coding and so
        have also begun exploring Python as a personal interest, as well as
        regularly reading books around the area. From my previous career I have
        a great deal of experience in delivering excellent customer service, and
        of working effectively in a team to deliver solutions under pressure and
        to deadlines. I was rated Outstanding in all performance reviews within
        my previous role due to my efficiency, accuracy and support of the wider
        team. I was inspired to change career by the dynamic character of coding
        - which enables me to tap into my creative and problem solving potential
        - and its highly collaborative, energising nature, and am now excited
        for what the future holds.
      </p>
      {/* List of tech stack, Personal development TS etc. Start with bootcamp
      experience then do education/work background */}
      <footer className={styles.footer}></footer>
    </div>
  );
}
