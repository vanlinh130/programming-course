"use client";

import React from "react";
import Link from "next/link";
import CommonConstants from "@/constants/common";
import { FaAngleRight } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { IoCheckmark } from "react-icons/io5";
import ButtonQuestion from "../../components/buttonQuestion";
import Image from "next/image";
import Button from "@/components/ui/button";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { RiVideoAiFill } from "react-icons/ri";
import { FaFileAlt } from "react-icons/fa";
import { GoInfinity } from "react-icons/go";
import { MdSmartphone } from "react-icons/md";
import { IoPlayCircleOutline } from "react-icons/io5";
import { Accordion } from "./accordion";
import { CourseType } from "@/schemaValidations/courses.schema";

type Props = {
  data?: CourseType | null;
  isLoading: boolean;
};

const CourseDetail = ({ isLoading , data}: Props) => {
  // const { data, isLoading, error } = useCourseByNumberQuery(courseNumber);

  console.log(data);

  if (isLoading) return <p>Đang tải dữ liệu...</p>;
  // if (error) return <p>Lỗi: {error.message}</p>;

  const features: string[] = [
    "Làm Chủ React Toàn Diện Với Typescript",
    "Xây dựng giao diện Admin React với Antd Design/Vite",
    "Hiểu rõ cơ chế render React ở Client và Server",
    "Rèn luyện tư duy phân tích, tích hợp thư viện javascript với React",
    "Nắm vững kiến thức cốt lõi của NextJS và React",
    "Thực hành NextJS kết hợp với tailwind",
    "Build và Upgrade version Nextjs 14",
    "Sử dụng Server Actions với Next.js 14",
  ];

  const user = {
    id: "1234567890123456",
    courses: [
      {
        course_number: "COURSE0001",
        is_approved: false,
        granted_at: "2025-05-29T00:17:13.605462",
      },
      {
        course_number: "COURSE0002",
        is_approved: false,
        granted_at: "2025-05-29T01:09:46.364593",
      },
    ],
  };
  const courseChapters = [
    {
      id: 0,
      title: "Chapter 0: Giới thiệu",
      lessons: [
        { id: 1, title: "#0. Demo Kết quả đạt được" },
        { id: 2, title: "#1. Hướng Dẫn Download Tài liệu khóa học" },
        { id: 3, title: "#2. Yêu cầu của khóa học" },
        { id: 4, title: "#3. Về khóa học này" },
        { id: 5, title: "#4.1 Hướng Dẫn Sử Dụng Khóa Học Hiệu Quả" },
        { id: 6, title: "#4.2 Về tác giả" },
      ],
    },
    {
      id: 1,
      title: "Chapter 1: Setup Environment",
      lessons: [
        { id: 7, title: "Lesson 1" },
        { id: 8, title: "Lesson 2" },
        { id: 9, title: "Lesson 3" },
        { id: 10, title: "Lesson 4" },
      ],
    },
    {
      id: 2,
      title: "Chapter 2: Ôn tập Javascript",
      lessons: [
        { id: 11, title: "Lesson 1" },
        { id: 12, title: "Lesson 2" },
        { id: 13, title: "Lesson 3" },
        { id: 14, title: "Lesson 4" },
        { id: 15, title: "Lesson 5" },
      ],
    },
    {
      id: 3,
      title: "Chapter 3: React Basic",
      lessons: [],
    },
  ];

  return (
    <section className="mb-[50px]">
      <div className="py-5 bg-[#f3f6f9] dark:bg-[#0A1929]">
        <div className="max-w-[1200px] px-5 md:px-[30px] lg:px-[30px] w-full m-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[15px] md:gap-[15px] lg:gap-[30px]">
            <div className="col-span-1 md:col-span-1 lg:col-span-2">
              <nav className="font-normal text-[16px] text-[#3E5060] leading-[1.5]">
                <ul className="flex items-center list-none">
                  <li className="dark:text-[#66B2FF]">
                    <Link href={CommonConstants.HOME_PATH}>Trang chủ</Link>
                  </li>
                  <li className="mx-2">
                    <FaAngleRight className="text-[12px] dark:text-[#b2bac2]" />
                  </li>
                  <li className="dark:text-[#66B2FF]">
                    <Link href={CommonConstants.KHOA_HOC_PATH}>Khoa học</Link>
                  </li>
                </ul>
              </nav>
              <div className="hidden md:hidden lg:block">
                <div className="flex flex-col gap-2.5">
                  <div className="mt-2.5 text-[32px] text-[#1A2027] dark:text-[#fff]">
                    {data?.title}
                  </div>
                  <div className="text-[20px] text-[#1A2027] dark:text-[#fff]">
                    {data?.description}
                  </div>
                  <div className="flex flex-row items-center gap-6">
                    <div className="flex flex-row gap-1">
                      <GoStarFill className="text-[#faaf00] text-[15px]" />
                      <GoStarFill className="text-[#faaf00] text-[15px]" />
                      <GoStarFill className="text-[#faaf00] text-[15px]" />
                      <GoStarFill className="text-[#faaf00] text-[15px]" />
                      <GoStarFill className="text-[#faaf00] text-[15px]" />
                    </div>
                    <div className="flex flex-row gap-2.5 items-center">
                      <span className="underline cursor-pointer text-[16px] text-[#1A2027] font-normal dark:text-[#fff]">
                        (10 đánh giá)
                      </span>
                      <span className="text-[16px] text-[#1A2027] font-normal dark:text-[#fff]">
                        {data?.students} học viên
                      </span>
                    </div>
                  </div>
                  <div className="text-[16px] text-[#1A2027] font-normal dark:text-[#fff]">
                    Ngôn ngữ: Tiếng Việt
                  </div>
                  <div className="flex flex-row gap-3">
                    <ButtonQuestion
                      text={`Tags: ${data?.tag}`}
                      className="text-[13px] dark:!bg-[#001E3C] dark:!text-[#E7EBF0]"
                    />
                    <ButtonQuestion
                      text={`Tác giả: Van Linh`}
                      className="text-[13px] dark:!bg-[#001E3C] dark:!text-[#E7EBF0]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 block md:block lg:hidden">
              <div className="border-b-[1px] border-solid border-b-[#d1d7dc] dark:border-none bg-[#fff] dark:bg-[#0a1929] relative shadow-[0_2px_4px_rgba(0,0,0,0.08),_0_4px_12px_rgba(0,0,0,0.08)] ">
                <div className="relative h-[200px] w-full cursor-pointer">
                  <Image
                    src={data?.image_url || " "}
                    alt="html"
                    fill
                    className="object-cover opacity-[0.7]"
                  />
                  <div
                    className="relative flex items-center justify-center flex-col h-full "
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(28, 29, 31, 0) 0%, rgba(28, 29, 31, 0.9) 100%)",
                    }}
                  >
                    <IoPlayCircleOutline className="text-[#DEA500] text-[24px] w-[64px] h-[64px]" />
                  </div>
                  <span className="relative flex justify-center top-[-40px]">
                    <button className="flex items-center justify-center min-w-[64px] text-[#fff] text-[14px] font-bold py-[6px] px-2 rounded-[10px] shadow-none cursor-pointer bg-transparent hover:bg-[#007fff0a]">
                      Xem trước khóa học này
                    </button>
                  </span>
                </div>
                <div className="p-[15px] border-[1px] dark:border-[#ffffff1f]">
                  <div className="flex flex-col gap-2.5">
                    <div className="mt-2.5 text-[17px] font-semibold text-[#1A2027] dark:text-[#fff]">
                      {data?.title}
                    </div>
                    <div className="text-[14px] text-[#1A2027] dark:text-[#fff]">
                      {data?.description}
                    </div>
                    <div className="flex flex-row items-center gap-6">
                      <div className="flex flex-row gap-1">
                        <GoStarFill className="text-[#faaf00] text-[15px]" />
                        <GoStarFill className="text-[#faaf00] text-[15px]" />
                        <GoStarFill className="text-[#faaf00] text-[15px]" />
                        <GoStarFill className="text-[#faaf00] text-[15px]" />
                        <GoStarFill className="text-[#faaf00] text-[15px]" />
                      </div>
                      <div className="flex flex-row gap-2.5 items-center">
                        <span className="underline cursor-pointer text-[16px] text-[#1A2027] font-normal dark:text-[#fff]">
                          (10 đánh giá)
                        </span>
                        <span className="text-[16px] text-[#1A2027] font-normal dark:text-[#fff]">
                          {data?.students} học viên
                        </span>
                      </div>
                    </div>
                    <div className="text-[16px] text-[#1A2027] font-normal dark:text-[#fff]">
                      Ngôn ngữ: Tiếng Việt
                    </div>
                    <div className="flex flex-row gap-3 mb-[25px]">
                      <ButtonQuestion
                        text={`Tags: ${data?.tag}`}
                        className="text-[13px] dark:!bg-[#001E3C] dark:!text-[#E7EBF0]"
                      />
                      <ButtonQuestion
                        text={`Tác giả: Van Linh`}
                        className="text-[13px] dark:!bg-[#001E3C] dark:!text-[#E7EBF0]"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="text-[#cb1c22] text-[25px] leading-[1.2] font-bold">
                      {data?.price.toLocaleString("vi-VN")}
                      <span className="ml-1">₫</span>
                    </span>
                  </div>
                  <div>
                    {user.id &&
                    user.courses?.some(
                      (course) =>
                        course.course_number === data?.course_number &&
                        course.is_approved
                    ) ? (
                      <Button
                        icon={true}
                        label="Học Ngay"
                        className="w-full rounded-none my-[15px]"
                      />
                    ) : (
                      <Button
                        icon={true}
                        label="Mua Ngay"
                        className="w-full rounded-none my-[15px]"
                      />
                    )}

                    <div className="text-[#1A2027] text-[16px] font-normal text-center dark:text-[#fff]">
                      Cam kết mua khóa học 1 lần - thời gian học mãi mãi!
                    </div>
                  </div>
                  <hr className="my-2.5 border-[#E7EBF0] border-solid dark:border-[#ffffff1f]" />
                  <div className="my-2.5 font-bold text-[#1A2027] text-[16px] dark:text-[#fff]">
                    <b>Khóa học này bao gồm:</b>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    <li className="flex list-none items-center justify-items-center gap-[15px]">
                      <MdOutlineOndemandVideo />

                      <span className="text-[#1A2027] text-[16px] font-normal dark:text-[#fff]">
                        30 giờ video theo yêu cầu
                      </span>
                    </li>
                    <li className="flex list-none items-center justify-items-center gap-[15px]">
                      <RiVideoAiFill />

                      <span className="text-[#1A2027] text-[16px] font-normal dark:text-[#fff]">
                        {data?.lessons.length} videos hướng dẫn
                      </span>
                    </li>
                    <li className="flex list-none items-center justify-items-center gap-[15px]">
                      <FaFileAlt />

                      <span className="text-[#1A2027] text-[16px] font-normal dark:text-[#fff]">
                        1 tài liệu hướng dẫn theo từng video
                      </span>
                    </li>
                    <li className="flex list-none items-center justify-items-center gap-[15px]">
                      <GoInfinity />

                      <span className="text-[#1A2027] text-[16px] font-normal dark:text-[#fff]">
                        Thời gian xem khóa học suốt đời
                      </span>
                    </li>
                    <li className="flex list-none items-center justify-items-center gap-[15px]">
                      <MdSmartphone />
                      <span className="text-[#1A2027] text-[16px] font-normal dark:text-[#fff]">
                        Truy cập trên thiết bị di động và TV
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] px-5 md:px-5 lg:px-[30px] w-full m-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[30px]">
          <div className="col-span-1 block md:block lg:hidden"></div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <div className="mt-[30px] border-[1px] border-solid border-[#d1d7dc] p-5">
              <div className="text-[20px] font-bold leading-[1.2] text-[#1A2027] dark:text-[#fff]">
                Những gì bạn sẽ học
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2.5 my-4 text-[16px] text-[#1A2027] leading-[1.2] font-normal dark:text-[#fff] px-2.5">
                {features.map((feature, index) => (
                  <li key={index} className="col-span-1 flex gap-2">
                    <div className="w-[15px]">
                      <IoCheckmark className="text-[15px]" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="my-[30px]">
              <div className="my-2.5 text-[20px] font-semibold border-t-[1px] border-dashed border-t-[#dfdfdf] dark:border-t-[#c2e0ff14] dark:text-[#fff]">
                <p className="my-[20px]">
                  Đánh Giá - Nhận Xét Khóa Học Từ Học Viên
                </p>
              </div>
              <div className="relative w-full pb-[56.25%] border-[1px] border-solid border-[#E7EBF0] bg-[#fff]">
                <iframe
                  src="https://www.youtube.com/embed/b7W21_Zk_JQ"
                  title="YouTube video player"
                  className="absolute top-0 left-0 w-full h-full shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-[30px] h-[5px] border-t-[1px] border-dashed border-t-[#dfdfdf] dark:border-t-[#c2e0ff14]"></div>
            </div>
            <div>
              <div className="my-2.5 text-[20px] font-bold dark:text-[#fff]">
                <p className="mt-[30px] mb-[10px]">Nội dung khóa học</p>
                <div>
                  <div className="flex flex-row mb-[15px] justify-between">
                    <div className="text-[#1A2027] font-normal text-[16px] dark:text-[#fff]">
                      24 chương • 227 bài giảng • 42 giờ tổng thời lượng
                    </div>
                    <div></div>
                  </div>
                  <div className="">
                    <div className="w-full">
                      {courseChapters.map((chapter) => (
                        <Accordion
                          key={chapter.id}
                          title={chapter.title}
                          count={chapter.lessons.length}
                        >
                          {chapter.lessons.length > 0 ? (
                            <ul className="space-y-1 text-[#1A2027] font-normal text-[16px] list-none">
                              {chapter.lessons.map((lesson) => (
                                <li key={lesson.id} className="flex items-center gap-2">
                                  <MdOutlineOndemandVideo />
                                  <span>{lesson.title}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <span className="text-[#1A2027] font-normal text-[16px] ">
                              Chưa có bài học nào.
                            </span>
                          )}
                        </Accordion>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-[20px] mb-[10px] border-[#E7EBF0] border-dashed dark:border-[#dfdfdf] dark:border-t-[#c2e0ff14]" />
            <div>
              <h3 className="text-[20px] my-[18px] font-bold leading-[1.2] text-[#1A2027] dark:text-[#fff]">Mô Tả</h3>
            </div>
            <div>
              <div className="h-[5px] border-t-[1px] border-dashed border-t-[#dfdfdf] dark:border-t-[#c2e0ff14]"></div>
              <div className="my-2.5 text-[20px] font-bold">
                <p className="my-5">Đánh giá khóa học</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 hidden md:hidden lg:block">
            <div className="sticky top-[255px]">
              <div className="border-b-[1px] border-solid border-b-[#d1d7dc] dark:border-none bg-[#fff] dark:bg-[#0a1929] relative top-[-200px] shadow-[0_2px_4px_rgba(0,0,0,0.08),_0_4px_12px_rgba(0,0,0,0.08)]">
                <div className="relative h-[200px] w-full cursor-pointer">
                  <Image
                    src={data?.image_url || " "}
                    alt="html"
                    fill
                    className="object-cover opacity-[0.7]"
                  />
                  <div
                    className="relative flex items-center justify-center flex-col h-full "
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(28, 29, 31, 0) 0%, rgba(28, 29, 31, 0.9) 100%)",
                    }}
                  >
                    <IoPlayCircleOutline className="text-[#DEA500] text-[24px] w-[64px] h-[64px]" />
                  </div>
                  <span className="relative flex justify-center top-[-40px]">
                    <button className="flex items-center justify-center min-w-[64px] text-[#fff] text-[14px] font-bold py-[6px] px-2 rounded-[10px] shadow-none cursor-pointer bg-transparent hover:bg-[#007fff0a]">
                      Xem trước khóa học này
                    </button>
                  </span>
                </div>
                <div className="p-6 border-[1px] dark:border-[#ffffff1f]">
                  <div>
                    <span className="text-[#cb1c22] text-[25px] leading-[1.2] font-bold">
                      {data?.price.toLocaleString("vi-VN")}
                      <span className="ml-1">₫</span>
                    </span>
                  </div>
                  <div>
                    {user.id &&
                    user.courses?.some(
                      (course) =>
                        course.course_number === data?.course_number &&
                        course.is_approved
                    ) ? (
                      <Button
                        icon={true}
                        label="Học Ngay"
                        className="w-full rounded-none my-[15px]"
                      />
                    ) : (
                      <Button
                        icon={true}
                        label="Mua Ngay"
                        className="w-full rounded-none my-[15px]"
                      />
                    )}

                    <div className="text-[#1A2027] text-[16px] font-normal text-center dark:text-[#fff]">
                      Cam kết mua khóa học 1 lần - thời gian học mãi mãi!
                    </div>
                  </div>
                  <hr className="my-2.5 border-[#E7EBF0] border-solid dark:border-[#ffffff1f]" />
                  <div className="my-2.5 font-bold text-[#1A2027] text-[16px] dark:text-[#fff]">
                    <b>Khóa học này bao gồm:</b>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    <li className="flex list-none items-center justify-items-center gap-[15px]">
                      <MdOutlineOndemandVideo />

                      <span className="text-[#1A2027] text-[16px] font-normal dark:text-[#fff]">
                        30 giờ video theo yêu cầu
                      </span>
                    </li>
                    <li className="flex list-none items-center justify-items-center gap-[15px]">
                      <RiVideoAiFill />

                      <span className="text-[#1A2027] text-[16px] font-normal dark:text-[#fff]">
                        {data?.lessons.length} videos hướng dẫn
                      </span>
                    </li>
                    <li className="flex list-none items-center justify-items-center gap-[15px]">
                      <FaFileAlt />

                      <span className="text-[#1A2027] text-[16px] font-normal dark:text-[#fff]">
                        1 tài liệu hướng dẫn theo từng video
                      </span>
                    </li>
                    <li className="flex list-none items-center justify-items-center gap-[15px]">
                      <GoInfinity />

                      <span className="text-[#1A2027] text-[16px] font-normal dark:text-[#fff]">
                        Thời gian xem khóa học suốt đời
                      </span>
                    </li>
                    <li className="flex list-none items-center justify-items-center gap-[15px]">
                      <MdSmartphone />
                      <span className="text-[#1A2027] text-[16px] font-normal dark:text-[#fff]">
                        Truy cập trên thiết bị di động và TV
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetail;
