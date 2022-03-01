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
      <main>
        <div className={styles.cvContainer}>
          <img
            className={styles.cvImage}
            // src="https://i.postimg.cc/QCDtKTYb/Robert-Jones-CV1024-1.png"
            src="https://i.postimg.cc/MKvXbZ97/Robert-Jones-West-Midlands-CV-1.png"
            alt=""
          />
          <img
            className={styles.cvImage}
            // src="https://lh3.googleusercontent.com/xZH6hRWVvn0lS8sWmJSaKrwaku0PoRqlyjmi5FFcuLtfTYPn1jThkwlYMQ8AM1vBCASOjFbLiJVBIAL-twMl4PGNGJu132NZDVxa4R8lgWyMm3C7oyvx2wOosMHKyt2YyhPVCTI-LdPOA-e4VtFGO0wWA9-Et-lNHZsrAQbOhhMKhF1a9mh_K5k2rk-ypBckjPZWmLnAUU_H1GZp8jKPGQTskoOOgxXlmGOFgbH48jLDfXc4B9FGBJrF0LgOUCCycumf-Pa8Sdurew0ZZKBOYniBz-7UAEw-eJ1P9yOX3qjRHfkNhpDta6JrjCW-hRloxE-g27RCMtLvBe6uMMRC2Qa0ip4pIOk6xdg4_AhBKH0lwRyZpwK3eHEdFuOVuGnB43GDrhKJkOyomErdm1q-ZA5Ry_bV4dGZaqJul8JaVF3LV5i-n2oAdCkBd6GQ1PHwJvpEjDA09BSDJM_tNfQb-U6tLsb-J2vR8MMn4R5w1QrzqRv4nqHtqU7CR-1EwaF0OaNeXPU5JDzt-mo_cZ0qZMectmToBLzOzcQW5FnHWSSqJiM74YPKpIslLaE9jCnAbuiejYeYDQT9OB7scrS7tx9n8rpM4h7iePAsxm_DhmCpfEUvB66-MZY-76SrOMttdAlXOf1fxG4X7oVWu7CPz8ZD3yoyp2eN5VnrTB6Vqsl6EY7Vyg50DRJjwwH4aqvQR4J4cx_2kk_d_EgQEmiQOVc=w722-h1024-no?authuser=0"
            src="https://i.postimg.cc/2yx5QSPf/Robert-Jones-CV1024-2.png"
            alt=""
          />
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
