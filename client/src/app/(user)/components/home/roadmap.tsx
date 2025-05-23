import {
  AutoGraphIcon,
  BorderColorIcon,
  DvrIcon,
} from "@/components/icons/svgIcons";
import Image from "next/image";
import React from "react";

const Roadmap = () => {
  return (
    <section className="pb-[70px] bg-[#fff] dark:bg-[#3e506033]">
      <div className="max-w-[1200px] px-5 md:px-5 lg:px-[30px] w-full m-auto">
        <hr className="border-t-[1px] border-t-[#E0E3E7] dark:border-t-[#132F4C]" />
        <div className="">
          <div className="max-w-full">
            <h1 className="text-[50px] pb-[10px] my-[41.5px] text-center text-[#132F4C] dark:text-[#F0F7FF] font-bold">
              Roadmap
            </h1>
          </div>
          <div className="w-full hidden md:hidden lg:block">
            <div className="flex flex-row">
              <div className="px-2 flex-1 relative">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex z-10">
                    <div className="w-[50px] h-[50px] rounded-[50%] flex items-center justify-center text-[#fff] bg-[linear-gradient(136deg,_rgb(242,113,33)_0%,_rgb(233,64,87)_50%,_rgb(138,35,135)_100%)]">
                      <BorderColorIcon />
                    </div>
                  </div>
                  <div className="mt-[16px] text-center w-full text-[#1A2027] dark:text-[#fff]">
                    <span className="text-[14px] font-medium">
                      1. Học kiến thức
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-2 flex-1 relative">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex z-10">
                    <div className="w-[50px] h-[50px] rounded-[50%] flex items-center justify-center text-[#fff] bg-[linear-gradient(136deg,_rgb(242,113,33)_0%,_rgb(233,64,87)_50%,_rgb(138,35,135)_100%)]">
                      <DvrIcon />
                    </div>
                  </div>
                  <div className="mt-[16px] text-center w-full text-[#1A2027] dark:text-[#fff]">
                    <span className="text-[14px] font-medium">
                      2. Thực hành
                    </span>
                  </div>
                </div>
                <div
                  className="absolute top-[22px]"
                  style={{
                    left: "calc(-50% + 20px)",
                    right: "calc(50% + 20px)",
                  }}
                >
                  <div className="bg-[linear-gradient(136deg,_rgb(242,113,33)_0%,_rgb(233,64,87)_50%,_rgb(138,35,135)_100%)] h-[3px]"></div>
                </div>
              </div>
              <div className="px-2 flex-1 relative">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex z-10">
                    <div className="w-[50px] h-[50px] rounded-[50%] flex items-center justify-center text-[#fff] bg-[linear-gradient(136deg,_rgb(242,113,33)_0%,_rgb(233,64,87)_50%,_rgb(138,35,135)_100%)]">
                      <AutoGraphIcon />
                    </div>
                  </div>
                  <div className="mt-[16px] text-center w-full text-[#1A2027] dark:text-[#fff]">
                    <span className="text-[14px] font-medium">
                      3. Triển khai thực tế
                    </span>
                  </div>
                </div>
                <div
                  className="absolute top-[22px]"
                  style={{
                    left: "calc(-50% + 20px)",
                    right: "calc(50% + 20px)",
                  }}
                >
                  <div className="bg-[linear-gradient(136deg,_rgb(242,113,33)_0%,_rgb(233,64,87)_50%,_rgb(138,35,135)_100%)] h-[3px]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-full pt-[20px]">
            <div className="flex justify-center w-full">
              <h5 className="font-normal text-[24px] leading-relaxed text-[#007FFF] dark:text-[#fff] bg-[#FFDC48] dark:bg-[#1e4976] px-[3px] rounded-[3px] text-center">
                Phase 1: Ôn Tập Kiến Thức (Tự Học *)
              </h5>
            </div>
            <div className="h-[30px]"></div>
            <div className="border-[1px] border-dashed border-[#ccc] dark:border-[#265D97] rounded-[10px] p-[15px]">
              <span className="py-[5px] px-[10px] rounded-[3px] text-[#007FFF] dark:text-[#fff] bg-[#FFDC48] dark:bg-[#1e4976]">Markup/Programing language</span>
              <hr className="my-2.5 border-[#E7EBF0] border-solid dark:border-[#ffffff1f]"/>
              <div className="flex flex-row gap-[20px] w-full">
                <div className="w-[25%] flex justify-center items-center cursor-pointer">
                  <Image src='/images/language/light-html.webp' alt="html" height={100} width={100}  className="object-contain"></Image>
                </div>
                <div className="w-[25%] flex justify-center items-center cursor-pointer">
                  <Image src='/images/language/light-css.webp' alt="html" height={100} width={100} className="object-contain"></Image>
                </div>
                <div className="w-[25%] flex justify-center items-center cursor-pointer">
                  <Image src='/images/language/javascript.webp' alt="html" height={100} width={100} className="object-contain"></Image>
                </div>
                <div className="w-[25%] flex justify-center items-center cursor-pointer">
                  <Image src='/images/language/typescript.webp' alt="html" height={100} width={100} className="object-contain"></Image>
                </div>
              </div>
            </div>
            <div className="max-w-full">
              <div className="flex items-center justify-center w-full">
                <Image src='/images/language/arrow.webp' alt="html" height={100} width={100} className="object-contain"></Image>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <h5 className="font-normal text-[24px] leading-relaxed text-[#007FFF] dark:text-[#fff] bg-[#FFDC48] dark:bg-[#1e4976] px-[3px] rounded-[3px] text-center">
                Phase 2: Học Kiến Thức (Frontend/Backend)
              </h5>
            </div>
            <div className="h-[30px]"></div>
            <div className="border-[1px] border-dashed border-[#ccc] dark:border-[#265D97] rounded-[10px] p-[15px]">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[20px]">
                <div className="col-span-1">
                  <div className="border-[1px] border-dashed border-[#ccc] dark:border-[#265D97] rounded-[10px] p-[15px]">
                    <span className="py-[5px] px-[10px] rounded-[3px] text-[#007FFF] dark:text-[#fff] bg-[#FFDC48] dark:bg-[#1e4976]">Frontend</span>
                    <hr className="my-2.5 border-[#E7EBF0] border-solid dark:border-[#ffffff1f]"/>
                    <div className="flex flex-row gap-[20px] w-full">
                      <div className="w-[33.333333%] flex justify-center items-center cursor-pointer">
                        <Image src='/images/language/light-react.webp' alt="html" height={100} width={100}  className="object-contain"></Image>
                      </div>
                      <div className="w-[33.333333%] flex justify-center items-center cursor-pointer">
                        <Image src='/images/language/light-redux.webp' alt="html" height={100} width={100} className="object-contain"></Image>
                      </div>
                      <div className="w-[33.333333%] flex justify-center items-center cursor-pointer">
                        <Image src='/images/language/light-nextjs.webp' alt="html" height={100} width={100} className="object-contain"></Image>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="border-[1px] border-dashed border-[#ccc] dark:border-[#265D97] rounded-[10px] p-[15px]">
                    <span className="py-[5px] px-[10px] rounded-[3px] text-[#007FFF] dark:text-[#fff] bg-[#FFDC48] dark:bg-[#1e4976]">Backend</span>
                    <hr className="my-2.5 border-[#E7EBF0] border-solid dark:border-[#ffffff1f]"/>
                    <div className="flex flex-row gap-[20px] w-full">
                      <div className="w-[33.333333%] flex justify-center items-center cursor-pointer">
                        <Image src='/images/language/light-express.webp' alt="html" height={100} width={100}  className="object-contain"></Image>
                      </div>
                      <div className="w-[33.333333%] flex justify-center items-center cursor-pointer">
                        <Image src='/images/language/light-nestjs.webp' alt="html" height={100} width={100} className="object-contain"></Image>
                      </div>
                      <div className="w-[33.333333%] flex justify-center items-center cursor-pointer">
                        <Image src='/images/language/light-spring.webp' alt="html" height={100} width={100} className="object-contain"></Image>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 lg:col-span-2">
                  <span className="py-[5px] px-[10px] rounded-[3px] text-[#007FFF] dark:text-[#fff] bg-[#FFDC48] dark:bg-[#1e4976]">Công cụ sử dụng khi học Frontend/Backend </span>
                  <hr className="my-2.5 border-[#E7EBF0] border-solid dark:border-[#ffffff1f]"/>
                  <div className="flex flex-row gap-[20px] w-full">
                    <div className="w-[25%] flex justify-center items-center cursor-pointer">
                      <Image src='/images/language/typescript.webp' alt="html" height={100} width={100}  className="object-contain"></Image>
                    </div>
                    <div className="w-[25%] flex justify-center items-center cursor-pointer">
                      <Image src='/images/language/docker.webp' alt="html" height={100} width={100} className="object-contain"></Image>
                    </div>
                    <div className="w-[25%] flex justify-center items-center cursor-pointer">
                      <Image src='/images/language/light-postgres.webp' alt="html" height={100} width={100} className="object-contain"></Image>
                    </div>
                    <div className="w-[25%] flex justify-center items-center cursor-pointer">
                      <Image src='/images/language/mongodb.webp' alt="html" height={100} width={100} className="object-contain"></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-full">
              <div className="flex items-center justify-center w-full">
                <Image src='/images/language/arrow.webp' alt="html" height={100} width={100} className="object-contain"></Image>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <h5 className="font-normal text-[24px] leading-relaxed text-[#007FFF] dark:text-[#fff] bg-[#FFDC48] dark:bg-[#1e4976] px-[3px] rounded-[3px] text-center">
                Phase 3: Thực Hành Fullstack
              </h5>
            </div>
            <div className="h-[30px]"></div>
            <div className="border-[1px] border-dashed border-[#ccc] dark:border-[#265D97] rounded-[10px] p-[15px]">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[20px]">
                <div className="col-span-1">
                  <div className="border-[1px] border-dashed border-[#ccc] dark:border-[#265D97] rounded-[10px] p-[15px]">
                    <span className="py-[5px] px-[10px] rounded-[3px] text-[#007FFF] dark:text-[#fff] bg-[#FFDC48] dark:bg-[#1e4976]">Định Hướng 1</span>
                    <hr className="my-2.5 border-[#E7EBF0] border-solid dark:border-[#ffffff1f]"/>
                    <div className="flex flex-row gap-[20px] w-full">
                      <div className="w-[33.333333%] flex justify-center items-center cursor-pointer">
                        <Image src='/images/language/light-react.webp' alt="html" height={100} width={100}  className="object-contain"></Image>
                      </div>
                      <div className="w-[33.333333%] flex justify-center items-center cursor-pointer">
                        <Image src='/images/language/light-nextjs.webp' alt="html" height={100} width={100} className="object-contain"></Image>
                      </div>
                      <div className="w-[33.333333%] flex justify-center items-center cursor-pointer">
                        <Image src='/images/language/light-nestjs.webp' alt="html" height={100} width={100} className="object-contain"></Image>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="border-[1px] border-dashed border-[#ccc] dark:border-[#265D97] rounded-[10px] p-[15px]">
                    <span className="py-[5px] px-[10px] rounded-[3px] text-[#007FFF] dark:text-[#fff] bg-[#FFDC48] dark:bg-[#1e4976]">Định Hướng 2</span>
                    <hr className="my-2.5 border-[#E7EBF0] border-solid dark:border-[#ffffff1f]"/>
                    <div className="flex flex-row gap-[20px] w-full">
                      <div className="w-[33.333333%] flex justify-center items-center cursor-pointer">
                        <Image src='/images/language/light-react.webp' alt="html" height={100} width={100}  className="object-contain"></Image>
                      </div>
                      <div className="w-[33.333333%] flex justify-center items-center cursor-pointer">
                        <Image src='/images/language/light-nextjs.webp' alt="html" height={100} width={100} className="object-contain"></Image>
                      </div>
                      <div className="w-[33.333333%] flex justify-center items-center cursor-pointer">
                        <Image src='/images/language/light-spring.webp' alt="html" height={100} width={100} className="object-contain"></Image>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-full">
              <div className="flex items-center justify-center w-full">
                <Image src='/images/language/arrow.webp' alt="html" height={100} width={100} className="object-contain"></Image>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <h5 className="font-normal text-[24px] leading-relaxed text-[#007FFF] dark:text-[#fff] bg-[#FFDC48] dark:bg-[#1e4976] px-[3px] rounded-[3px] text-center">
                Phase 4: Triển khai dự án thực tế
              </h5>
            </div>
            <div className="h-[30px]"></div>
            <div className="border-[1px] border-dashed border-[#ccc] dark:border-[#265D97] rounded-[10px] p-[15px]">
              <span className="py-[5px] px-[10px] rounded-[3px] text-[#007FFF] dark:text-[#fff] bg-[#FFDC48] dark:bg-[#1e4976]">Build & Deploy Production</span>
              <hr className="my-2.5 border-[#E7EBF0] border-solid dark:border-[#ffffff1f]"/>
              <div className="flex flex-row gap-[20px] w-full">
                <div className="w-[25%] flex justify-center items-center cursor-pointer">
                  <Image src='/images/language/docker.webp' alt="html" height={100} width={100}  className="object-contain"></Image>
                </div>
                <div className="w-[25%] flex justify-center items-center cursor-pointer">
                  <Image src='/images/language/light-vps.webp' alt="html" height={100} width={100} className="object-contain"></Image>
                </div>
                <div className="w-[25%] flex justify-center items-center cursor-pointer">
                  <Image src='/images/language/light-domain.webp' alt="html" height={100} width={100} className="object-contain"></Image>
                </div>
                <div className="w-[25%] flex justify-center items-center cursor-pointer">
                  <Image src='/images/language/nginx.webp' alt="html" height={100} width={100} className="object-contain"></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
