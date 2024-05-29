import { get } from "../utils/request";

export const getJobs = async () => {
    const result = await get("jobs");
    return result;
}

export const getJobsByIdCompany = async (idCompany) => {
    const result = await get(`jobs?idCompany=${idCompany}`);
    return result;
}
export const getJobsById = async (id) => {
    const result = await get(`jobs/${id}`);
    return result;
}