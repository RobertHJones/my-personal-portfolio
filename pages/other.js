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
            <h2>Gaming</h2>
            <h2>Film & Television</h2>
            {/* borap photo, judy photo, brittania, his dark materials */}
            <h2>Learning</h2>
            <h2>Sport</h2>
            {/* football photo? */}
          </div>
          <div className={styles.otherImages}>
            <img
              className={styles.imageWed}
              src="https://scontent.fbhx3-1.fna.fbcdn.net/v/t31.18172-8/13568781_10153640150631301_1464159804165777912_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=gMLbRnyAfxsAX_LTGu6&_nc_ht=scontent.fbhx3-1.fna&oh=00_AT8ExmaKGdyteHimEZB6bSFS9ROw7HvDwowOx96s41XZNQ&oe=623BFC99"
              alt=""
            />
            <p className={styles.imageInfo}>
              Performing at Glastonbury a few years back
            </p>

            <img
              className={styles.imageWed}
              src="https://i.ibb.co/tbY3qrz/IMG-20211002-WA0003.jpg"
              alt=""
            />
            <p className={styles.imageInfo}>
              Playing my friend&#39;s wedding in 2021, after what seemed like an
              eternity without performing
            </p>
            <img
              className={styles.imageWed}
              src="https://i.postimg.cc/05zV2XLZ/IMG-20200823-WA0000.jpg"
              alt=""
            />
            <p className={styles.imageInfo}>Last gig of 2020</p>
            <img
              className={styles.imageWed}
              src="https://scontent.fbhx3-1.fna.fbcdn.net/v/t1.6435-9/83866270_10156954904896301_5436646414471921664_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_ohc=thiEP_9Ls-cAX8NQbnO&_nc_ht=scontent.fbhx3-1.fna&oh=00_AT_-Hva350gm1nx_KpvGUYphD9uPk5WsHBOnzWIC3p-LCw&oe=623F35FE"
              alt=""
            />
            <p className={styles.imageInfo}>
              Handstand in front of the Royal Palace in Warsaw
            </p>
            <img
              className={styles.imageWed}
              src="https://i.postimg.cc/bN09V77C/Photo-1.jpg"
              alt=""
            />
            <p className={styles.imageInfo}>
              Messing around in the self-practice group
            </p>
            <img
              className={styles.imageWed}
              src="https://i.postimg.cc/14xn93Lx/IMG-20191029-WA0004.jpg"
              alt=""
            />
            <p className={styles.imageInfo}>
              Being stood on by a renowned yoga teacher...not as painful as it
              looks
            </p>
            <img
              className={styles.imageWed}
              src="https://i.postimg.cc/02mZ7M5w/IMG-20201110-170803-resized-20220226-043102448.jpg"
              alt=""
            />
            <p className={styles.imageInfo}>Finally got the splits</p>
            <img
              className={styles.imageWed}
              src="https://i.postimg.cc/Vv00QCZB/IMG-20210906-WA0000.jpg"
              alt=""
            />
            <p className={styles.imageInfo}>
              Greatest honour a yogi can have...teacher&#39;s cat falls asleep
              on you
            </p>
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
