import { Card, Col, Row, Result } from "antd";
import { Link } from "react-router-dom";
import { getJobs } from "../../services/jobsService";
import { getCompanies } from "../../services/companiesService";
import { SmileOutlined } from "@ant-design/icons";

import "./style.css";
import { useEffect, useState } from "react";

function CompanyList(props) {
    const {jobs} = props;
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const listJob = await getJobs();
            const companies = await getCompanies();
            const jobsWithCompanyData = listJob.map( (job, index) => {
                const company = companies.find(c => parseInt(c.id) === parseInt(job.idCompany) );
                
                return {
                    ...job,
                    companyName : company ? company.companyName : "",
                    image: company ? company.image : ""
                }
            })
            setData(jobsWithCompanyData);
        }
        fetchApi();
    }, [])
    useEffect(() => {
        setData(jobs);
    }, [jobs]);
    return (
        <>  

            <Row gutter={[20, 20]}>
                { data && data.map((item, index) => (
                    <Col lg={8} md={12} span={24} key={index}>
                        <Link to={`/apply/${item.id}`}>
                            <Card>
                                <div className="card-item">
                                <div className="card-image"> <img src={item.image} alt={index}/></div>
                                    <div className="card-content">
                                        <div className="title">
                                            {item.name}
                                        </div>
                                        <div className="company-name">
                                            {item.companyName}
                                        </div>
                                        <div className="inner-wrap">
                                            <div className="item">
                                                {item.salary}
                                            </div>
                                            <div className="item">
                                                {item.city.map(it => {
                                                    return it + ' '
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
            {data.length === 0 &&  
                <Result
                    icon={<SmileOutlined />}
                    title="Không tìm thấy kết quả tìm kiếm phù hợp"
                /> 
            }
        </>
    )
}

export default CompanyList;