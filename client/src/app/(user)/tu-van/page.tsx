import Button from "@/components/ui/button";
import ButtonQuestion from "../components/buttonQuestion";

export default function Page() {
  return (
    <div className="max-w-[1200px] px-5 md:px-5 lg:px-[30px] w-full m-auto">
      <section className="mb-[70px]">
        <div className="flex flex-col">
          <h2 className="text-[#1A2027] text-[24px] font-bold my-[20px] dark:text-[#fff]">
            Các câu hỏi thường gặp (FAQ) ???
          </h2>
          <h4 className="text-[#1A2027] text-[16px] font-bold dark:text-[#fff]">
            Tổng hợp tất cả các câu hỏi các bạn beginners hay thắc mắc, phân
            loại theo các chủ đề sau:
          </h4>
          <div className=" flex flex-wrap gap-4 mt-[20px]">
            <ButtonQuestion text="Câu hỏi chung" className='h-[24px]'/>
            <ButtonQuestion text="Sinh viên IT và non-IT (18 <= age <=23)" className='h-[24px]'/>
            <ButtonQuestion text="Trái ngành & đã đi làm (age > 23)" className='h-[24px]'/>
            <ButtonQuestion text="Đúng ngành & đã đi làm (age > 23)" className='h-[24px]'/>
            <ButtonQuestion text="Học sinh (age < 18)" className='h-[24px]'/>
          </div>
        </div>
        <div className="">
          <hr className="my-[15px] border-[#E7EBF0] border-solid dark:border-[#ffffff1f]" />
          <div className="mb-[15px]">
            <Button label="Câu hỏi chung" />
          </div>
        </div>
        <div className="">
          <hr className="my-[15px] border-[#E7EBF0] border-solid dark:border-[#ffffff1f]" />
          <div className="mb-[15px]">
            <Button label="Sinh viên IT và non-IT (18 <= age <=23)" />
          </div>
        </div>
        <div className="">
          <hr className="my-[15px] border-[#E7EBF0] border-solid dark:border-[#ffffff1f]" />
          <div className="mb-[15px]">
            <Button label="Trái ngành & đã đi làm (age > 23)" />
          </div>
        </div>
        <div className="">
          <hr className="my-[15px] border-[#E7EBF0] border-solid dark:border-[#ffffff1f]" />
          <div className="mb-[15px]">
            <Button label="Đúng ngành & đã đi làm (age > 23)" />
          </div>
        </div>
        <div className="">
          <hr className="my-[15px] border-[#E7EBF0] border-solid dark:border-[#ffffff1f]" />
          <div className="mb-[15px]">
            <Button label="Học sinh (age < 18)" />
          </div>
        </div>
      </section>
    </div>
  );
}
