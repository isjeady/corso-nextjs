/* eslint-disable @next/next/no-img-element */

import { authOptions } from "@/lib/auth";
import Posts from "./_components/Posts";
import { getServerSession } from "next-auth";

export default async function Dashboard(): Promise<JSX.Element> {
  const session = await getServerSession(authOptions);

  return (
    <main className="flex min-h-screen bg-red-200 flex-col items-center justify-between p-24">
      <div>
        <div className="text-3xl font-bold">Dashboard</div>
        <p>I tuoi dati di Login:</p>
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <Posts max={5} />
      </div>
    </main>
  );
}
