import React from "react";
import "antd/dist/antd.css";
import Link from "next/link";
import { Menu } from "antd";
import styles from "../../../styles/Home.module.css";

export default function DesktopNav() {
  return (
    <div className={styles.nav}>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="app">
          {" "}
          <Link href="/about">About</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/skills">Skills</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/projects">Projects</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/cv">CV</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/other">Other Information</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
