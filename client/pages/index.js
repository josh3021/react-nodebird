import React from 'react';
import { useSelector } from 'react-redux';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';

const Home = () => {
  const user = useSelector((state) => state.user);
  const post = useSelector((state) => state.post);
  const isLoggedIn = user.isLoggedIn;
  const mainPosts = post.mainPosts;

  return (
    <div>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((c) => {
        return <PostCard key={c} post={c} />;
      })}
    </div>
  );
};

export default Home;
