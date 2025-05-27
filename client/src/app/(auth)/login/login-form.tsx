"use client";

import { useEffect, useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from '@react-oauth/google';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface User {
  name: string;
}

const LoginForm = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const yourClientId = "513098699265-81nqgsinqbt94uk4k13qe0hlno3u7f94.apps.googleusercontent.com"

  const handleLoginSuccess = async (credentialResponse: CredentialResponse) => {
    const credential = credentialResponse.credential;

    if (!credential) {
      console.error("No credential received");
      return;
    }

    try {
      const res = await axios.post('http://localhost:4000/api/auth/google-login', {
        credential
      });

      localStorage.setItem("user", JSON.stringify(res.data.user));
      router.push('/');
      toast.success("Đăng nhập thành công");
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <GoogleOAuthProvider clientId={yourClientId}>
      <form className="space-y-4">
          {user && <div>Xin chào, {user.name}</div>}
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => console.log("Login Failed")}
          />
      </form>
    </GoogleOAuthProvider>
  );
}

export default LoginForm;