import CommonConstants from "@/constants/common";
import http from "@/lib/https";

interface User {
    id: string;
    name: string;
    email: string;
}

const authApiRequest = {
    login: async (credential: string) => 
        http.post<{ user: User }>(CommonConstants.API_APP_LOGIN_PATH, { credential }),
    logout: async () => 
        http.post(CommonConstants.API_APP_LOGOUT_PATH, {})
}

export default authApiRequest;