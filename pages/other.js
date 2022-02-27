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
        <p className={styles.tech}>
          This page details and showcases some of my other interests outside
          Tech
        </p>
      </header>
      <main>
        <div className={styles.otherTopContainer}>
          <div className={styles.otherText}>
            {" "}
            <h2>Music</h2>
            <p className={styles.interests}>
              Having been a musician for most of my life (studying to
              Master&#39;s level), I spend a great deal of my time making music.
              I have performed at most of the major venues across the UK as well
              as many festivals, including Glastonbury and Boomtown. Similar to
              coding, music is all about creating with other people, and when
              you form a group all pulling together the results are incredible.
            </p>
            <h2>Yoga</h2>
            <p className={styles.interests}>
              I can genuinely say that yoga has changed my life. I have been
              practising for over six years and now have a daily practice.
              Because of yoga I can do things that I thought would never be
              physically possible, but more importantly it has given me a sense
              of inner peace and tranquilty that always sees me through the hard
              times and enables me to put things in perspective. I mostly
              practice Ashtanga yoga and have a particular affinity for
              handstands, which I am starting to teach around the Birmingham
              area (watch this space!)
            </p>
            <h2>Gaming</h2>
            <p className={styles.interests}>
              Gaming is my favourite way to unwind, although I also like to be
              organised about it and keep track of every game I played as well
              as what I thought of it (you can find out more on my Projects
              page). In gaming terms there&#39;s a lot to be excited about at
              the moment, not least the Steam Deck, for which I can&#39;t wait
              for my pre-order to come through!
            </p>
            <h2>Film & Television</h2>
            <p className={styles.interests}>
              From time to time I work as an extra in films and television
              shows. Whilst not as glamorous as it might sound, it&#39;s usually
              good fun (if you don&#39;t mind 12-16 hour days) and you often
              meet a lot of very interesting people along the way. Look out for
              me in{" "}
              <a
                href="https://www.imdb.com/title/tt2640044/"
                target="_blank"
                rel="noreferrer"
              >
                Masters of the Air
              </a>{" "}
              in 2022.{" "}
            </p>
            <h2>Learning</h2>
            <p className={styles.interests}>
              Even before I started coding I loved learning new things, and so
              have completed quite a few MOOCs across a range of topics.
              Probably my favourite area was Palaeontology, but other highlights
              include Linguistics, the Philosophy of Emotions, Astrophysics and
              Sustainable Development. It&#39;s remarkable what fantastic
              resources are out there available to everyone for free (this
              applies for coding too)
            </p>
            <h2>Other stuff</h2>
            <p className={styles.interests}>
              It was impossible to make an exhaustive list of everything I like
              doing on this page so a few honourable mentions include reading
              (my favourite authors being Dostoevsky, Haruki Murakami and W
              Somerset Maugham, although I&#39;ve been getting into non-fiction
              too more recently - especially books about coding!), sport (you
              can see a photo of my greatest football moment below), and running
              (although a little out of shape right now).
            </p>
            {/* football photo? Books etc */}
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
            <img
              className={styles.imageWed}
              src="https://i.postimg.cc/j5hrkK7h/received-1235211326673499.jpg"
              alt=""
            />
            <p className={styles.imageInfo}>On set/on the eve of battle</p>
            <img
              className={styles.imageWed}
              src="https://i.postimg.cc/wv384fSG/Judy2.png"
              alt=""
            />
            <p className={styles.imageInfo}>
              Hanging out with Renée Zellweger in Judy (that&#39;s me walking
              towards the camera)
            </p>
            <img
              className={styles.imageWed}
              src="https://i.postimg.cc/sDjPkknx/BoRap2.png"
              alt=""
            />
            <p className={styles.imageInfo}>
              Live Aid 1985 in Bohemian Rhapsody
            </p>
            <img
              className={styles.imageWed}
              // src="https://i.postimg.cc/gjmcJFjB/football.png"
              src="https://i.postimg.cc/bvwBq6qH/footballadm.png"
              alt=""
            />
            <p className={styles.imageInfo}>
              Shortly before one of my greatest sporting triumphs - BCU staff
              football champions 2018. Fortunately there&#39;s no photgraphic
              evidence of how I looked after the tournament!
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
