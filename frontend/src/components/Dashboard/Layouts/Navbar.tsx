// import { useLogout } from '@/api/mutations'
import ThemeToggle from '@/components/others/ThemeToggle'
// import { useAuthStore } from '@/stores/authStore'
import { SidebarTrigger } from "@/components/ui/sidebar";
import React from 'react'

const Navbar: React.FC = () => {
  // const { mutate } = useLogout()
  // const { logout, user } = useAuthStore()

  // const logoutUser = () => {
  //   mutate(undefined, {
  //     onSuccess: () => {
  //       logout()
  //       navigate("/auth/login", { replace: true })
  //     }
  //   })
  // }
  

  return (
    <div className="border-b py-4 px-5 flex items-center justify-between">
      <SidebarTrigger />
      <div className="flex items-center gap-4">
        {/* Theme Toggle Button */}
        <ThemeToggle />

        {/* User Profile Section */}
        <div className="flex items-center gap-2">
          <div className="size-10 flex items-center justify-center rounded-full bg-primary text-white">
            U
          </div>
        </div>
        {/* <button className="p-2 rounded-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-700" onClick={()=> logoutUser()}>
          <LogOutIcon />
        </button> */}
      </div>
    </div>
  )
}

export default Navbar
