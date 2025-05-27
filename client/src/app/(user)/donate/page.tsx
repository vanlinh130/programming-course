import { PiArrowBendUpRight } from "react-icons/pi";
import { AiTwotoneBank } from "react-icons/ai";
import { CgSmartphone } from "react-icons/cg";
import { RiPaypalFill } from "react-icons/ri";
import { MBBankIcon } from "@/components/icons/svgIcons";
import Image from "next/image";

export default function Page() {
  const Bank = [
    {
      id: 1,
      logo: "/images/banks/logo-mbank.png",
      orImage: "/images/banks/or-mbank.jpg",
      accountNumber: "LeVanLinh",
      accountName: "Le Van Linh",
      no: 1,
    },
    {
      id: 2,
      logo: "/images/banks/logo-momo.webp",
      orImage: "/images/banks/or-momo.jpg",
      accountNumber: "LeVanLinh",
      accountName: "Le Van Linh",
      no: 2,
    },
    {
      id: 2,
      logo: "/images/banks/logo-paypal.webp",
      orImage: "/images/banks/or-mbank.jpg",
      accountNumber: "LeVanLinh",
      accountName: "Le Van Linh",
      no: 3,
    },
  ];
  return (
    <section className="max-w-[1200px] px-5 md:px-5 lg:px-[30px] w-full m-auto">
      <div className="flex flex-col">
        <div className="w-full">
          <h1 className="text-center text-[#1A2027] text-[24px] font-bold mt-[50px] mb-[20px] dark:text-[#fff]">
            Cho Đi Để Nhận Lại - Think Different
          </h1>
          <hr className="my-[15px] border-[#E7EBF0] border-solid dark:border-[#ffffff1f]" />
        </div>
        <div className="pt-[20px] m-auto">
          <div className="flex items-center justify-center lg:w-[490px] bg-[#F3F6F9] dark:bg-[#132f4c80] text-[#1A2027] dark:text-[#E7EBF0] rounded-[5px] border-[1px] border-solid border-[#E7EBF0] dark:border-[#c2e0ff14] p-2.5">
            <h4 className="text-[16px] my-[21px] font-bold">Kênh Quyên Góp</h4>
            <ul className="my-4 pl-[40px] flex flex-col gap-2">
              <li className="list-none flex items-center gap-2 text-[16px] text-[#1A2027] dark:text-[#E7EBF0]">
                <PiArrowBendUpRight />
                <span>Qua Bank Nội Địa</span>
                <AiTwotoneBank />
              </li>
              <li className="list-none flex items-center gap-2 text-[16px] text-[#1A2027] dark:text-[#E7EBF0]">
                <PiArrowBendUpRight />
                <span>Qua Ứng Dụng MoMo</span>
                <CgSmartphone />
              </li>
              <li className="list-none flex items-center gap-2 text-[16px] text-[#1A2027] dark:text-[#E7EBF0]">
                <PiArrowBendUpRight />
                <span>Qua Ví PayPal</span>
                <RiPaypalFill />
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-[30px] mb-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[30px]">
            {Bank.map((bank, index) => {
              return (
              <div key={index} className="col-span-1">
                <div className="p-[15px] bg-[#F3F6F9] rounded-[10px] border-[1px] border-solid border-[#E7EBF0] dark:border-[#c2e0ff14]">
                  <div className="">
                    <MBBankIcon />
                    <div className="flex items-center justify-center w-full h-[135px] relative">
                      <Image
                        src={bank.logo}
                        alt="MB Bank"
                        height={135}
                        width={200}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="mt-10">
                    <div className="flex flex-row gap-3">
                      <div className="flex flex-col gap-1.5">
                        <h6 className="text-[#a12c2f] text-[13px] font-semibold uppercase">
                          No
                        </h6>
                        <span className="text-[#1f272b] text-[22px]">{bank.no}</span>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[#1A2027] font-normal">
                          Số Tài Khoản: <b>{bank.accountNumber}</b>
                        </span>
                        <span className="text-[#1A2027] font-normal">
                          Tên Người Nhận: :{" "}
                          <b className="text-[14px] uppercase">{bank.accountName}</b>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-[#1A2027] font-normal mt-1 text-center">
                    Or
                  </div>
                  <div className="flex items-center justify-center w-full h-[300px]">
                    <Image
                      src={bank.orImage}
                      alt="MB Bank"
                      height={360}
                      width={280}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
