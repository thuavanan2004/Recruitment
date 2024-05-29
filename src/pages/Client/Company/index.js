import { useState } from "react";
import boxImage from "../../../assets/images/company-billBoard.webp";
import SearchCompany from "./SearchCompany";
import "./style.css";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

function Company () {
    const [listCompany, setListCompany] = useState([]);
    const handleSearch = (companies) => {
        setListCompany(companies)  
    }
    return (
        <>
            <div className="company">
                <div className="container">
                    <div className="box-search-company">
                        <div className="box-search">
                            <p className="title">Khám phá 100.000+ công ty nổi bật</p>
                            <p className="desc">Tra cứu thông tin công ty và tìm kiếm nơi làm việc tốt nhất dành cho bạn</p>
                            <div className="form-search-company">
                                <SearchCompany onSearch={handleSearch}/>
                            </div>
                        </div>
                        <div className="box-image">
                            <img src={boxImage} alt="boxImage" />
                        </div>
                    </div>
                    <div className="featured-companies">
                        <Row gutter={[20, 20]}>
                            {listCompany && listCompany.map((item, index) => (
                                <Col lg={8} sm={12} span={24} key={index}>
                                    <Link to={`/detail/${item.id}`} >
                                        <Card >
                                            <div className="box">
                                                <div className="box-image"> <img src={item.imageCompany} alt="anh1"/></div>
                                                <div className="box-main">
                                                    <div className="company-image"> <img src={item.image} alt="dfs"/> </div> 
                                                    <div className="company-name"> {item.companyName} </div>
                                                    <div className="company-desc">{item.description}</div>
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Company;