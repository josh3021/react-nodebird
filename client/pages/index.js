import React, {useEffect} from "react";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from "../store/reducers/user";

const dummy = {
  isLoggedIn: true,
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: "제로초",
      },
      content: "첫 번째 게시글",
      createdAt: "2020-05-19",
      img:
        "https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg",
    },
  ],
};

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  console.log(user);
  useEffect(() => {
    dispatch(loginAction)
  }, [])
  return (
    <>
      {user.isLoggedIn ? <div>로그인 했습니다: {user.nickname}</div> : <div>로그아웃 했습니다.</div>}
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map((c) => {
        return <PostCard key={c} post={c} />;
      })}
    </>
  );
};

export default Home;
