import { useAuth } from "@/firebase/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const WithAuth = (WrappedComponent) => {
    const ComponentWithAuth = (props) => {
      const { user } = useAuth()
      const router = useRouter()
  
      useEffect(() => {
        if (!user) {
          router.replace("/")
        }
      }, [user, router])
  
      if (!user) {
        return null // or a loading spinner
      }
  
      return <WrappedComponent {...props} />
    }
  
    ComponentWithAuth.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`
  
    return ComponentWithAuth
  }
  
  export default WithAuth
  