import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Upload } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST_REQUEST } from '../store/reducers/post';

const PostForm = () => {
  const post = useSelector((state) => state.post);
  const { isAddingPost } = post;
  const dispatch = useDispatch();

  const onFinish = (values) => {
    // values : {text: string(텍스트), upload: Array(사진)}
    dispatch({
      type: ADD_POST_REQUEST,
      data: values,
    });
  };

  const onFinishFailed = (error) => {
    console.log(JSON.stringify(error));
  };

  const normFile = (e) => {
    console.log('Uplaod event: ', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <Form
      encType="multipart/form-data"
      name="postForm"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item name="text" max={140}>
        <Input.TextArea maxLength={140} placeholder="블라블라" />
      </Form.Item>
      <div>
        {/* <input type="file" multiple hidden />
        <Button>이미지 업로드</Button> */}
        <Form.Item
          name="upload"
          label="Upload"
          valuePropName="file"
          getValueFromEvent={normFile}
          extra="업로드.png"
        >
          <Upload name="pictures" action="/upload.do" listType="picture">
            <Button>
              <UploadOutlined />
              Click to upload
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            style={{ float: 'right' }}
            htmlType="submit"
            loading={isAddingPost}
          >
            <a>짹짹</a>
          </Button>
        </Form.Item>
      </div>
      <div>
        {post.imagePaths.map((v) => {
          return (
            <div key={v} style={{ display: 'inline-block' }}>
              <img
                src="https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
                style={{ width: '200px' }}
                alt={v}
              />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Form>
  );
};

export default PostForm;
