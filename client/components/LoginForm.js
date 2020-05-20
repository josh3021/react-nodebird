import {Button, Checkbox, Form, Input} from "antd";
import Link from "next/link";
import React from "react";

const LoginForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };
  return (
    <Form
      name="login"
      initialValues={{remember: true}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <Form.Item
        label="아이디"
        name="username"
        rules={[{required: true, message: "아이디를 입력해주세요."}]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="비밀번호"
        name="password"
        rules={[{required: true, message: "비밀번호를 입력해주세요."}]}>
        <Input.Password />
      </Form.Item>
      <Form.Item name="remember" valuePropName={true}>
        <Checkbox>Remember Me</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          로그인
        </Button>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
