import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ChangeLanguage from "./ChangeLanguage";

const Menu = () => {
  const [post, setPost] = useState(null);
  const router = useRouter();
  const handleGetPost = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
    const p = await res.json();
    setPost(p);
  };

  useEffect(() => {
    handleGetPost();
  }, []);

  return (
    <div>
      <div className="flex gap-2 border-b border-gray-900 justify-center mx-auto text-center py-2 w-full">
        <div>
          <Link href="/">HOME</Link>
        </div>
        |
        <div>
          <Link href="/posts">POSTS</Link>
        </div>
        |
        <div>
          <Link href="/posts/1">POST 1</Link>
        </div>
        <ChangeLanguage />
        {!post && <div>Loading...</div>}
      </div>
    </div>
  );
};

export default Menu;
