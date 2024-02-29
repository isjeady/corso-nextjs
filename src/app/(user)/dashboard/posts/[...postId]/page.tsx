import React from "react";

const PostPage = async ({ params }: { params: { postId: string[] } }) => {
  const d = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId[0]}`
  );
  const data = await d.json();

  return (
    <div>
      PostPage :
      <pre>
        <code>{JSON.stringify(params.postId, undefined, 2)}</code>
      </pre>
      <div className="text-xl font-bold">Title : {data.title}</div>
      <div className="text-base border p-2 ">Body : {data.body}</div>
      {/*     <pre>
        <code>{JSON.stringify(data, undefined, 2)}</code>
      </pre> */}
    </div>
  );
};

export default PostPage;
