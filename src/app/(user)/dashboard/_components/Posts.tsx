"use client";
import invalidatePostsTag from "@/actions";
import action from "@/actions";
import Link from "next/link";
import React from "react";

// sleep time expects milliseconds
function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const Posts = ({ max = 0 }) => {
  const [data, setData] = React.useState([]);

  const handleGetPosts = async () => {
    const d = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await d.json();
    setData(data);
    //if (max === 0) max = data.length;
  };

  /* const d = await fetch("http://localhost:3001/posts", {
    next: { tags: ["postsTag"] },
  }); */
  // invalidatePostsTag();

  //await sleep(2000);

  return (
    <div>
      <button
        onClick={handleGetPosts}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
      >
        Get Posts
      </button>
      {data.map((item: any, idx: number) => (
        <Link key={item.id} href={`/dashboard/posts/${item.id}`}>
          <div className="flex items-center">
            <div className="ml-4 text-md font-semibold">{idx + 1})</div>
            <div className="ml-4 text-xs font-semibold">{item.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
