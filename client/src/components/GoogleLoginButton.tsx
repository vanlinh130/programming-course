"use client";

import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from '@react-oauth/google';
import axios from 'axios';

export default function GoogleLoginButton() {
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

      console.log('User data from server:', res.data.user);
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return (
    <GoogleOAuthProvider clientId={yourClientId}>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={() => console.log("Login Failed")}
      />
    </GoogleOAuthProvider>
  );
}
