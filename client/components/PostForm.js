import {Button, Form, Input} from "antd";
import React from "react";

const dummy = {
  imagePaths: [],
};

const PostForm = () => {
  return (
    <Form encType="multipart/form-data">
      <Input.TextArea maxLength={140} placeholder="블라블라" />
      <div>
        <input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{float: "right"}} htmlType="submit">
          짹짹
        </Button>
      </div>
      <div>
        {dummy.imagePaths.map((v) => {
          return (
            <div key={v} style={{display: "inline-block"}}>
              <img
                src={
                  "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg"
                }
                style={{width: "200px"}}
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
