import { useEffect, useState } from "react";
import { getJobsByIdCompany } from "../../../services/jobsService";


function JobStatistic() {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            const response = await getJobsByIdCompany();
        }
    })
    return (
        <>

        </>
    )
}

export default JobStatistic;