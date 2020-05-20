import {Avatar, Card} from "antd";
import React from "react";
const dummy = {
  nickname: "하나초",
  Posts: [],
  Followings: [],
  Followers: [],
};

const ProfileCard = () => {
  return (
    <Card
      title="Profile"
      actions={[
        <div key="twit">
          짹짹 <br /> {dummy.Posts.length}
        </div>,
        <div key="following">
          팔로잉 <br /> {dummy.Followings.length}
        </div>,
        <div key="follower">
          팔로워 <br /> {dummy.Followers.length}
        </div>,
      ]}>
      <Card.Meta
        avatar={<Avatar> {dummy.nickname[0]} </Avatar>}
        title={dummy.nickname}
      />
    </Card>
  );
};

export default ProfileCard;
