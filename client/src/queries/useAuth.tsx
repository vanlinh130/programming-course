import authApiRequest from '@/apiRequests/auth';
import { useMutation } from '@tanstack/react-query';

export const useFacebookLoginMutation = () => {
  return useMutation({
    mutationFn: ({
      userId,
      accessToken,
    }: {
      userId: string;
      accessToken: string;
    }) => authApiRequest.facebookLogin({ userId, accessToken }),
  });
};


export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: authApiRequest.logout,
  });
};