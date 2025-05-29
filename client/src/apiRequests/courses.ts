import CommonConstants from "@/constants/common";
import http from "@/lib/https";
import { CoursesResponseType, CourseType } from "@/schemaValidations/courses.schema";

const coursesApiRequest = {
  getAll: () => {
    return http.get<CoursesResponseType>(CommonConstants.API_COURSES_PATH);
  },
  getById: (id: string) => {
    const url = CommonConstants.API_COURSES_ID_PATH.replace(":id", id);
    return http.get<CourseType>(url);
  },
  getByNumber: (course_number: string) => {
    const url = CommonConstants.API_COURSES_NUMBER_PATH.replace(":course_number", course_number);
    return http.get<CourseType>(url);
  },
};

export default coursesApiRequest;
