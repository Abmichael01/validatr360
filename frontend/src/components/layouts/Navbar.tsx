"use client"

import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../others/Logo"
import { Button } from "../ui/button"
import ThemeToggle from "../others/ThemeToggle"
import { Menu, X } from "lucide-react"

const navLinks = [{ name: "Home" }, { name: "About" }, { name: "How it works" }, { name: "Contact" }]

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="py-4 px-4 sm:px-6 md:px-10 border-b flex justify-between items-center relative bg-background">
      <Logo className="logo" />

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 lg:gap-8">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={`/${link.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="font-semibold text-sm hover:text-primary transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-4 lg:gap-5">
        <ThemeToggle />
        <Link to="/auth/login">
          <Button className="px-4 lg:px-6 rounded-full">Login</Button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0  border-b shadow-lg md:hidden bg-background">
          <div className="flex flex-col p-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={`/${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-semibold text-sm py-2 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <ThemeToggle />
              <Link to="/auth/login" onClick={toggleMenu}>
                <Button className="px-4 rounded-full">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

