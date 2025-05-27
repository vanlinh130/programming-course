"use client";

import { useState, useRef } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Button from "@/components/ui/button";
import ButtonQuestion from "../components/buttonQuestion";
import data from "@/data/data.json";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function Page() {
  const [checkedItems, setCheckedItems] = useState({
    reactjs: true,
    nodejs: true,
    other: true,
  });

  const handleCheckboxChange = (key: keyof typeof checkedItems) => {
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const reactjsRef = useRef<HTMLDivElement>(null);
  const nodejsRef = useRef<HTMLDivElement>(null);
  const otherRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: "reactjs" | "nodejs" | "other") => {
    if (section === "reactjs")
      reactjsRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "nodejs")
      nodejsRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "other")
      otherRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
      <div className="max-w-[1200px] px-2.5 md:px-2.5 lg:px-5 w-full mx-auto mt-[20px] mb-[70px]">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-[30px]">
          <div className="col-span-1">
            <div className="sticky top-[75px] border-[1px] border-solid border-[#e7ebf0] rounded-[3px] p-[15px]">
              <h3 className="text-[#1A2027] text-[21px] font-bold my-[18px] dark:text-[#fff]">
                Phân loại kỹ năng:
              </h3>
              <div className="flex items-center">
                <div className="p-[9px]">
                  <Checkbox
                    checked={checkedItems.reactjs}
                    onCheckedChange={() => {
                      handleCheckboxChange("reactjs");
                      scrollToSection("reactjs");
                    }}
                    className="data-[state=checked]:text-[#fff] data-[state=checked]:bg-[#1AA251] dark:data-[state=checked]:bg-[#1AA251] data-[state=checked]:border-[#1AA251] size-[18px]"
                  />
                </div>
                <ButtonQuestion
                  text="Frontend React.JS"
                  className="h-[24px] text-[13px]"
                  onClick={() => {
                    handleCheckboxChange("reactjs");
                    scrollToSection("reactjs");
                  }}
                />
              </div>
              <div className="flex items-center">
                <div className="p-[9px]">
                  <Checkbox
                    checked={checkedItems.nodejs}
                    onCheckedChange={() => {
                      handleCheckboxChange("nodejs");
                      scrollToSection("nodejs");
                    }}
                    className="data-[state=checked]:text-[#fff] data-[state=checked]:bg-[#1AA251] dark:data-[state=checked]:bg-[#1AA251] data-[state=checked]:border-[#1AA251] size-[18px]"
                  />
                </div>
                <ButtonQuestion
                  text="Backend Node.JS"
                  className="h-[24px] text-[13px]"
                  onClick={() => {
                    handleCheckboxChange("nodejs");
                    scrollToSection("nodejs");
                  }}
                />
              </div>
              <div className="flex items-center">
                <div className="p-[9px]">
                  <Checkbox
                    checked={checkedItems.other}
                    onCheckedChange={() => {
                      handleCheckboxChange("other");
                      scrollToSection("other");
                    }}
                    className="data-[state=checked]:text-[#fff] data-[state=checked]:bg-[#1AA251] dark:data-[state=checked]:bg-[#1AA251] data-[state=checked]:border-[#1AA251] size-[18px]"
                  />
                </div>
                <ButtonQuestion
                  text="Sinh Tồn"
                  className="h-[24px] text-[13px]"
                  onClick={() => {
                    handleCheckboxChange("other");
                    scrollToSection("other");
                  }}
                />
              </div>
              <hr className="my-[15px] border-[#E7EBF0] border-solid dark:border-[#ffffff1f]" />
              <Button label="Gợi Ý Khóa Học" />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 h-[5000px]">
            <div className="border-[1px] border-solid border-[#e7ebf0] rounded-[3px] p-[15px]">
              {checkedItems.reactjs && (
                <div id="reactjs" ref={reactjsRef} className="scroll-mt-[100px]">
                  <div className="mb-[50px]">
                    <ButtonQuestion
                      text="Lộ Trình Frontend React.JS Làm Website"
                      className="h-[32px]"
                    />
                    <hr className="my-[15px] border-[#E7EBF0] border-solid dark:border-[#ffffff1f]" />
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[10px]">
                      {data.map((course, index) =>
                        course.category_id !== 1 ? null : (
                          <div key={index} className="col-span-1">
                            <div className="bg-[#fff] p-[5px] rounded-[10px] dark:bg-[#3e506033] shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]">
                              <div className="relative">
                                <div className="cursor-pointer relative">
                                  <div className="h-[200px] relative">
                                    <Image
                                      src={course.image}
                                      alt="html"
                                      fill
                                      className="rounded-[10px] object-cover"
                                    />
                                  </div>
                                  <div className="absolute top-1/2 left-[15%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                                    <div className="relative w-[70px] h-[70px] flex items-center justify-center">
                                      <div className="absolute w-full h-full rounded-full bg-[#ffbd50] opacity-50 animate-ping"></div>
                                      <div className="relative z-10 w-[70px] h-[70px] rounded-full bg-[#ffbd50] flex items-center justify-center">
                                        <div className="w-0 h-0 border-t-[15px] border-b-[15px] border-l-[21px] border-t-transparent border-b-transparent border-l-white ml-[2px]"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <div className="min-h-[60px] mt-[20px] mb-[10px] text-[18px]">
                                  <span className="bg-[#f5a425] text-black mr-[7px] px-2.5 py-[2px]">
                                    {course.tag}
                                  </span>
                                  <Link
                                    href=""
                                    className="no-underline hover:underline hover:text-[#007FFF] dark:text-[#F0F7FF]"
                                  >
                                    {course.title}
                                  </Link>
                                </div>
                                <div className="text-[14px]">
                                  <div className="mb-[10px] flex justify-between items-center">
                                    <div className="h-[28px] w-[130px] rounded-[15px] bg-[#cb1c22] flex items-center justify-center">
                                      <span className="text-[18px] text-[#fff] font-medium ">
                                        {course.price.toLocaleString("vi-VN")}
                                        <span className="text-[20px]">₫</span>
                                      </span>
                                    </div>
                                    <div className="line-through text-[#a7a7b1] text-[16px]">
                                      {course.originalPrice.toLocaleString(
                                        "vi-VN"
                                      )}
                                      ₫
                                    </div>
                                  </div>
                                  <Link
                                    href=""
                                    className="text-[16px] flex items-center gap-[7px] no-underline hover:underline hover:text-[#007FFF] dark:text-[#F0F7FF]"
                                  >
                                    <GoArrowRight />
                                    <span>Xem chi tiết</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
              {checkedItems.nodejs && (
                <div id="nodejs" ref={nodejsRef} className="scroll-mt-[100px]">
                  <div className="mb-[50px]">
                    <ButtonQuestion
                      text="Lộ Trình Backend Node.js"
                      className="h-[32px]"
                    />
                    <hr className="my-[15px] border-[#E7EBF0] border-solid dark:border-[#ffffff1f]" />
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[10px]">
                      {data.map((course, index) =>
                        course.category_id !== 2 ? null : (
                          <div key={index} className="col-span-1">
                            <div className="bg-[#fff] p-[5px] rounded-[10px] dark:bg-[#3e506033] shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]">
                              <div className="relative">
                                <div className="cursor-pointer relative">
                                  <div className="h-[200px] relative">
                                    <Image
                                      src={course.image}
                                      alt="html"
                                      fill
                                      className="rounded-[10px] object-cover"
                                    />
                                  </div>
                                  <div className="absolute top-1/2 left-[15%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                                    <div className="relative w-[70px] h-[70px] flex items-center justify-center">
                                      <div className="absolute w-full h-full rounded-full bg-[#ffbd50] opacity-50 animate-ping"></div>
                                      <div className="relative z-10 w-[70px] h-[70px] rounded-full bg-[#ffbd50] flex items-center justify-center">
                                        <div className="w-0 h-0 border-t-[15px] border-b-[15px] border-l-[21px] border-t-transparent border-b-transparent border-l-white ml-[2px]"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <div className="min-h-[60px] mt-[20px] mb-[10px] text-[18px]">
                                  <span className="bg-[#f5a425] text-black mr-[7px] px-2.5 py-[2px]">
                                    {course.tag}
                                  </span>
                                  <Link
                                    href=""
                                    className="no-underline hover:underline hover:text-[#007FFF] dark:text-[#F0F7FF]"
                                  >
                                    {course.title}
                                  </Link>
                                </div>
                                <div className="text-[14px]">
                                  <div className="mb-[10px] flex justify-between items-center">
                                    <div className="h-[28px] w-[130px] rounded-[15px] bg-[#cb1c22] flex items-center justify-center">
                                      <span className="text-[18px] text-[#fff] font-medium ">
                                        {course.price.toLocaleString("vi-VN")}
                                        <span className="text-[20px]">₫</span>
                                      </span>
                                    </div>
                                    <div className="line-through text-[#a7a7b1] text-[16px]">
                                      {course.originalPrice.toLocaleString(
                                        "vi-VN"
                                      )}
                                      ₫
                                    </div>
                                  </div>
                                  <Link
                                    href=""
                                    className="text-[16px] flex items-center gap-[7px] no-underline hover:underline hover:text-[#007FFF] dark:text-[#F0F7FF]"
                                  >
                                    <GoArrowRight />
                                    <span>Xem chi tiết</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
              {checkedItems.other && (
                <div id="other" ref={otherRef} className="scroll-mt-[100px]">
                  <div className="mb-[50px]">
                    <ButtonQuestion
                      text="Kỹ Năng Sinh Tồn"
                      className="h-[32px]"
                    />
                    <hr className="my-[15px] border-[#E7EBF0] border-solid dark:border-[#ffffff1f]" />
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[10px]">
                      {data.map((course, index) =>
                        course.category_id !== 3 ? null : (
                          <div key={index} className="col-span-1">
                            <div className="bg-[#fff] p-[5px] rounded-[10px] dark:bg-[#3e506033] shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]">
                              <div className="relative">
                                <div className="cursor-pointer relative">
                                  <div className="h-[200px] relative">
                                    <Image
                                      src={course.image}
                                      alt="html"
                                      fill
                                      className="rounded-[10px] object-cover"
                                    />
                                  </div>
                                  <div className="absolute top-1/2 left-[15%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                                    <div className="relative w-[70px] h-[70px] flex items-center justify-center">
                                      <div className="absolute w-full h-full rounded-full bg-[#ffbd50] opacity-50 animate-ping"></div>
                                      <div className="relative z-10 w-[70px] h-[70px] rounded-full bg-[#ffbd50] flex items-center justify-center">
                                        <div className="w-0 h-0 border-t-[15px] border-b-[15px] border-l-[21px] border-t-transparent border-b-transparent border-l-white ml-[2px]"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <div className="min-h-[60px] mt-[20px] mb-[10px] text-[18px]">
                                  <span className="bg-[#f5a425] text-black mr-[7px] px-2.5 py-[2px]">
                                    {course.tag}
                                  </span>
                                  <Link
                                    href=""
                                    className="no-underline hover:underline hover:text-[#007FFF] dark:text-[#F0F7FF]"
                                  >
                                    {course.title}
                                  </Link>
                                </div>
                                <div className="text-[14px]">
                                  <div className="mb-[10px] flex justify-between items-center">
                                    <div className="h-[28px] w-[130px] rounded-[15px] bg-[#cb1c22] flex items-center justify-center">
                                      <span className="text-[18px] text-[#fff] font-medium ">
                                        {course.price.toLocaleString("vi-VN")}
                                        <span className="text-[20px]">₫</span>
                                      </span>
                                    </div>
                                    <div className="line-through text-[#a7a7b1] text-[16px]">
                                      {course.originalPrice.toLocaleString(
                                        "vi-VN"
                                      )}
                                      ₫
                                    </div>
                                  </div>
                                  <Link
                                    href=""
                                    className="text-[16px] flex items-center gap-[7px] no-underline hover:underline hover:text-[#007FFF] dark:text-[#F0F7FF]"
                                  >
                                    <GoArrowRight />
                                    <span>Xem chi tiết</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
