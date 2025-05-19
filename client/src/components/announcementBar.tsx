"use client";
import { useState, useEffect } from "react";
import { CloseOutlinedIcon, LocalFireDepartmentOutlinedIcon } from "./icons/svgIcons";
import Link from "next/link";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState(0);

  // Set thời gian đếm ngược 24 giờ
  useEffect(() => {
    const targetTime = Date.now() + 24 * 60 * 60 * 1000;
    const interval = setInterval(() => {
      const diff = targetTime - Date.now();
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  const hours = Math.floor(timeLeft / 3600000);
  const minutes = Math.floor((timeLeft % 3600000) / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);

  return (
    <div className="bg-[#eceb98] dark:bg-[#DEA500] text-black px-4 py-2 text-sm flex items-center justify-between">
      <div className="w-[90%] flex flex-col gap-1.5 text-center">
        <div className="flex items-center justify-center text-[#1A2027] dark:text-[#fff]">
          <LocalFireDepartmentOutlinedIcon />
          &nbsp;
          <b className="font-bold text-[16px]">
            Giảm 35% Khóa Học{" "}
            <Link href="" className="underline">
              NextJS
            </Link>{" "}
            còn 299k
          </b>
          &nbsp; | Ưu đãi đặc biệt cho học viên mới.
        </div>
        <div className="text-[#1A2027] dark:text-[#fff]">
          <b className="font-bold text-[16px]">Kết thúc trong &nbsp;</b>
          <b className="font-bold text-[16px]">
            {hours}h {minutes}m {seconds}s
          </b>
        </div>
      </div>
      <div className="w-[10%] flex items-center justify-end">
        <button onClick={() => setVisible(false)} className="text-xl pr-0 md:pr-[15px]">
            <CloseOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
