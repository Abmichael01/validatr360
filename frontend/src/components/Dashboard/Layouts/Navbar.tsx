import ThemeToggle from '@/components/others/ThemeToggle'
import { SidebarTrigger } from "@/components/ui/sidebar";
<<<<<<< HEAD
import React from 'react'

const Navbar: React.FC = () => {
=======
import React, { useEffect } from 'react'
import { LogOut, User, Bug } from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useNavigate } from 'react-router-dom'

const Navbar: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    // Debug log
    console.log('Navbar auth state:', { user, isAuthenticated });
  }, [user, isAuthenticated]);

  const handleLogout = async () => {
    console.log('Logout clicked');
    try {
      await logout();
      console.log('Logout successful');
      navigate('/auth/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  const goToProfile = () => {
    console.log('Profile clicked');
    navigate('/dashboard/profile');
  }

  const goToAuthTest = () => {
    navigate('/dashboard/auth-test');
  }

>>>>>>> merge-collab
  return (
    <div className="border-b py-4 px-5 flex items-center justify-between sticky top-0 bg-background z-[10]">
      <SidebarTrigger />
      <div className="flex items-center gap-4">
        {/* Theme Toggle Button */}
        <ThemeToggle />

<<<<<<< HEAD
        {/* User Profile Section */}
        <div className="flex items-center gap-2">
          <div className="size-10 flex items-center justify-center rounded-full bg-primary text-white">
            U
          </div>
        </div>
        {/* <button className="p-2 rounded-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-700" onClick={()=> logoutUser()}>
          <LogOutIcon />
        </button> */}
=======
        {/* Auth Test Button */}
        <Button variant="outline" size="sm" onClick={goToAuthTest} className="mr-2">
          <Bug className="mr-2 h-4 w-4" /> Auth Test
        </Button>

        {/* Direct Logout Button for Testing */}
        <Button variant="outline" size="sm" onClick={handleLogout} className="mr-2">
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>

        {/* User Profile Section */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground">
                {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user?.name || 'User'}</p>
                <p className="text-xs leading-none text-muted-foreground">{user?.email || 'user@example.com'}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={goToProfile}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
>>>>>>> merge-collab
      </div>
    </div>
  )
}

export default Navbar
