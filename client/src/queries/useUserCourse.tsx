import userCourseApiRequest from '@/apiRequests/userCourse';
import { useQuery } from '@tanstack/react-query';

export const useUseCourseApprovedQuery = ( userId: string) => {
  return useQuery({
    queryKey: ["userCourse", userId],
    queryFn: () =>
      userCourseApiRequest.getApproved(userId),
      enabled: !!userId,
  });
};