import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { ReactElement } from "react";
import "antd/dist/antd.css";
import { Space } from "antd";
import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";
import DesktopNav from "./Components/DesktopNav";
import MobileNav from "./Components/MobileNav";
import { useState, useEffect } from "react";

export default function Contact() {
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
        <h1 className={styles.title}>Contact me</h1>
      </header>
      <main >
        <div className={styles.description}>
        <p>
          If you would like to contact me about any opportunities, please feel
          free to do so at any of the below.
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Email address: <MailOutlined />
            <a
              className={styles.link}
              href="mailto: roberthuwjones@outlook.com"
            >
              {" "}
              RobertHuwJones@outlook.com{" "}
            </a>
          </li>
          <li>
            LinkedIn: <LinkedinOutlined />
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/robert-jones-711bb489/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Robert Jones
            </a>
          </li>
          <li>
            Github: <GithubOutlined />
            <a
              className={styles.link}
              href="https://github.com/RobertHJones"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Robert Jones
            </a>{" "}
          </li>
        </ul>
        </div>
      </main>
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
