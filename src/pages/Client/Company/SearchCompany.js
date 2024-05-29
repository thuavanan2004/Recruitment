import { useEffect, useState } from "react";
import "./style.css";
import { Input } from "antd";
import { getCompanies } from "../../../services/companiesService";
const { Search } = Input;



function SearchCompany({onSearch}) {
    const [listCompany, setListCompany] = useState([]);
    const [initialListCompany, setInitialListCompany] = useState([]);
    useEffect(() => {
        const fetchApi =  async () => {
            const companies = await getCompanies();
            setInitialListCompany(companies);
            setListCompany(companies);
        }
        fetchApi();
    }, [])
    
    const handleSearch = (value) => {
        const newCompanies = initialListCompany.filter( company => {
            return company.companyName.toLowerCase().includes(value.toLowerCase());
        })
        setListCompany(newCompanies);
    }
    useEffect(() => {
        onSearch(listCompany);
    }, [listCompany, onSearch])
    return (
        <>
            <Search onSearch={handleSearch} name="companySearch" placeholder="Nhập tên công ty" enterButton="Tìm kiếm" size="large" />
        </>
    )
}
export default SearchCompany;