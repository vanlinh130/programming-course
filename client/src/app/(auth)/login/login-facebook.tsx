"use client";
import { useEffect, useState } from "react";
import FacebookLogin, {
  SuccessResponse,
} from "@greatsumini/react-facebook-login";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useFacebookLoginMutation } from "@/queries/useAuth";
import { FaFacebookSquare } from "react-icons/fa";
import envConfig from "@/config";

interface User {
  name: string;
}

const LoginFacebook = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [message, setMessage] = useState<{
    text: string;
    severity: "error" | "success";
  }>();
  const facebookLoginMutation = useFacebookLoginMutation();

  console.log(user, "user");

  const onSuccessHandler = async (response: SuccessResponse) => {
    try {
      const res = await facebookLoginMutation.mutateAsync({
        userId: response.userID,
        accessToken: response.accessToken,
      });

      localStorage.setItem("user", JSON.stringify(res.user));
      toast.success("Đăng nhập bằng Facebook thành công");
      router.push("/");
    } catch (err) {
      console.error("Facebook login error:", err);
      toast.error("Đăng nhập bằng Facebook thất bại");
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div>
      <FacebookLogin
        appId={envConfig.NEXT_PUBLIC_FACEBOOK_APP_ID}
        onSuccess={onSuccessHandler}
        onFail={() => {
          setMessage({ text: "Error occured", severity: "error" });
        }}
        render={({ onClick }) => (
          <button
            onClick={onClick}
            className="relative min-w-[64px] inline-flex items-center justify-center gap-2 bg-transparent font-bold text-[14px] text-[#007FFF] dark:text-[#3399FF] py-[5px] px-[15px] leading-[1.75] no-underline outline-none rounded-[10px] border-[1px] border-solid border-[#007fff80] hover:border-[#3399FF] shadow-none cursor-pointer transition-all duration-300 hover:bg-[#007fff0a]"
          >
            <div className="flex items-center gap-2">
              <FaFacebookSquare />
              <span>Login to Facebook</span>
            </div>
          </button>
        )}
      />
      {message && (
        <div
          className={`${
            message.severity === "error" ? "text-red-600" : "text-green-600"
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default LoginFacebook;
