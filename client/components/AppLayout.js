import { Col, Input, Menu, Row } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_USER_REQUEST } from '../store/reducers/user';
import LoginForm from './LoginForm';
import ProfileCard from './ProfileCard';

const AppLayout = ({ children }) => {
  const user = useSelector((state) => state.user);

  const { me } = user;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!me) {
      dispatch({
        type: LOAD_USER_REQUEST,
      });
    }
  }, []);

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
            <a> 프로필 </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search
            enterButton
            style={{
              verticalAlign: 'middle',
            }}
          />
        </Menu.Item>
      </Menu>
      <Row gutter={10}>
        <Col xs={24} md={6}>
          {me ? <ProfileCard /> : <LoginForm />}
        </Col>
        <Col xs={24} md={6}>
          {children}
        </Col>
        <Col xs={24} md={6} />
        <Col xs={24} md={6}>
          베베베
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppLayout;
