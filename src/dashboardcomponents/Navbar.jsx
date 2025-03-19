"use client";

import Container from "./Container";
import { FiUserCheck } from "react-icons/fi";

import { usePathname, useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
// components/Navbar.js
const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="w-[95%] h-16 bg-gradient-to-r from-neutral-600 via-neutral-600 to-neutral-700  flex justify-between items-center px-6 m-4 text-gray-300 rounded-4xl sticky top-0">
      <h1 className="text-xl font-bold">Menu</h1>
      <div className="flex space-x-4">
        {pathname === "/" && (
          <>
            <button
              onClick={() => handleNavigation("/sign-in")}
              className="cursor-pointer bg-gradient-to-r from-purple-500 via-pink-400 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:border-2 hover:border-white "
            >
              Login
            </button>
            <button
              onClick={() => handleNavigation("/sign-up")}
              className=" cursor-pointer bg-gradient-to-l from-purple-500 via-pink-400 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:border-2 hover:border-white "
            >
              Sign Up
            </button>
          </>
        )}

        {pathname === "/sign-up" && (
          <button
            onClick={() => handleNavigation("/sign-in")}
            className=" cursor-pointer bg-gradient-to-r from-purple-500 via-pink-400 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:border-2 hover:border-white "
          >
            Login
          </button>
        )}

        {pathname === "/sign-in" && (
          <button
            onClick={() => handleNavigation("/sign-up")}
            className=" cursor-pointer bg-gradient-to-r from-purple-500 via-pink-400 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:border-2 hover:border-white"
          >
            Sign Up
          </button>
        )}

        {pathname === "/dashboard" && session && (
            <>
              <span className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-400 to-pink-500">Welcome, {session.user?.name} !</span>
              <button
                onClick={() => handleNavigation("/")}
                className=" cursor-pointer bg-gradient-to-r from-purple-500 via-pink-400 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:border-2 hover:border-white"
              >
                Log Out
              </button>
            </>
          )}
      </div>
    </div>
  );
};

export default Navbar;
