import { useAuth } from "@/firebase/AuthContext"
import { auth } from "@/firebase/Firebase"
import { signOut } from "firebase/auth"
import toast from "react-hot-toast"


const Logout = () => {
    const { user } = useAuth()
  
    const handleLogout = async () => {
      try {
        await signOut(auth)
        toast.success('You\'re Logged out');
        console.log("User signed out")
      } catch (error) {
        console.error("Error signing out:", error)
      }
    }
  
    if (!user) {
      return null // Don't display the sign out button if the user is not logged in
    }
  
    return (
      <button
        onClick={handleLogout}
        className="p-2 rounded-sm bg-red-500 font-semibold text-white"
      >
        Logout
      </button>
    )
  }
  
  export default Logout