import React from "react";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";

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
  return (
    <>
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map((c) => {
        return <PostCard key={c} post={c} />;
      })}
    </>
  );
};

export default Home;
