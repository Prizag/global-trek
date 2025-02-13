"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/Heading/NavBar";
import Link from "next/link";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      router.push("/"); 
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/"); 
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <NavBar />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Dashboard
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Welcome to your hotel booking!
        </p>

        <Link href="/login">
          <button className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition">
            Login
          </button>
        </Link>

        <Link href="/signup">
          <button className="w-full my-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition">
            Signup
          </button>
        </Link>

      </div>
    </div>
  );
}
