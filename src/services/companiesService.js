import { get } from "../utils/request"

export const getCompanies = async () => {
    const result = await get("companies");
    return result;
}

export const getCompany = async (id) => {
    const result = await get(`companies/${id}`);
    return result;
}