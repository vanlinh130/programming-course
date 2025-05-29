import coursesApiRequest from '@/apiRequests/courses';
import { useQuery } from '@tanstack/react-query';

export const useCoursesQuery = () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: () => coursesApiRequest.getAll(),
  });
};

export const useCourseDetailQuery = ( id: string) => {
  return useQuery({
    queryKey: ["courses", id],
    queryFn: () =>
      coursesApiRequest.getById(id),
      enabled: !!id,
  });
};

export const useCourseNumberDetailQuery = ( course_number: string) => {
  return useQuery({
    queryKey: ["courses", course_number],
    queryFn: () =>
      coursesApiRequest.getByNumber(course_number),
      enabled: !!course_number,
  });
};