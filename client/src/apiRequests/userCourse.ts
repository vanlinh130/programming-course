import CommonConstants from "@/constants/common";
import http from "@/lib/https";
import { CourseType } from "@/schemaValidations/courses.schema";

const userCourseApiRequest = {
  getApproved: (userId: string) => {
    const url = CommonConstants.API_USER_COURSE_APPROVE_ID_PATH.replace(":userId", userId);
    return http.get<CourseType>(url);
  },
};

export default userCourseApiRequest;
