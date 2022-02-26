import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";
import DesktopNav from "./Components/DesktopNav";
import MobileNav from "./Components/MobileNav";
import { useState, useEffect } from "react";

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
      </header>
      <main>
        <div className={styles.otherTopContainer}>
          <div className={styles.otherText}>
            {" "}
            <h2>Music</h2>
            <h2>Yoga</h2>
            {/* Handstand photos, splits, lucy standing on? */}
            <h2>Gaming</h2>
            <h2>Film & Television</h2>
            {/* borap photo, judy photo, brittania,  */}
            <h2>Learning</h2>
            <h2>Sport</h2>
            {/* football photo? */}
          </div>
          <div className={styles.otherImages}>
            <div>
              <img
                className={styles.imageGlas}
                src="https://scontent.fbhx3-1.fna.fbcdn.net/v/t31.18172-8/13568781_10153640150631301_1464159804165777912_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=gMLbRnyAfxsAX_LTGu6&_nc_ht=scontent.fbhx3-1.fna&oh=00_AT8ExmaKGdyteHimEZB6bSFS9ROw7HvDwowOx96s41XZNQ&oe=623BFC99"
                alt=""
              />
              <p className={styles.imageInfo}>
                Performing at Glastonbury a few years back
              </p>
            </div>
            <div>
              <img
                className={styles.imageWed}
                src="https://i.ibb.co/tbY3qrz/IMG-20211002-WA0003.jpg"
                alt=""
              />
              <p className={styles.imageInfo}>
                Playing my friend&#39;s wedding in 2021, after what seemed like
                an eternity without performing
              </p>
            </div>
          </div>
        </div>

        <div className={styles.containerOther}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* SA work etc, MOOCs (list em), books goodreads, sport (snooker lesson
        with Nigel conservatoire champion, football tourney winners), school
        chess champion */}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
