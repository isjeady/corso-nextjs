export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 6000));

  return (
    <div className="border-4 border-dotted p-2 border-indigo-500">Footer</div>
  );
}
