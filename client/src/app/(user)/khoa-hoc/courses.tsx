"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GoArrowRight } from "react-icons/go";
import { Checkbox } from "@/components/ui/checkbox";
import { useCategoriesQuery } from "@/queries/useCategories";
import CommonConstants from "@/constants/common";
import Button from "@/components/ui/button";
import ButtonQuestion from "../components/buttonQuestion";

const KhoaHoc = () => {
  const { data: categories } = useCategoriesQuery();
  const router = useRouter();

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    frontend: true,
    backend: true,
    other: true,
  });

  const handleCheckboxChange = (key: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const frontendRef = useRef<HTMLDivElement>(null);
  const backendRef = useRef<HTMLDivElement>(null);
  const otherRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    if (section === "frontend")
      frontendRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "backend")
      backendRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "other")
      otherRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const linkToDetail = (course_number: string | number) =>  {
    router.push(CommonConstants.SHOW_KHOA_HOC_PATH.replace(":course_number", String(course_number)));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-[30px]">
      <div className="col-span-1">
        <div className="sticky top-[75px] border-[1px] border-solid border-[#e7ebf0] rounded-[3px] p-[15px]">
          <h3 className="text-[#1A2027] text-[21px] font-bold my-[18px] dark:text-[#fff]">
            Phân loại kỹ năng:
          </h3>
          {categories?.map((category) => (
            <div key={category.id} className="flex items-center">
              <div className="p-[9px]">
                <Checkbox
                  checked={checkedItems[category.value]}
                  onCheckedChange={() => {
                    handleCheckboxChange(category.value);
                    scrollToSection(category.value);
                  }}
                  className="data-[state=checked]:text-[#fff] data-[state=checked]:bg-[#1AA251] dark:data-[state=checked]:bg-[#1AA251] data-[state=checked]:border-[#1AA251] size-[18px]"
                />
              </div>
              <ButtonQuestion
                text={category?.title}
                className="h-[24px] text-[13px]"
                onClick={() => {
                  handleCheckboxChange(category.value);
                  scrollToSection(category.value);
                }}
              />
            </div>
          ))}
          <hr className="my-[15px] border-[#E7EBF0] border-solid dark:border-[#ffffff1f]" />
          <Button icon={false} label="Gợi Ý Khóa Học" />
        </div>
      </div>
      <div className="col-span-1 lg:col-span-3">
        <div className="border-[1px] border-solid border-[#e7ebf0] rounded-[3px] p-[15px]">
          {categories
            ?.filter((category) => checkedItems[category.value])
            ?.map((category) => {
              let ref = undefined;
              if (category.value === "frontend") ref = frontendRef;
              if (category.value === "backend") ref = backendRef;
              if (category.value === "other") ref = otherRef;

              return (
                <div
                  key={category.id}
                  ref={ref}
                  className="scroll-mt-[100px]"
                >
                  <div className="mb-[50px]">
                    <ButtonQuestion
                      text={category.name}
                      className="h-[32px]"
                    />
                    <hr className="my-[15px] border-[#E7EBF0] border-solid dark:border-[#ffffff1f]" />
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[10px]">
                      {category.courses?.map((course) => (
                        <div key={course.id} className="col-span-1">
                          <div className="bg-[#fff] p-[5px] rounded-[10px] dark:bg-[#3e506033] shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]">
                            <div className="relative">
                              <div className="cursor-pointer relative">
                                <div className="h-[200px] relative">
                                  <Image
                                    src={course?.image_url}
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
                                <div className="mb-[10px] flex justify-between items-center">
                                  <div className="h-[28px] w-[130px] rounded-[15px] bg-[#cb1c22] flex items-center justify-center">
                                    <span className="text-[18px] text-[#fff] font-medium ">
                                      {course.price.toLocaleString("vi-VN")}
                                      <span className="text-[20px]">₫</span>
                                    </span>
                                  </div>
                                  <div className="line-through text-[#a7a7b1] text-[16px]">
                                    {course.original_price.toLocaleString(
                                      "vi-VN"
                                    )}
                                    ₫
                                  </div>
                                </div>
                                <div
                                  onClick={() => linkToDetail(course.course_number)}
                                  className="text-[16px] flex items-center gap-[7px] no-underline hover:underline hover:text-[#007FFF] dark:text-[#F0F7FF] cursor-pointer"
                                >
                                  <GoArrowRight />
                                  <span>Xem chi tiết</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}


export default KhoaHoc;