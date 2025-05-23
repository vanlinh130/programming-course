import Link from "next/link";
import React from "react";
import { FacebookIcon, TiktokIcon, UdemyIcon, YouTubeIcon } from "./icons/svgIcons";

const Footer = () => {
  const footerLinks = [
    {
      title: "Dev Linh",
      links: [
        { name: "Youtube", url: "" },
        { name: "Udemy", url: "" },
        { name: "Facebook", url: "" },
        { name: "Tiktok", url: "" },
      ],
    },
    {
      title: "Liên Kết",
      links: [
        { name: "Khóa Học", url: "" },
        { name: "Review", url: "" },
        { name: "Tư Vấn", url: "" },
        { name: "Donate", url: "" },
      ],
    },
    {
      title: "Khám Phá",
      links: [
        { name: "Coming soon...", url: "" },
        { name: "Coming soon...", url: "" },
      ],
    },
    {
      title: "Về tác giả",
      links: [
        { name: "About", url: "" },
        { name: "Điều khoản sử dụng", url: "" },
      ],
    },
  ];

  return (
    <footer>
      <hr className="border-t-[1px] border-t-[#E0E3E7] dark:border-t-[#132F4C]" />
      <div className="max-w-[1200px] px-5 md:px-5 lg:px-[30px] w-full m-auto">
        <div className="pt-[40px] pb-[80px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[40px] justify-between">
          <div className="">
            <p className="text-[14px] leading-relaxed font-bold text-[#1A2027] dark:text-[#fff]">
              Cập Nhật Thông Tin Nhanh Nhất, Bằng Cách Đăng Ký :
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
            {footerLinks.map((section, index) => (
              <div key={index} className="col-span-1">
                <p className="text-[14px] leading-relaxed font-bold text-[#1A2027] dark:text-[#fff]">
                  {section.title}
                </p>
                <ul className="flex flex-col gap-[10px] mt-[10px] w-full">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.url}
                        target="_blank"
                        className="block w-full text-[14px] font-normal leading-relaxed text-[#3E5060] dark:text-[#B2BAC2] hover:text-[#007FFF] hover:underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="border-t-[1px] border-t-[#E0E3E7] dark:border-t-[#132F4C]" />
        <div className="my-[30px] flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold w-full text-[#1A2027] dark:text-[#fff]"
          >
            Dev Linh
          </Link>
          <div className="flex flex-row gap-3">
            <Link
              href=""
              className="w-[34px] h-[34px] flex items-center justify-center dark:border-[#132F4C] rounded-[50%] bg-transparent hover:bg-[#E7EBF0]/50"
            >
              <YouTubeIcon classNames="w-[20px] h-[20px] fill-[#0000008a] dark:fill-[#fff]"/>
            </Link>
            <Link
              href=""
              className="w-[34px] h-[34px] flex items-center justify-center dark:border-[#132F4C] rounded-[50%] bg-transparent hover:bg-[#E7EBF0]/50"
            >
              <FacebookIcon classNames="w-[20px] h-[20px] fill-[#0000008a] dark:fill-[#fff]"/>
            </Link>
            <Link
              href=""
              className="w-[34px] h-[34px] flex items-center justify-center dark:border-[#132F4C] rounded-[50%] bg-transparent hover:bg-[#E7EBF0]/50"
            >
              <TiktokIcon/>
            </Link>
            <Link
              href=""
              className="w-[34px] h-[34px] flex items-center justify-center dark:border-[#132F4C] rounded-[50%] bg-transparent hover:bg-[#E7EBF0]/50"
            >
              <UdemyIcon/>
            </Link>
          </div>
        </div>
        <p className="mb-[40px] font-normal text-[14px] leading-relaxed text-center text-[#3E5060] dark:text-[#B2BAC2] ">
            Copyright © 2025 Dev Linh vs Van Linh. Made with{' '}
            <span className="text-[#e25555]">♥</span> in VietNam (Powered by NextJs &amp; Tailwind CSS)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
