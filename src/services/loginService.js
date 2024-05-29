import { get } from "../utils/request";
export const login = async (email, password) => {
    const result = await get(`user_accounts?email=${email}&password=${password}`);
    return result;
}