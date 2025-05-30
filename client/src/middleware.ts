import { NextRequest, NextResponse } from "next/server";
import CommonConstants from "./constants/common";

export default async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get(
    CommonConstants.COOKIE_ACCESS_TOKEN_NAME
  )?.value;
  const userInfoRaw = request.cookies.get(
    CommonConstants.COOKIE_USER_INFO_NAME
  )?.value;

  if (!accessToken || !userInfoRaw) {
    return NextResponse.redirect(new URL(CommonConstants.NOT_FOUND_PATH, request.url));
  }

  let userInfo;

  try {
    userInfo = JSON.parse(userInfoRaw);
  } catch {
    console.error("Invalid user info cookie format");
    return NextResponse.redirect(new URL(CommonConstants.LOGIN_PATH, request.url));
  }

  const userRole = userInfo.role;
  const userId = userInfo.id;
  const pathname = request.nextUrl.pathname;

  // Nếu là user mà truy cập admin -> redirect
  if (pathname.startsWith(CommonConstants.ADMIN_PATH) && userRole === "user") {
    return NextResponse.redirect(new URL(CommonConstants.HOME_PATH, request.url));
  }

  if (pathname.startsWith(CommonConstants.LEARN_PATH) && userRole === "user") {
    // GIẢ LẬP: danh sách user được duyệt học
    const approvedUserIds = [3, 4, 5]; // ví dụ userId hợp lệ

    // Nếu userId không nằm trong danh sách được duyệt → chặn
    if (!approvedUserIds.includes(userId)) {
      console.log(`User ${userId} is not approved to access learning`);
      return NextResponse.redirect(new URL(CommonConstants.HOME_PATH, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/auth/:path*", "/learn/:path*", "/user/:path*"],
};
