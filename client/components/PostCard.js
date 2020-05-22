import {
  EllipsisOutlined,
  HeartOutlined,
  MessageOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import {Avatar, Button, Card} from "antd";
import PropTypes from "prop-types";
import React from "react";

const PostCard = ({post}) => {
  return (
    <Card
      key={+post.createdAt}
      cover={post.img && <img alt="exaple" src={post.img} />}
      actions={[
        <RetweetOutlined key="retweet" />,
        <HeartOutlined key="heart" />,
        <MessageOutlined key="messaage" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
      extra={<Button>팔로우</Button>}>
      <Card.Meta
        avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
        title={post.User.title}
        description={post.content}
      />
    </Card>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    User: PropTypes.object,
    content: PropTypes.string,
    img: PropTypes.string,
    createdAt: PropTypes.string,
  }),
};

export default PostCard;
