import { post } from "../utils/request"

export const postCV = async (option) => {
    const result = await post("cv", option);
    return result;
}