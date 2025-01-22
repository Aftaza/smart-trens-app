"use client";

import Login from "@/components/Login";

const LoginPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-6 py-10">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-4xl text-gray-700 text-center mb-6">Login</h1>
                <Login />
            </div>
        </div>
    );
};

export default LoginPage;