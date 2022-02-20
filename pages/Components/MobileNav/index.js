import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import "antd/dist/antd.css";

import { Menu, Dropdown, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item className={styles.mobileLink} key="1" icon={<UserOutlined />}>
      <Link href="/about">About</Link>
    </Menu.Item>
    {/* <Menu.Item key="2" icon={<UserOutlined />}>
      <Link href="/skills">Skills</Link>
    </Menu.Item> */}
    <Menu.Item key="2" className={styles.mobileLink} icon={<UserOutlined />}>
      <Link href="/cv">CV</Link>
    </Menu.Item>
    <Menu.Item key="3" className={styles.mobileLink} icon={<UserOutlined />}>
      <Link href="/other">Other Information</Link>
    </Menu.Item>
    <Menu.Item key="4" className={styles.mobileLink} icon={<UserOutlined />}>
      <Link href="/contact">Contact</Link>
    </Menu.Item>
  </Menu>
);

export default function MobileNav() {
  return (
    <Space wrap>
      <Dropdown.Button className={styles.mobileLink} overlay={menu}>
        <Link  href="/">Home</Link>
      </Dropdown.Button>
    </Space>
  );
}
