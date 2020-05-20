import {Col, Input, Menu, Row} from "antd";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import LoginForm from "./LoginForm";
import ProfileCard from "./ProfileCard";

const dummy = {
  isLoggedIn: false,
};

const AppLayout = ({children}) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a> 노드버드 </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search
            enterButton
            style={{
              verticalAlign: "middle",
            }}
          />
        </Menu.Item>
      </Menu>
      <Row gutter={10}>
        <Col xs={24} md={6}>
          {dummy.isLoggedIn ? <ProfileCard /> : <LoginForm />}
        </Col>
        <Col xs={24} md={6}>
          {children}
        </Col>
        <Col xs={24} md={6}></Col>
        <Col xs={24} md={6}>
          베베베
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.element,
};

export default AppLayout;
