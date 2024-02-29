import Layout from "@/components/layouts/Layout";

export default function Dashboard(): JSX.Element {
  return (
    <main
      className={`flex min-h-screen  flex-col items-center justify-between p-24`}
    >
      <p className="text-7xl">La tua dashboard Privata</p>
    </main>
  );
}

Dashboard.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>;
};
