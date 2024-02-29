import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import profilePic from "@/_assets/image.jpg";

export const metadata: Metadata = {
  title: "Homepage Title",
  description: "Homepage Description",
  twitter: {
    site: "@site",
    description: "Twitter Description",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen bg-green-200 flex-cols items-center justify-center p-24">
      <div>
        <div className="text-3xl font-bold">Example Next.js con App Router</div>
        <div className="border border-gray-900">
          <Image
            className="rounded-full"
            src={"/img/image.jpg"}
            width={400}
            height={400}
            alt="Picture of the author"
          />
          <Image
            alt="Picture of the author"
            className="rounded-full"
            src="https://static.isjeady.com/media/next-js-guida-completa-per-sviluppatori-moderni%2F17069761016.png"
            width={400}
            height={400}
            priority
          />
        </div>
        <Link href="/dashboard">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </Link>
      </div>
    </main>
  );
}
