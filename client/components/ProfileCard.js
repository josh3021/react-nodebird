import { Avatar, Button, Card } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_OUT_REQUEST } from '../store/reducers/user';

const ProfileCard = () => {
  const user = useSelector((state) => state.user);
  const me = user.me;
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);
  return (
    <Card
      title="Profile"
      actions={[
        <div key="twit">
          짹짹 <br /> {me.Posts.length}
        </div>,
        <div key="following">
          팔로잉 <br /> {me.Followings.length}
        </div>,
        <div key="follower">
          팔로워 <br /> {me.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar> {me.nickname[0]} </Avatar>} title={me.nickname} />
      <Button onClick={onLogout}> 로그아웃 </Button>
    </Card>
  );
};

export default ProfileCard;
