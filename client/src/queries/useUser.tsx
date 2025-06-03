import usersApiRequest from '@/apiRequests/users';
import { useQuery } from '@tanstack/react-query';


export const useUserFacebookIdQuery = (facebook_id: string) => {
  return useQuery({
    queryKey: ["courses", facebook_id],
    queryFn: () => usersApiRequest.getByFacebookID(facebook_id),
    enabled: !!facebook_id,
  });
};
