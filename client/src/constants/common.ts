const CommonConstants = {
  HOME_PATH: "/",
  KHOA_HOC_PATH: "/khoa-hoc",
  SHOW_KHOA_HOC_PATH: '/khoa-hoc/:id',
  REVIEW_PATH: "/review",
  TU_VAN_PATH: "/tu-van",
  DONATE_PATH: "/donate",
  LOGIN_PATH: "/login",
  NOT_FOUND_PATH: "/not-found",

  // API Paths
  API_APP_LOGIN_PATH: "/api/auth/google-login",
  API_APP_LOGOUT_PATH: "/api/auth/logout",
  API_USERS_PATH: "/api/users",
  API_USERS_GOOGLE_ID_PATH: "/api/users/:google_id",
  API_UPDATE_USERS_PATH: "/api/users/:google_id",
  API_DELETE_USERS_PATH: "/api/users/:google_id",
  API_PATCH_USERS_ROLE_PATH: "/api/users/:google_id/role",

  API_CATEGORIES_PATH: "/api/categories",
  API_CREATE_CATEGORIES_PATH: "/api/categories",
  API_CATEGORIES_VALUE_PATH: "/api/categories/:value",
  API_UPDATE_CATEGORIES_PATH: "/api/categories/:id",
  API_DELETE_CATEGORIES_PATH: "/api/categories/:id",

  API_COURSES_PATH: "/api/courses",
  API_CREATE_COURSES_PATH: "/api/courses",
  API_COURSES_ID_PATH: "/api/courses/:id",
  API_UPDATE_COURSES_PATH: "/api/courses/:id",
  API_DELETE_COURSES_PATH: "/api/courses/:id",

  API_LESSONS_PATH: "/api/lessons",
  API_CREATE_LESSONS_PATH: "/api/lessons",
  API_LESSONS_ID_PATH: "/api/lessons/:id",
  API_UPDATE_LESSONS_PATH: "/api/lessons/:id",
  API_DELETE_LESSONS_PATH: "/api/lessons/:id",

};

export default CommonConstants;
