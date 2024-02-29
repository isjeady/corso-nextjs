import Layout from "@/components/layouts/Layout";
import { useRouter } from "next/router";

export default function Login(): JSX.Element {
  const router = useRouter();

  return (
    <main className={`flex   flex-col items-center justify-between p-24`}>
      <p className="text-7xl">Login</p>

      {router.query.error && (
        <p className="text-red-500 font-bold">{router.query.error}</p>
      )}
    </main>
  );
}
