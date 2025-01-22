"use client";
import { useAuth } from "@/firebase/AuthContext";
import Typewriter from "@/utils/Typewirter";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { user, loading } = useAuth();
  const route = useRouter();

  useEffect(() => {
    if (!loading && user) {
      route.push('dashboard');
    }
  }, [user, loading]);

  console.log(loading);
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-6 py-10">
      <main className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl bg-white shadow-lg rounded-lg p-8">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="mb-4 w-full h-10">
            <Typewriter />
          </div>
          <p className="mt-4 text-lg text-gray-700">
            Sistem data siswa kelas akhir
          </p>
          {user ? (
            <p className="mt-4 text-xl text-green-600">Welcome, {user.email}!</p>
          ) : (
            <div className="mt-4">
              <p className="text-xl text-red-600">You are not signed in.</p>
              <Link href="/auth/login">
                <button className="mt-2 p-2 rounded-sm bg-blue-500 text-lg font-semibold text-white w-48 hover:bg-blue-600 transition duration-200">
                  Login here
                </button>
              </Link>
            </div>
          )}

          <p className="mt-10 text-gray-500">made by ❤ Afta</p>
        </div>

        <div className="flex justify-center w-full md:w-1/2 mt-8 md:mt-0">
          <Image
            src='/bg_fix2.png'
            alt="Background Image"
            height={500}
            width={500}
            className="rounded-lg"
          />
        </div>
      </main>
    </div>
  );
}