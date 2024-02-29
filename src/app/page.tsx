import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-green-200 flex-cols items-center justify-center p-24">
      <div>
        <div className="text-3xl font-bold">Example Next.js con App Router</div>
        <Link href="/dashboard">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </Link>
      </div>
    </main>
  );
}
