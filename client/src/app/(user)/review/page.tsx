import { StudentFeedback } from "../components/home";

export default function Page() {
  return (
    <>
      <section className="max-w-[1200px] px-5 md:px-5 lg:px-[30px] w-full m-auto">
        <div className="mb-[15px]">
          <div>
            <div className="flex items-center">
              <h2 className="text-[#1A2027] text-[24px] font-bold my-[20px] dark:text-[#fff]">
                Đánh Giá - Nhận Xét Khóa Học Từ Học Viên
              </h2>
            </div>
            <div className="relative w-full pb-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/b7W21_Zk_JQ"
                title="YouTube video player"
                className="absolute top-0 left-0 w-full h-full rounded-[10px] shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-[50px] mb-[7px] font-normal text-[#1A2027] dark:text-[#fff]">
              Nhiều người &quot;thường ép học viên & dàn dựng&quot; ra phần review này, và
              cá nhân mình không thích điều đấy.
            </div>
            <div className="mt-[7px] mb-[7px] font-normal text-[#1A2027] dark:text-[#fff]">
              Đối với mình, mỗi học viên là một khách hàng dài hạn, mình muốn tạo
              sự thoải mãi nhất giữ &quot;mình và bạn&quot;, để làm sao người hài lòng nhất
              vẫn là &quot;học viên&quot;.
            </div>
            <div className="mt-[7px] mb-[7px] font-normal text-[#1A2027] dark:text-[#fff]">
              Trải qua hơn 2 năm làm khóa học (từ năm 2021) với nền tảng Youtube,
              và sau này là Udemy, với hơn 20+ khóa học, mình đã đạt được thành
              quả sau:
            </div>
          </div>
        </div>
      </section>
      <StudentFeedback showReview={false} />
    </>
  );
}
