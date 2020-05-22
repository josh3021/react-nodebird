import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import {loginAction} from "../store/reducers/user";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const post = useSelector((state) => state.post);
  const isLoggedIn = user.isLoggedIn;
  const mainPosts = post.mainPosts;
  useEffect(() => {
    dispatch(loginAction);
  }, []);
  return (
    <>
      {isLoggedIn ? (
        <div>로그인 했습니다: {user.nickname}</div>
      ) : (
        <div>로그아웃 했습니다.</div>
      )}
      {isLoggedIn && <PostForm />}
      {mainPosts.map((c) => {
        return <PostCard key={c} post={c} />;
      })}
    </>
  );
};

export default Home;
