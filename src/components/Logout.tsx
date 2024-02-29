"use client";
import React from "react";
import { signOut } from "next-auth/react";

const Logout = () => {
  const handleLogout = () => {
    signOut();
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Logout
    </button>
  );
};

export default Logout;
