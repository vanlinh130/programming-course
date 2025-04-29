import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Giả lập role (1: user, 2: user, 3: admin)
function getUserRole(): number {
  return 1; // sửa thành 3 nếu bạn muốn test admin
}

export function middleware(req: NextRequest) {
  const role = getUserRole();
  const pathname = req.nextUrl.pathname;

  // Định nghĩa các route dành cho admin và user
  const adminPaths = ['/admin'];
  const userPaths = ['/donate', '/khoa-hoc', '/review', '/tu-van'];

  // Kiểm tra quyền admin
  if (adminPaths.some(path => pathname.startsWith(path))) {
    if (role === 3) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL('/not-found', req.url));
    }
  }

  // Kiểm tra quyền user
  if (userPaths.some(path => pathname.startsWith(path))) {
    if (role === 1 || role === 2) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL('/not-found', req.url));
    }
  }

  return NextResponse.next(); // Cho phép các route khác
}

export const config = {
  matcher: ['/admin/:path*', '/donate/:path*', '/khoa-hoc/:path*', '/review/:path*', '/tu-van/:path*'],
};
