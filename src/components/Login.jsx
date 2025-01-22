import { auth } from "@/firebase/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const route = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            route.push("/");
        } catch (error) {
            console.log("Error logging in: ", error);
            setLoginError(error.message);
        }
    };

    return (
        <form
            onSubmit={handleLogin}
            className="flex flex-col gap-4 text-black"
        >
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="p-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="p-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
            />
            <button
                type="submit"
                className="p-2 rounded-sm bg-green-500 font-semibold text-lg text-white hover:bg-green-600 transition duration-200"
            >
                Login
            </button>
            {loginError && (
                <p className="text-red-500 text-sm text-center">{loginError}</p>
            )}
        </form>
    );
};

export default Login;