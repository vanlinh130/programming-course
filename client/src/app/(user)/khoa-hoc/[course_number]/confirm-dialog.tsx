import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CourseType } from "@/schemaValidations/courses.schema";
import Image from "next/image";
import { useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { MdLocalFireDepartment } from "react-icons/md";

type Props = {
  courses: CourseType | null;
};

const ConfirmDialog = (props: Props) => {
  const { courses } = props;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  console.log(courses);

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <div className="relative h-[200px] w-full cursor-pointer">
            <Image
              src={courses?.image_url || " "}
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
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="p-[20px] relative">
            <DialogTitle className="flex items-center justify-center">
              <div className="flex items-center gap-2">
                <MdLocalFireDepartment className="text-[#ab6800] text-[24px]" />
                <span className="text-[24px] text-[#1A2027] dark:text-[#fff]">
                  {courses?.title}
                </span>
                <MdLocalFireDepartment className="text-[#ab6800] text-[24px]" />
              </div>
            </DialogTitle>
            <DialogClose asChild>
              <div className="absolute top-0 right-0">
                <div className="flex items-center justify-center w-[34px] h-[34px] cursor-pointer bg-[#f3f6f9] rounded-full hover:opacity-90">
                  <IoClose className="text-[#a0aab4] text-[24px]" />
                </div>
              </div>
            </DialogClose>
          </DialogHeader>
          <div className=" md:h-[300px] lg:h-[600px]">
            <iframe
              src={`https://www.youtube.com/embed/${courses?.video_url}`}
              title="YouTube video player"
              className="w-full h-full shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ConfirmDialog;
