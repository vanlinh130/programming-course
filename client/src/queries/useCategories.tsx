import categoriesApiRequest from '@/apiRequests/categories';
import { useQuery } from '@tanstack/react-query';

export const useCategoriesQuery = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      categoriesApiRequest.getCategoriesAll()
  });
};