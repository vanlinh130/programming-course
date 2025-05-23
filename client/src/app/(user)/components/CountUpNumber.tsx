"use client";

import CountUp from "react-countup";
import { useEffect, useState, ReactNode  } from "react";

interface CountUpNumberProps {
  count: number;
  label: string;
  icon: ReactNode;
}

export default function CountUpNumber({ count, label, icon }: CountUpNumberProps) {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(`countup-${label}`);
      if (element && !start) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setStart(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [start, label]);

  return (
    <div className="col-span-1 rounded-[10px] border-[1px] border-solid border-[#E0E3E7] dark:border-[#004C99] bg-[#F3F6F9] dark:bg-[#3e506033]">
      <div className="flex items-center justify-center">
        <nav className="flex justify-center items-center gap-[15px] p-[10px] ">
          {icon}
          <div id={`countup-${label}`}>
            <span className="text-[#f5a425] text-[32px] font-bold">
              {start && <CountUp end={count} duration={2.5} separator="." />} +
            </span>
            <div className="my-4 text-[16px] font-normal text-[#1A2027] dark:text-[#fff]">{label}</div>
          </div>
        </nav>
      </div>
    </div>
  );
}
