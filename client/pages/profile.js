import {StopOutlined} from "@ant-design/icons";
import {Button, Card, List} from "antd";
import React from "react";
import NicknameEditForm from "../components/NicknameEditForm";

const Profile = () => {
  return (
    <div>
      <NicknameEditForm />
      <List
        style={{marginBottom: "20px"}}
        grid={{gutter: 4, xs: 2, md: 3}}
        size="small"
        header={<div>팔로워 목록</div>}
        loadMore={<Button style={{width: "100%"}}>더 보기</Button>}
        bordered
        dataSource={["제로초", "바보", "노드버드오피셜"]}
        renderItem={(item) => (
          <List.Item style={{marginTop: "20px"}}>
            <Card actions={[<StopOutlined key={"stop"} />]}>
              <Card.Meta description={item}></Card.Meta>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Profile;
