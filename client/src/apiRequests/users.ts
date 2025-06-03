import CommonConstants from "@/constants/common";
import http from "@/lib/https";
import { UserType } from "@/schemaValidations/users.schema";

const usersApiRequest = {
  getByFacebookID: (facebook_id: string) => {
    const url = CommonConstants.API_USERS_FACEBOOK_ID_PATH.replace(":facebook_id", facebook_id);
    return http.get<UserType>(url);
  },
};

export default usersApiRequest;
