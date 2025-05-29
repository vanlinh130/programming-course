import CommonConstants from "@/constants/common";
import http from "@/lib/https";

type Category = {
  id: string | number;
  name: string;
  value: string;
  title: string;
};

const categoriesApiRequest = {
    getCategoriesAll:  () => {
        return http.get<Category[]>(CommonConstants.API_CATEGORIES_PATH)
    } 
}

export default categoriesApiRequest;