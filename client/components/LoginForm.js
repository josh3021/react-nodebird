import { Button, Checkbox, Form, Input } from 'antd';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../store/reducers/user';

const LoginForm = () => {
  const user = useSelector((state) => state.user);
  const { isLoggingIn, me } = user;

  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch({
      type: LOG_IN_REQUEST,
      data: values,
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.error(errorInfo);
  };
  return (
    <Form
      name="login"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="아이디"
        name="username"
        rules={[
          {
            required: true,
            message: '아이디를 입력해주세요.',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="비밀번호"
        name="password"
        rules={[
          {
            required: true,
            message: '비밀번호를 입력해주세요.',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item name="remember" valuePropName>
        <Checkbox> Remember Me </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoggingIn}>
          <a>로그인</a>
        </Button>
        <Link href="/signup">
          <a> 회원가입 </a>
        </Link>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
