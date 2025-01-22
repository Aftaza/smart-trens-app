import { auth } from "@/firebase/Firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginError, setLoginError] = useState("")
    const route = useRouter()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password)
            route.push("/")
        }catch (error){
            console.log("erorr logging in: ", error)
            setLoginError(error.message)
        }
    }

    return (
        <form
          onSubmit={handleLogin}
          className="flex flex-col p-8 gap-4 text-black min-w-80"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="p-2 rounded-sm"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="p-2 rounded-sm"
          />
          <button
            type="submit"
            className="p-2 rounded-sm bg-green-500 font-semibold text-lg text-white"
          >
            Login
          </button>
          {loginError && (
            <p className="text-red-500 text-sm">{loginError.message}</p>
          )}
        </form>
      )

}

export default Login