import React from 'react';
import { useSelector } from 'react-redux';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';

const Home = () => {
  const user = useSelector((state) => state.user);
  const post = useSelector((state) => state.post);
  const { me, isLoggedIn } = user;
  const { mainPosts } = post;

  return (
    <div>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((c) => {
        return <PostCard key={c} mainPost={c} me={me} isLoggedIn={isLoggedIn} />;
      })}
    </div>
  );
};

export default Home;
