import Layout from "@/components/layouts/Layout";

export default function Posts(): JSX.Element {
  return (
    <main
      className={`flex min-h-screen  flex-col items-center justify-between p-24`}
    >
      <p className="text-7xl">Posts</p>
    </main>
  );
}

Posts.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>;
};
