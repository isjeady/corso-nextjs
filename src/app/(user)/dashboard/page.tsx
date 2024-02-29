/* eslint-disable @next/next/no-img-element */

import { getServerSession } from "next-auth";
import Posts from "./_components/Posts";
import { authOptions } from "@/lib/auth";
import Logout from "@/components/Logout";

export default async function Dashboard(): Promise<JSX.Element> {
  const session = await getServerSession(authOptions);

  return (
    <main className="flex min-h-screen bg-red-200 flex-col items-center justify-between p-24">
      <div>
        <div className="text-3xl font-bold">Dashboard</div>
        <pre>
          <code>{JSON.stringify(session, undefined, 2)}</code>
        </pre>
        <Logout />
        <Posts max={5} />
      </div>
    </main>
  );
}
