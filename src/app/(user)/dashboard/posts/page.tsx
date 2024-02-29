import React from "react";
import Posts from "../_components/Posts";
import { robotoMono } from "@/app/fonts";

const PostsPage = () => {
  return (
    <div className={robotoMono.className}>
      All Posts
      <Posts />
    </div>
  );
};

export default PostsPage;
