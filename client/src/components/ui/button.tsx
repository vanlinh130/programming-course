import React from "react";
import { MdShoppingCart } from "react-icons/md";

type ButtonProps = {
  label: string;
  className?: string;
  icon: boolean;
};

const Button = ({ label, icon, className }: ButtonProps) => {
  return (
    <button
      className={`relative min-w-[64px] inline-flex items-center justify-center gap-2 bg-transparent font-bold text-[14px] text-[#007FFF] dark:text-[#3399FF] py-[5px] px-[15px] leading-[1.75] no-underline outline-none rounded-[10px] border-[1px] border-solid border-[#007fff80] hover:border-[#3399FF] shadow-none cursor-pointer transition-all duration-300 hover:bg-[#007fff0a] ${className}`}
    >
      {icon && <MdShoppingCart className="text-[20px]" />}
      <span>{label}</span>
    </button>
  );
};

export default Button;
