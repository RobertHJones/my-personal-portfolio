import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import "antd/dist/antd.css";
import DesktopNav from "./Components/DesktopNav";
import MobileNav from "./Components/MobileNav";
import { useState, useEffect } from "react";

export default function Home() {
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
      <Head>
        <title>Robert Jones Personal Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div>{isDesktop ? <DesktopNav /> : <MobileNav />} </div>
        <h1 className={styles.title}>Robert Jones Personal Portfolio</h1>
        <p className={styles.tech}>
          Javascript | React | Next.js | Node.js | Express | PostgreSQL | Heroku
          | Jest | SuperTest | Cypress | Docker | Agile | Git
        </p>
      </header>
      <main>
        <div className={styles.homeFraming}>
          <p className={styles.description}>
            Hi I am Rob. I am a Full Stack Software Engineer based in
            Birmingham.
            <br></br>
            This portfolio showcases my projects and skills, as well as also
            providing details regarding my background and some other information
            about me. This is currently a work in progress.
          </p>
          {/* <div>
            <Image
              src="https://lh3.googleusercontent.com/wLr9vg-lXy5lAdCr7suJGWfWBNBppHFiDwzQkrOkFtoVUwY2EJ4Ssslefu9pxdwYvC0RHHJbBNjvzyDNdNI5BzZGCOugpufXGQoY_Goqb0ynsEEI035vNiLL8xHOEeR7rfX8hxApBkM-8oWHjNuJT7tE4nIyzoMueRDIJVpaX3p-ZXwIwh5XPBM_vIhQfyWGoQiYem2sWh-T1Xhgp8OUh6eRYkpinPLo_3p9YR2pqBxjddBlhyniisfoFSyhceTLrLmhuS3OGdrTWcrOKVa_tNiJMDUZP0a1uZAaeOrrBUqskUuqX8eL3ZHI520stjGsSkAOFcTvMZi0vrBwDhswL9PNGh-oiNV_beyb6ip0PBtEkNCz-xarFlflNElJmz6b5IqBbYDDWPS953EJPPqamH8RyvQqRhKOihual_m6lkCAFpgJA6OOmVrE0SQ6yWeM7VCAuJLzBJ28a03JDHn-5GY2esLKjfh4fHfrpwcpUFP7ngKZGrjDaYQbxtNrXYRLJHH_Y5TBc_Eb5oHVOv0pxAJ3STreHxVioJ_5XKhH9L4fayLVAWFbV9EGr-BAjlFQ9M8V0kBC4svo-G3NOCCfIwCegOBieOhL1nnXAEGBk6vAzEasTT2XsbDSkM13NQ63zuVK0SHZPD51Zr6oY7vKYQk2OKS5vKay4CZfd2eVirI5ezb0ZsHur1SdR-TslIzH-bB0AekpZRMglcfQId7lRsk=w1280-h720-no?authuser=0"
              alt="Rob"
              width={1280}
              height={720}
              className={styles.image}
            />
          </div> */}
          <img
            className={styles.image}
            src="https://scontent.fltn3-1.fna.fbcdn.net/v/t31.18172-8/11057595_10152896118106301_3657998345476906860_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=19026a&_nc_ohc=1NrTGUA0ZKMAX_1TT3F&_nc_ht=scontent.fltn3-1.fna&oh=00_AT8xhRvSLjg6O_Mox1Pcvam3FvSPa-Z4yhLnFQEmTTN0Rg&oe=6236B0D8"
            alt=""
          />
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
