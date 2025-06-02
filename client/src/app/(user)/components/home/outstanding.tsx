"use client";

import {
  CallMadeIcon,
  LikeIcon,
  PeopleStudentIcon,
} from "@/components/icons/svgIcons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import CommonConstants from "@/constants/common";
import { useCoursesQuery } from "@/queries/useCourses";
import { useRouter } from "next/navigation";
import { GoStarFill } from "react-icons/go";
import { MdShoppingCart } from "react-icons/md";

const Outstanding = () => {
  const { data, isLoading } = useCoursesQuery();
  const router = useRouter();

  const linkToDetail = (course_number: string | number) =>  {
    router.push(CommonConstants.SHOW_KHOA_HOC_PATH.replace(":course_number", String(course_number)));
  }

  return (
    <section className="pt-[25px] pb-[50px] bg-[#f0f0f0] dark:bg-[#001E3C]">
      <div className="max-w-[1200px] px-5 md:px-5 lg:px-[30px] w-full m-auto">
        <div className="flex justify-between">
          <div className="flex items-center">
            <h2 className="text-[#1A2027] text-[24px] font-bold my-[20px] dark:text-[#fff]">
              Khóa Học Nổi Bật
            </h2>
          </div>
          <div className="flex items-center">
            <Link href={CommonConstants.KHOA_HOC_PATH}>
              <button className="relative min-w-[64px] inline-flex items-center justify-center bg-transparent font-bold text-[14px] text-[#007FFF] dark:text-[#3399FF] py-[5px] px-[15px] leading-[1.75] no-underline outline-none rounded-[10px] border-[1px] border-solid border-[#007fff80] hover:border-[#3399FF] shadow-none cursor-pointer transition-all duration-300 hover:bg-[#007fff0a]">
                <span>Xem Tất Cả</span>
                <span className="ml-[8px]">
                  <CallMadeIcon />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] px-5 md:px-5 lg:px-[30px] w-full m-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[20px]">
          {isLoading ? (
            <div className="col-span-1">Loading</div>
          ) : (
            data
              ?.filter((course) => course.label === "Hot")
              .map((course) => (
                <div key={course.id} className="col-span-1">
                  <div className="bg-[#fff] p-[5px] rounded-[10px] dark:bg-[#3e506033] shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]">
                    <div className="relative">
                      <div className="cursor-pointer relative">
                        <div className="h-[200px] relative">
                          <Image
                            src={course.image_url}
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
                        <div
                          onClick={() => linkToDetail(course.course_number)}
                          className="no-underline hover:underline hover:text-[#007FFF] dark:text-[#F0F7FF] cursor-pointer"
                        >
                          {course.title}
                        </div>
                      </div>
                      <div className="text-[14px]">
                        <div className="text-[#1A2027] font-normal dark:text-[#F0F7FF] ">
                          {course.description}
                        </div>
                        <p className="my-[14px] text-[#1A2027] font-normal dark:text-[#F0F7FF]">
                          {course.short}
                        </p>
                        <div
                          onClick={() => linkToDetail(course.course_number)}
                          className="flex items-center gap-[7px] no-underline hover:underline hover:text-[#007FFF] dark:text-[#F0F7FF] cursor-pointer"
                        >
                          <GoArrowRight />
                          <span>Xem chi tiết</span>
                        </div>
                        <div className="my-[7px]">
                          <div className="flex flex-row gap-4">
                            <div className="flex gap-[7px]">
                              <PeopleStudentIcon />
                              <span className="dark:text-[#F0F7FF]">
                                {course.students}
                              </span>
                            </div>
                            <div className="flex gap-[7px]">
                              <LikeIcon />
                              <span className="dark:text-[#F0F7FF]">
                                {" "}
                                {course.likes}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-1">
                          <GoStarFill className="text-[#faaf00] text-[15px]"/>
                          <GoStarFill className="text-[#faaf00] text-[15px]"/>
                          <GoStarFill className="text-[#faaf00] text-[15px]"/>
                          <GoStarFill className="text-[#faaf00] text-[15px]"/>
                          <GoStarFill className="text-[#faaf00] text-[15px]"/>
                        </div>
                        <div className="my-2.5 flex gap-8 items-center">
                          <span className="text-[20px] dark:text-[#F0F7FF]">
                            {course.price.toLocaleString("vi-VN")}{" "}
                            <span className="text-[20px]">₫</span>
                          </span>
                          <div className="line-through text-[#a7a7b1]">
                            {course.original_price.toLocaleString("vi-VN")} ₫
                          </div>
                        </div>
                        <div className="my-[14px]">
                          <button className="relative min-w-[64px] inline-flex items-center justify-center bg-[#007FFF] font-bold text-[14px] text-[#fff] py-[6px] px-[16px] leading-[1.75] no-underline outline-none rounded-[10px] border-none shadow-none cursor-pointer transition-all duration-300 hover:bg-[#0059B2]">
                            <span>
                              <MdShoppingCart />
                            </span>
                            <span className="ml-[8px]">Mua Khóa Học</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
          )}
        </div>
        <div className="flex mt-[15px] items-center w-full max-w-full">
          <div className="flex-grow border-t border-[#E7EBF0] dark:border-[#c2e0ff14]"></div>
          <Link href={CommonConstants.KHOA_HOC_PATH} className="px-[10px]">
            <button className="inline-flex items-center justify-center bg-transparent font-bold text-[14px] text-[#007FFF] dark:text-[#3399FF] py-[6px] px-[8px] leading-[1.75] no-underline outline-none rounded-[10px] shadow-none cursor-pointer transition-all duration-300 hover:bg-[#007fff0a]">
              <FaAngleDoubleRight className="mr-[8px]" />
              <span>Xem Tất Cả Khóa Học </span>
              <FaAngleDoubleLeft className="ml-[8px]" />
            </button>
          </Link>
          <div className="flex-grow border-t border-[#E7EBF0] dark:border-[#c2e0ff14]"></div>
        </div>
      </div>
    </section>
  );
};

export default Outstanding;
