"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/Heading/NavBar";
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
      <NavBar/>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Dashboard
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Welcome to your hotel booking dashboard!
        </p>
        
      </div>
    </div>
  );
}