import { get } from "../utils/request";

export const getCities = async () => {
    const result = await get("cities");
    return result;
}