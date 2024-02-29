/* eslint-disable @next/next/no-img-element */

import Posts from "./_components/Posts";

export default async function Dashboard(): Promise<JSX.Element> {
  return (
    <main className="flex min-h-screen bg-red-200 flex-col items-center justify-between p-24">
      <div>
        <div className="text-3xl font-bold">Dashboard</div>
        <Posts max={5} />
      </div>
    </main>
  );
}
