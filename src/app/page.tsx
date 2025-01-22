"use client"
import Logout from "@/components/Logout";
import { useAuth } from "@/firebase/AuthContext";
import Link from "next/link";

export default function Home() {
  const {user, loading} = useAuth()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="flex flex-col z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <h1 className="text-4xl">Smart Trens App</h1>
      <div className="flex flex-col gap-4 justify-center items-center mt-8">
        {user ? (
          <>
            <p className="text-xl">Welcome, {user.email}!</p>
            <Link
              href="/dashboard"
              className="text-blue-500 underline text-lg"
            >
              <p>Visit the protected page</p>
            </Link>
            <Logout />
          </>
        ) : (
          <>
            <p className="text-xl">You are not signed in.</p>
            <Link href="/auth/login">
              <button className="p-2 rounded-sm bg-blue-500 text-lg font-semibold text-white w-48">
                Login here
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  </main>
  );
}
