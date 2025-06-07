"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import CommonConstants from "@/constants/common";
import { FaAngleRight } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { IoCheckmark } from "react-icons/io5";
import ButtonQuestion from "../../components/buttonQuestion";
import Button from "@/components/ui/button";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { RiVideoAiFill } from "react-icons/ri";
import { FaFileAlt } from "react-icons/fa";
import { GoInfinity } from "react-icons/go";
import { MdSmartphone } from "react-icons/md";
import { Accordion } from "./accordion";
import { CourseType } from "@/schemaValidations/courses.schema";
import { useUserFacebookIdQuery } from "@/queries/useUser";
import { useRouter } from "next/navigation";
import ConfirmDialog from "./confirm-dialog";

type Props = {
  data?: CourseType | null;
  isLoading: boolean;
};

interface User {
  name: string;
  facebook_id: string;
}

const CourseDetail = ({ isLoading, data }: Props) => {
  const router = useRouter();
  
  const [user, setUser] = useState<User | null>(null);
  const { data: userFacebook } = useUserFacebookIdQuery(
    user?.facebook_id ?? ""
  );

  const isCourseApprovedForUser = userFacebook?.courses.some(
    (course) => course.course_id === data?.id && course.is_approved == true
  );

  const allLessons = data?.chapters?.flatMap(chapter => chapter.lessons);
  const totalMinutes = allLessons?.reduce((sum, lesson) => sum + lesson.duration_minutes, 0);
  const totalHoursRounded = Math.round((totalMinutes ?? 0) / 60);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (isLoading) return <p>Đang tải dữ liệu...</p>;

  const linkToDetail = (course_number: string | number) => {
    router.push(
      CommonConstants.LEARN_LECTURE_PATH.replace(
        ":course_number",
        String(course_number)
      )
    );
  };



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
                      text={`Tác giả: ${data?.author}`}
                      className="text-[13px] dark:!bg-[#001E3C] dark:!text-[#E7EBF0]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 block md:block lg:hidden">
              <div className="border-b-[1px] border-solid border-b-[#d1d7dc] dark:border-none bg-[#fff] dark:bg-[#0a1929] relative shadow-[0_2px_4px_rgba(0,0,0,0.08),_0_4px_12px_rgba(0,0,0,0.08)] ">
                <ConfirmDialog courses={data ?? null}/>
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
                    {isCourseApprovedForUser ? (
                      data?.course_number && (
                        <div onClick={() => linkToDetail(data?.course_number)}>
                          <Button
                            icon={false}
                            label="Bạn đã mua khóa học"
                            className="w-full rounded-none my-[15px]"
                          />
                        </div>
                      )
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
                        {totalHoursRounded} giờ video theo yêu cầu
                      </span>
                    </li>
                    <li className="flex list-none items-center justify-items-center gap-[15px]">
                      <RiVideoAiFill />

                      <span className="text-[#1A2027] text-[16px] font-normal dark:text-[#fff]">
                        {data?.chapters.length} videos hướng dẫn
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
                {data?.chapters.map((chapter, index) => (
                  <li key={index} className="col-span-1 flex gap-2">
                    <div className="w-[15px]">
                      <IoCheckmark className="text-[15px]" />
                    </div>
                    <span>{chapter.title.replace(/^.*?:\s*/, '')}</span>
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
                  src={`https://www.youtube.com/embed/${data?.video_url}`}
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
                      {data?.chapters.length} chương • {allLessons?.length} bài giảng • {totalHoursRounded} giờ tổng thời lượng
                    </div>
                    <div></div>
                  </div>
                  <div className="">
                    <div className="w-full">
                      {data?.chapters.map((chapter) => (
                        <Accordion
                          key={chapter.id}
                          title={chapter.title}
                          count={chapter.lessons.length}
                        >
                          {chapter.lessons.length > 0 ? (
                            <div className="px-4 py-2">
                              
                              <ul className="space-y-1 text-[#1A2027] font-normal text-[16px] list-none">
                                {chapter.lessons.map((lesson) => (
                                  <li
                                    key={lesson.id}
                                  >
                                    <span>{lesson.title}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <span className="text-[#1A2027] font-normal text-[16px] ml-8">
                              Đang cập nhật bài mới 
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
              <h3 className="text-[20px] my-[18px] font-bold leading-[1.2] text-[#1A2027] dark:text-[#fff]">
                Mô Tả
              </h3>
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
                <ConfirmDialog courses={data ?? null}/>
                <div className="p-6 border-[1px] dark:border-[#ffffff1f]">
                  <div>
                    <span className="text-[#cb1c22] text-[25px] leading-[1.2] font-bold">
                      {data?.price.toLocaleString("vi-VN")}
                      <span className="ml-1">₫</span>
                    </span>
                  </div>
                  <div>
                    {isCourseApprovedForUser ? (
                      <Button
                        icon={false}
                        label="Bạn đã mua khóa học"
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
                        {totalHoursRounded} giờ video theo yêu cầu
                      </span>
                    </li>
                    <li className="flex list-none items-center justify-items-center gap-[15px]">
                      <RiVideoAiFill />

                      <span className="text-[#1A2027] text-[16px] font-normal dark:text-[#fff]">
                        {data?.chapters.length} videos hướng dẫn
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
