"use client"
import WithAuth from "@/utils/WithAuth"

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-24 gap-4">
      <h1 className="text-4xl">Dashboard Page</h1>
      <p>Only logged in users can see this page.</p>
    </div>
  )
}

export default WithAuth(DashboardPage)
