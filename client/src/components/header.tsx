"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { googleLogout } from "@react-oauth/google";
import { useLogoutMutation } from "@/queries/useAuth";
import { toast } from "react-toastify";
import Link from "next/link";

import { HiBars2 } from "react-icons/hi2";
import { MdOutlineHighlightOff } from "react-icons/md";
import CommonConstants from "@/constants/common";
import ToggleTheme from "./toggleTheme";
import { FacebookIcon, YouTubeIcon } from "./icons/svgIcons";

interface User {
  name: string;
}

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const logoutMutation = useLogoutMutation();

  const navItemsPc = [
    { href: CommonConstants.KHOA_HOC_PATH, label: "Khóa Học" },
    { href: CommonConstants.REVIEW_PATH, label: "Review" },
    { href: CommonConstants.TU_VAN_PATH, label: "Tư Vấn" },
    { href: CommonConstants.DONATE_PATH, label: "Donate" },
  ];

  const navItemsMobile = [
    { href: CommonConstants.KHOA_HOC_PATH, label: "Khóa Học" },
    { href: CommonConstants.REVIEW_PATH, label: "Review" },
    { href: CommonConstants.TU_VAN_PATH, label: "Câu Hỏi Thường Gặp" },
    { href: CommonConstants.DONATE_PATH, label: "Donate" },
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
      await logoutMutation.mutateAsync();
      toast.success("Đã đăng xuất thành công!");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const handleAuth = ({ styleMobi = '' } = {}) => {
    return (
      <li className={`cursor-pointer text-[14px] ${ styleMobi }`}>
        {user ? (
          <div
            className="flex items-center py-2 px-2.5 uppercase rounded-[10px] text-[#1A2027] dark:text-[#fff] font-bold text-[14px] hover:bg-[#F3F6F9] dark:hover:bg-[#132F4C]"
            onClick={handleLogout}
          >
            {user.name}
          </div>
        ) : (
          <Link
            href={CommonConstants.LOGIN_PATH}
            className="flex items-center py-2 px-2.5 uppercase rounded-[10px] text-[#1A2027] dark:text-[#fff] font-bold text-[14px] hover:bg-[#F3F6F9] dark:hover:bg-[#132F4C]"
          >
            Đăng Nhập
          </Link>
        )}
      </li>
    );
  };

  return (
    <header className="h-[56px] sticky top-0 right-0 left-0 z-[1000] border-b-[1px] border-[#e7ebf0] dark:border-[#132F4C] bg-white/80 dark:bg-[#0A1929] backdrop-blur-[20px]">
      <div className="max-w-[1200px] px-[20px] md:px-[30px] mx-auto">
        <nav className="flex items-center justify-between">
          <div className="w-[40%] md:w-[75%] flex items-center">
            <div className="w-[100%] md:w-[20%] flex items-center justify-center">
              <Link
                href={CommonConstants.HOME_PATH}
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
                      className={`py-2 px-2.5 rounded-[10px] text-[#1A2027] dark:text-[#fff] font-bold text-[14px] hover:bg-[#F3F6F9] dark:hover:bg-[#132F4C] ${
                        isActive ? "bg-[#F3F6F9] dark:bg-[#132F4C] text-[#3E5060]" : ""
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
                  className="w-[34px] h-[34px] flex items-center justify-center border-[1px] border-solid border-[#E0E3E7] dark:border-[#132F4C] rounded-[10px] hover:bg-[#E7EBF0]/50"
                >
                  <YouTubeIcon classNames="w-[24px] h-[24px] fill-[#d32f2f]"/>
                </Link>
              </li>
              <li className="cursor-pointer text-[14px]">
                <Link
                  href=""
                  className="w-[34px] h-[34px] flex items-center justify-center border-[1px] border-solid border-[#E0E3E7] dark:border-[#132F4C]  rounded-[10px] hover:bg-[#E7EBF0]/20"
                >
                  <FacebookIcon classNames="w-[24px] h-[24px] fill-[#1976d2]"/>
                </Link>
              </li>
              <li className="cursor-pointer text-[14px]">
                <Link
                  href=""
                  className="w-[34px] h-[34px] flex items-center justify-center border-[1px] border-solid border-[#E0E3E7] dark:border-[#132F4C]  rounded-[10px] hover:bg-[#E7EBF0]/20"
                >
                  <ToggleTheme />
                </Link>
              </li>
              {handleAuth({styleMobi: 'hidden md:flex'})}
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
                {handleAuth({styleMobi: ''})}
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
