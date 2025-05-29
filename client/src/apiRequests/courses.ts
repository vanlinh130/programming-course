import CommonConstants from "@/constants/common";
import http from "@/lib/https";

type Course = {
  id: string | number;
  label: string;
  image_url: string;
  tag: string;
  title: string;
  description: string;
  short: string;
  students: number;
  likes: number;
  price: number;
  original_price: number;
};

const coursesApiRequest = {
  getAll: () => {
    return http.get<Course[]>(CommonConstants.API_COURSES_PATH);
  },
  getById: (id: string) => {
    const url = CommonConstants.API_COURSES_ID_PATH.replace(":id", id);
    return http.get<Course>(url);
  },
};

export default coursesApiRequest;
