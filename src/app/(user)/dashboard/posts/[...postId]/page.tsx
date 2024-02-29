import React from "react";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { postId: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const p = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId[0]}`
  ).then((res) => res.json());

  return {
    title: p.title,
  };
}

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
