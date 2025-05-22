"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FacebookIcon, YouTubeIcon } from "./icons/svgIcons";

import { HiBars2 } from "react-icons/hi2";
import { MdOutlineHighlightOff } from "react-icons/md";
import ToggleTheme from "./toggleTheme";
import { googleLogout } from "@react-oauth/google";
import axios from "axios";
import { toast } from 'react-toastify';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  const navItemsPc = [
    { href: "/khoa-hoc", label: "Khóa Học" },
    { href: "/review", label: "Review" },
    { href: "/tu-van", label: "Tư Vấn" },
    { href: "/donate", label: "Donate" },
  ];

  const navItemsMobile = [
    { href: "/khoa-hoc", label: "Khóa Học" },
    { href: "/review", label: "Review" },
    { href: "/tu-van", label: "Câu Hỏi Thường Gặp" },
    { href: "/donate", label: "Donate" },
    { href: "/about", label: "About" },
  ];

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

   const handleLogout = async () => {
    try {
      googleLogout();
  
      localStorage.removeItem("user");
      setUser(null);
  
      await axios.post("http://localhost:4000/api/auth/logout");
  
      toast.success("Đã đăng xuất thành công!");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <header className="h-[56px] sticky top-0 right-0 left-0 z-[1000] border-b-[1px] border-[#e7ebf0] bg-white/80 dark:bg-[#0A1929] backdrop-blur-[20px]">
      <div className="max-w-[1200px] px-[20px] md:px-[30px] mx-auto">
        <nav className="flex items-center justify-between">
          <div className="w-[40%] md:w-[75%] flex items-center">
            <div className="w-[100%] md:w-[20%] flex items-center justify-center">
              <Link
                href="/"
                className="text-2xl font-bold w-full text-[#1A2027] dark:text-[#fff]"
              >
                Dev Linh
              </Link>
            </div>

            {/* Desktop menu */}
            <ul className="hidden md:flex gap-2.5 my-4 w-[80%]">
              {navItemsPc.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`py-2 px-2.5 rounded-[10px] text-[#1A2027] dark:text-[#fff] font-bold text-[14px]  hover:bg-[#F3F6F9] ${
                        isActive ? "bg-[#F3F6F9]" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-[60%] md:w-[25%] flex justify-end my-2.5">
            <ul className="flex gap-2.5">
              <li className="cursor-pointer text-[14px]">
                <Link
                  href=""
                  className="w-[34px] h-[34px] flex items-center justify-center border-[1px] border-solid border-[#E0E3E7] rounded-[10px] hover:bg-white"
                >
                  <YouTubeIcon />
                </Link>
              </li>
              <li className="cursor-pointer text-[14px]">
                <Link
                  href=""
                  className="w-[34px] h-[34px] flex items-center justify-center border-[1px] border-solid border-[#E0E3E7] rounded-[10px] hover:bg-white"
                >
                  <FacebookIcon />
                </Link>
              </li>
              <li className="cursor-pointer text-[14px]">
                <Link
                  href=""
                  className="w-[34px] h-[34px] flex items-center justify-center border-[1px] border-solid border-[#E0E3E7] rounded-[10px] hover:bg-white"
                >
                  <ToggleTheme />
                </Link>
              </li>

              <li className="cursor-pointer text-[14px] hidden md:block">
                {user ? (
                  <Link
                    href="/"
                    className={`flex items-center py-2 px-2.5 uppercase rounded-[10px] h-[34px] font-bold text-[14px] text-[#1A2027] dark:text-[#fff] hover:bg-[#F3F6F9] ${
                      pathname == "/about" ? "bg-[#F3F6F9]" : ""
                    }`}
                    onClick={handleLogout}
                  >
                    {user.name}
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className={`flex items-center py-2 px-2.5 uppercase rounded-[10px] h-[34px] font-bold text-[14px] text-[#1A2027] dark:text-[#fff] hover:bg-[#F3F6F9] ${
                      pathname == "/about" ? "bg-[#F3F6F9]" : ""
                    }`}
                  >
                    Đăng Nhập
                  </Link>
                )}
              </li>
            </ul>

            {/* Mobile menu toggle */}
            <div className="ml-2.5 md:hidden ">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-[34px] h-[34px] flex items-center justify-center border-[1px] border-solid border-[#E0E3E7] rounded-[10px] cursor-pointer hover:bg-white text-[#1976d2]"
              >
                {isMenuOpen ? (
                  <MdOutlineHighlightOff className="text-[24px]" />
                ) : (
                  <HiBars2 className="text-[24px]" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="fixed top-[56px] left-0 right-0 z-[999] md:hidden animate-slide-down">
            <div className="bg-[#fff] dark:bg-[#0A1929] p-5 shadow-md">
              <ul className="flex flex-col mb-3 gap-2.5 w-full">
                {navItemsMobile.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`py-2 px-2.5 rounded-[10px] text-[#1A2027] dark:text-[#fff] font-bold text-[14px] hover:bg-[#F3F6F9] ${
                          isActive ? "bg-[#F3F6F9]" : ""
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
