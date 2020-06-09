import {
  EllipsisOutlined,
  HeartOutlined,
  MessageOutlined,
  RetweetOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Card, Comment, Form, Input, List } from 'antd';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../store/reducers/post';

const PostCard = ({ mainPost, me }) => {
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [commentContent, setCommentContent] = useState('');

  const post = useSelector((state) => state.post);

  const { isAddingComment, commentAdded } = post;

  const dispatch = useDispatch();

  useEffect(() => {
    setCommentContent('');
  }, [commentAdded === true]);

  const onClickComment = () => {
    setCommentFormOpened((prev) => !prev);
  };

  const onChangeCommentText = useCallback((e) => {
    setCommentContent(e.target.value);
  }, []);

  const onSubmitComment = (data) => {
    if (!me) {
      return alert('로그인을 먼저해주세요.');
    }
    // 후에 me도 넣어줘야겠지?
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: {
        ...data,
        postId: mainPost.id,
      },
    });
  };

  return (
    <div>
      <Card
        key={+mainPost.createdAt}
        cover={mainPost.img && <img alt="example" src={mainPost.img} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          <HeartOutlined key="heart" />,
          <MessageOutlined key="comment" onClick={onClickComment} />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
        extra={<Button> 팔로우 </Button>}
      >
        <Card.Meta
          avatar={<Avatar> {mainPost.User.nickname[0]} </Avatar>}
          title={mainPost.User.title}
          description={mainPost.content}
        />
      </Card>
      {commentFormOpened && (
        <>
          <Form name="postComment" onFinish={onSubmitComment}>
            <Form.Item name="content">
              <Input.TextArea rows={4} value={commentContent} onChange={onChangeCommentText} />
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={isAddingComment}>
              작성
            </Button>
          </Form>
          <List
            header={`${mainPost.Comments ? mainPost.Comments.length : 0} 댓글`}
            itemLayout="horizontal"
            dataSource={mainPost.Comments || []}
            renderItem={(item) => (
              <List.Item>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </List.Item>
            )}
          />
        </>
      )}
    </div>
  );
};

PostCard.propTypes = {
  mainPost: PropTypes.shape({
    User: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
    img: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
  }),
  me: PropTypes.any,
};

export default PostCard;
