import React from 'react';
import { useSelector } from 'react-redux';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';

const Home = () => {
  const user = useSelector((state) => state.user);
  const post = useSelector((state) => state.post);
  const { me } = user;
  const { mainPosts } = post;

  return (
    <div>
      {me && <PostForm />}
      {mainPosts.map((c) => {
        return <PostCard key={c.createdAt} mainPost={c} me={me} />;
      })}
    </div>
  );
};

export default Home;
