import Layout from "@/components/layouts/Layout";
import LayoutDetails from "@/components/layouts/LayoutDetails";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PostDetail(): JSX.Element {
  const router = useRouter();
  const query = router.query;
  const { id } = query;

  const [post, setPost] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleGetPost = async () => {
    const res = await fetch(`/api/posts/${id}`);
    const p = await res.json();
    setPost(p);
  };

  useEffect(() => {
    handleGetPost();
  }, [id]);

  return (
    <main className={`flex  flex-col items-center justify-between p-24`}>
      <p className="text-7xl">Post Detail :{JSON.stringify(id)}</p>
      {!post && <div>Loading...</div>}
      {post && <div>{JSON.stringify(post)}</div>}
      {/*  {post && (
        <ul>
          <li>Post Title: {post?.title}</li>
          <li>Post Body: {post?.body}</li>
        </ul>
      )} */}
    </main>
  );
}

PostDetail.getLayout = function getLayout(page: JSX.Element) {
  return (
    <Layout>
      <LayoutDetails>{page}</LayoutDetails>
    </Layout>
  );
};
