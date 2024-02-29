import Link from "next/link";
import React from "react";

// sleep time expects milliseconds
function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const Posts = async ({ max = 0 }) => {
  const d = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await d.json();
  //await sleep(2000);

  if (max === 0) max = data.length;

  return (
    <div>
      {data.slice(0, max).map((item: any, idx: number) => (
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
