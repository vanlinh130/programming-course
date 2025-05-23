import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="h-[40px] md:h-[40px] lg:h-[200px] w-full">
      <div className="max-w-[1200px] px-5 md:px-5 lg:px-[30px] w-full m-auto hidden md:hidden lg:block ">
        <div className="relative top-[-100px]">
          <div className="flex flex-row gap-5">
            <div className="basis-1/3 max-w-[33.3333%]">
              <button className="relative items-center w-full cursor-pointer rounded-[10px]">
                <div
                  className="p-4 rounded-[10px] bg-none dark:bg-[#0a1929] bg-blend-overlay"
                  style={{
                    backgroundImage: "url('/images/media/service-item-bg.jpg')",
                  }}
                >
                  <div className="relative h-[60px] w-full">
                    <Image
                      src="/images/service-icon/service-icon-01.webp"
                      alt="best education"
                      width={100}
                      height={100}
                      className="absolute w-full h-full left-0 top-0 right-0 bottom-0 object-contain text-transparent"
                    ></Image>
                  </div>
                  <div className="text-center text-[#F3F6F9]">
                    <h3 className="font-bold my-4">Best Education</h3>
                    <p className="leading-[1.7] text-[13px] my-3">
                      Thay vì 'thực chiến', tập trung vào THỰC TẾ. Học để có
                      kiến thức đi làm và định hướng sự nghiệp.
                    </p>
                  </div>
                </div>
              </button>
            </div>
            <div className="basis-1/3 max-w-[33.3333%]">
              <button className="relative items-center w-full cursor-pointer">
                <div
                  className="p-4 rounded-[10px] bg-none dark:bg-[#0a1929] bg-blend-overlay"
                  style={{
                    backgroundImage: "url('/images/media/service-item-bg.jpg')",
                  }}
                >
                  <div className="relative h-[60px] w-full">
                    <Image
                      src="/images/service-icon/service-icon-02.webp"
                      alt="best teachers"
                      width={100}
                      height={100}
                      className="absolute w-full h-full left-0 top-0 right-0 bottom-0 object-contain text-transparent"
                    ></Image>
                  </div>
                  <div className="text-center text-[#F3F6F9]">
                    <h3 className="font-bold my-4">Best Teachers</h3>
                    <p className="leading-[1.7] text-[13px] my-3">
                      Với phong cách trẻ trung, sẵn sàng lắng nghe, thì bạn là
                      gen Z hay Anpha đều không cần suy nghĩ.
                    </p>
                  </div>
                </div>
              </button>
            </div>
            <div className="basis-1/3 max-w-[33.3333%]">
              <button className="relative items-center w-full cursor-pointer rounded-[10px]">
                <div
                  className="p-4 rounded-[10px] bg-none dark:bg-[#0a1929] bg-blend-overlay"
                  style={{
                    backgroundImage: "url('/images/media/service-item-bg.jpg')",
                  }}
                >
                  <div className="relative h-[60px] w-full">
                    <Image
                      src="/images/service-icon/service-icon-03.webp"
                      alt="best prices"
                      width={100}
                      height={100}
                      className="absolute w-full h-full left-0 top-0 right-0 bottom-0 object-contain text-transparent"
                    ></Image>
                  </div>
                  <div className="text-center text-[#F3F6F9]">
                    <h3 className="font-bold my-4">Best Prices</h3>
                    <p className="leading-[1.7] text-[13px] my-3">
                      Ưu tiên sinh viên & người chưa đi làm, về 'Kinh tế & Kinh
                      phí', Dev Linh luôn hỗ trợ.
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
