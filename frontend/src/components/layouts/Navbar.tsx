import React from "react";
import { Link } from "react-router-dom";
import Logo from "../others/Logo";
import { Button } from "../ui/button";
import ThemeToggle from "../others/ThemeToggle";

const navLinks = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "How it works",
  },
  {
    name: "Contact",
  },
];

const Navbar: React.FC = () => {
  return (
    <nav className="py-5 px-10 border-b flex justify-between items-center">
      <Logo className="logo" />
      <div className="flex gap-8">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={`/${link.name.toLowerCase()}`}
            className="font-semibold font-sm"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-5">
        <ThemeToggle />
        <Link to="/auth/login">
          <Button className="px-6 rounded-full">Login</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
