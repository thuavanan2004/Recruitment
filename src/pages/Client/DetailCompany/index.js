import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompany } from "../../../services/companiesService"; 
import { getJobsByIdCompany } from "../../../services/jobsService";
import "./detailCompany.css";
import { Card, Col, Row, Table, Button } from "antd";
import { Link } from "react-router-dom";
import { AimOutlined, MailOutlined, ChromeOutlined, PhoneOutlined } from "@ant-design/icons";

function DetailCompany() {
    const params = useParams()
    const [ data, setData ] = useState([]);
    const [ jobs, setJobs ] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const response = await getCompany(params.id);
            const listJob = await getJobsByIdCompany(params.id);
            setJobs(listJob);
            setData(response);
        }
        fetchApi()
    }, [params])
    
    const columns = [
        {
            title: 'Yêu cầu',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Lương',
            dataIndex: 'salary',
            key: 'salary',
        },
        {
            title: 'Kinh nghiệm',
            dataIndex: 'experience',
            key: 'experience',
        },
        {
            title: 'Khu vực',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'Ứng tuyển',
            render: (_, record) => (
                <Link to={`/apply/${record.id}`}>
                    <Button>Ứng tuyển</Button>
                </Link>
            ),
        },
    ]

    return (
        <>
            <div className="company-detail">
                <div className="container">
                    <div className="box-company">
                        <div className="box-image"> <img src={data.imageCompany} alt={data.companyName}  /></div>
                        <div className="box-main">
                            <div className="nameCompany">Công ty : {data.companyName}</div>
                            <div className="address"> Địa chỉ : {data.address}</div>
                        </div>
                        <div className="image"><img src={data.image} alt={data.companyName}/></div>
                    </div>
                    <div className="box-detail">
                        <Row gutter={[20, 20]}>
                            <Col lg={16} span={24}>
                                <div className="company-introduce">
                                    <Card title="Giới thiệu công ty">
                                        <p>{data.description}</p>
                                    </Card>

                                    <Card title="Tuyển dụng">
                                        <Table dataSource={jobs} columns={columns} rowKey="id" />

                                    </Card>
                                </div>
                            </Col>
                            <Col lg={8} span={24}>
                               <div className="company-contact">
                                    <Card title="Thông tin liên hệ">
                                        <h4><AimOutlined /> Địa chỉ: {data.address}</h4>
                                        <h4><MailOutlined /> Email : {data.email}</h4>
                                        <h4><ChromeOutlined /> Website : {data.website}</h4>
                                        <h4><PhoneOutlined /> Điện thoại : {data.phone}</h4>
                                    </Card>
                               </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailCompany;