import GoogleLoginButton from '@/components/GoogleLoginButton';
import React from 'react';

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="w-full md:w-[40%] bg-white flex flex-col justify-center items-center text-center px-5 md:px-10">
        <h1 className="text-[27px] md:text-3xl font-bold text-gray-800 mb-8 md:leading-12">
          Đăng Nhập Khóa Học Công Nghệ Thông Tin Cùng Dev Linh
        </h1>
        <GoogleLoginButton />
      </div>
      <div className="w-[60%] bg-[#1e1e1e] relative overflow-hidden hidden md:flex">
        <div className="absolute inset-0 bg-dot-pattern opacity-40"></div>
      </div>
    </div>
  );
};

export default Login;
