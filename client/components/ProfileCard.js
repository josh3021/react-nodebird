import {Avatar, Button, Card} from "antd";
import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {logoutAction} from "../store/reducers/user";

const ProfileCard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const onLogout = useCallback(() => {
    dispatch(logoutAction), [];
  }, []);
  return (
    <Card
      title="Profile"
      actions={[
        <div key="twit">
          짹짹 <br /> {user.Posts.length}
        </div>,
        <div key="following">
          팔로잉 <br /> {user.Followings.length}
        </div>,
        <div key="follower">
          팔로워 <br /> {user.Followers.length}
        </div>,
      ]}>
      <Card.Meta
        avatar={<Avatar> {user.nickname[0]} </Avatar>}
        title={user.nickname}
      />
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  );
};

export default ProfileCard;
