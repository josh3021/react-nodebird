import {Button, Checkbox, Form, Input} from "antd";
import React, {useCallback} from "react";
import {useDispatch} from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  const onFinish = useCallback((values) => {
    console.log(`successFinish: ${JSON.stringify(values)}`);
  }, []);
  const onFinishFailed = useCallback(
    ({
      errorFields: [
        {
          errors: [errorvalues],
        },
      ],
    }) => {
      alert(errorvalues);
    },
    [],
  );

  return (
    <>
      <Form
        name="signup"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <Form.Item
          label="이메일"
          name="email"
          rules={[
            {
              required: true,
              message: "이메일은 필수 항목입니다.",
            },
            {
              type: "email",
              message: "올바른 이메일 형식이 아닙니다.",
            },
            {
              max: 50,
              message: "이메일은 50자 이내입니다.",
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="닉네임"
          name="username"
          rules={[
            {
              required: true,
              message: "닉네임은 필수 항목입니다.",
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="비밀번호"
          name="password"
          rules={[
            {
              required: true,
              message: "비밀번호는 필수 항목입니다.",
            },
          ]}>
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="비밀번호 확인"
          name="password-confirm"
          rules={[
            {
              required: true,
              message: "비밀번호 확인은 필수 항목입니다.",
              type: "string",
            },
            ({getFieldValue}) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("비밀번호가 일치하지 않습니다.");
              },
            }),
          ]}>
          <Input.Password />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            회원가입
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Signup;
