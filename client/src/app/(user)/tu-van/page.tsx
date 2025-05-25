import Button from "@/components/ui/button";

const AskQuestionButton = ({ AskQuestion }: { AskQuestion: string }) => {
  return (
    <div className="max-w-full h-[24px] inline-flex items-center justify-center rounded-[16px] text-[#0059B2] cursor-pointer font-medium bg-[rgba(194,224,255,0.5)] hover:bg-[#C2E0FF]">
      <span className="px-2">{AskQuestion}</span>
    </div>
  );
};

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
            <AskQuestionButton AskQuestion="Câu hỏi chung" />
            <AskQuestionButton AskQuestion="Sinh viên IT và non-IT (18 <= age <=23)" />
            <AskQuestionButton AskQuestion="Trái ngành & đã đi làm (age > 23)" />
            <AskQuestionButton AskQuestion="Đúng ngành & đã đi làm (age > 23)" />
            <AskQuestionButton AskQuestion="Học sinh (age < 18)" />
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
