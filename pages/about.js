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
    <div className={styles.containerExtended}>
      {" "}
      <header>
        <div>{isDesktop ? <DesktopNav /> : <MobileNav />} </div>
        <h1 className={styles.title}>About me</h1>
      </header>
      <h2 className={styles.subheader}>My Journey</h2>
      <p className={styles.aboutRob}>
        I have always been interested in technology (in particular gaming) from
        a young age, and having found myself in a career that, whilst solid, was
        limited in potential and not challenging intellectually I was very drawn
        to the constantly evolving and multi-faceted world of tech. After making
        some initial forays into HTML, CSS and a bit of Javascript in my own
        time I discovered the School of Code bootcamp, and immediately
        registered my interest. Having been selected through a rigorous
        application process from a field of applicants in excess of 1800, it was
        here that my journey with tech really began. Having started the bootcamp
        with minimal programming experience I have now built and deployed
        multiple full-stack projects, including RESTful backend solutions, from
        scratch. My frontend development experience includes utilising React and
        Next.js, and I have experience of unit testing with Jest and SuperTest,
        and end-to-end testing with Cypress. I love coding and so have also
        begun exploring Python as a personal interest, as well as regularly
        reading books around the area, my current personal favourite being The
        Clean Coder by Uncle Bob. As personal development I am also currently
        working on TypeScript, Docker, MongoDB, AWS and Storybook. The creative
        and problem solving nature of coding is what originally drew me to a
        career in tech, but one of the biggest lessons I have taken from the
        bootcamp - and what has become my favourite aspect of software
        engineering - is the supreme importance of teamwork and AGILE working
        while creating projects. I cannot wait to continue my journey into tech
        and land my first role upon completing the bootcamp!
      </p>
      <h2 className={styles.subheader}>Past Life</h2>
      <p className={styles.aboutRob}>
        After leaving school I was awarded a full scholarship to study Music
        Performance at the Royal Birmingham Conservatoire, subsequently gaining
        a second scholarship to study my Master&#39;s degree, for which I was
        awarded Distinction. I worked as a freelance musician and cello teacher
        for Northants Music Trust for a few years after this before moving back
        to Birmingham to work at Birmingham City University, an good employer
        with whom I stayed for over seven years. My first role was in student
        support, from which I moved into Admissions before joining School of
        Code in November 2021. From my previous career I have a great deal of
        experience in delivering excellent customer service, and of working
        effectively in a team to deliver solutions under pressure and to
        deadlines. I was rated Outstanding in all performance reviews within my
        previous role due to my efficiency, accuracy and support of the wider
        team. If you want to know more about what I get up to in my spare time,
        feel free to check out my &#39;Other Information&#39; page!
      </p>
      <footer className={styles.footer}></footer>
    </div>
  );
}
