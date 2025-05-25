import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

interface ReviewLinkProps {
  showReview: boolean;
}

const StudentFeedback = ({ showReview }: ReviewLinkProps) => {
  const feedbacks = [
    { id: 1, image: "/images/feedback/feedback1.webp", alt: "html" },
    { id: 2, image: "/images/feedback/feedback1.webp", alt: "html" },
    { id: 3, image: "/images/feedback/feedback1.webp", alt: "html" },
    { id: 4, image: "/images/feedback/feedback1.webp", alt: "html" },
    { id: 5, image: "/images/feedback/feedback1.webp", alt: "html" },
    { id: 6, image: "/images/feedback/feedback1.webp", alt: "html" },
    { id: 7, image: "/images/feedback/feedback1.webp", alt: "html" },
    { id: 8, image: "/images/feedback/feedback1.webp", alt: "html" },
    { id: 9, image: "/images/feedback/feedback1.webp", alt: "html" },
    { id: 10, image: "/images/feedback/feedback1.webp", alt: "html" },
  ];
  return (
    <section className="bg-[#F3F6F9] dark:bg-[#0A1929] p-2.5 lg:pt-[35px] lg:px-[35px] lg:pb-[50px]">
      <div className="flex justify-between">
        <div className="flex items-center">
          <h3 className="text-[#1A2027] text-[21px] font-bold my-[18px] dark:text-[#fff] hidden md:block lg:block">
            Review/Đánh giá khóa học từ học viên
          </h3>
          <h3 className="text-[#1A2027] text-[21px] font-bold my-[18px] dark:text-[#fff] block md:hidden lg:hidden">
            Review khóa học
          </h3>
        </div>
        <div className="flex items-center">
          <button className="min-w-[64px] inline-flex items-center justify-center bg-transparent font-bold text-[14px] text-[#007FFF] dark:text-[#3399FF] py-[5px] px-[15px] leading-[1.75] no-underline outline-none rounded-[10px] border-[1px] border-solid border-[#007fff80] hover:border-[#3399FF] shadow-none cursor-pointer transition-all duration-300 hover:bg-[#007fff0a]">
            <span>Xem tất cả Review</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="col-span-1">
            <div className="w-full h-[502px] relative">
              <Image
                src={feedback.image}
                alt={feedback.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      {
        showReview && (
        <div className="flex mt-[15px] items-center w-full max-w-full">
          <div className="flex-grow border-t border-[#E7EBF0] dark:border-[#c2e0ff14]"></div>
          <Link href="/review" className="px-[10px]">
            <button className="inline-flex items-center justify-center bg-transparent font-bold text-[14px] text-[#007FFF] dark:text-[#3399FF] py-[6px] px-[8px] leading-[1.75] no-underline outline-none rounded-[10px] shadow-none cursor-pointer transition-all duration-300 hover:bg-[#007fff0a]">
              <FaAngleDoubleRight className="mr-[8px]" />
              <span> Xem Tất Cả Review/Đánh Giá </span>
              <FaAngleDoubleLeft className="ml-[8px]" />
            </button>
          </Link>
          <div className="flex-grow border-t border-[#E7EBF0] dark:border-[#c2e0ff14]"></div>
        </div>
        )
      }
    </section>
  );
};

export default StudentFeedback;
