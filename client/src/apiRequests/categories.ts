import CommonConstants from "@/constants/common";
import http from "@/lib/https";
import { ContractResponseType } from "@/schemaValidations/categories.schema";

const categoriesApiRequest = {
    getCategoriesAll:  () => {
        return http.get<ContractResponseType>(CommonConstants.API_CATEGORIES_PATH)
    } 
}

export default categoriesApiRequest;