"use client";
import Logout from "@/components/Logout";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import React, { Suspense } from "react";

export default function DashboardLayout({
  children,
  header,
  footer,
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}>) {
  const pathName = usePathname();
  const router = useRouter();

  const menu = [
    { label: "Home", path: "/" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "I Tuoi Posts", path: "/dashboard/posts" },
    { label: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <div className="border-2 border-red-500 m-2">
      <div className="flex justify-between px-2 items-center ">
        <div className="flex gap-x-4 my-2">
          {menu.map((item, idx) => (
            <Link
              key={idx}
              href={item.path}
              className={pathName == item.path ? "text-blue-500 font-bold" : ""}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => {
              router.push("/dashboard/settings");
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
          >
            Vai alle Settings
          </button>
          <Logout />
        </div>
        <div className="text-xs">mail@esempio.it</div>
      </div>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <div className="p-4">{header}</div>
      <div className="p-8">{children}</div>
      <div className="p-4">{footer}</div>
      {/*  </Suspense> */}
    </div>
  );
}
