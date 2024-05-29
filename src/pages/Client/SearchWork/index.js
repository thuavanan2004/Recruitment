import SearchForm from "./Search";
import CarouselCompany from "./carouselCompany";
import bgLeft from "../../../assets/images/bg-left.webp";
import bgRight from "../../../assets/images/bg-right.webp";
import robot from "../../../assets/images/robot.webp";
import "./section-header.css";
import CompanyList from "../../../components/CompanyList/index";
import { useState } from "react";

function Home() {
    const [jobs, setJobs] = useState([]);
    const handleSubmit = (resultJobs) => {
        setJobs(resultJobs);
    }

    return(
        <>
            <div className="section-header">
                <div className="container">
                    <div className="header-box">
                        <h2>Tìm việc làm nhanh 24h, việc làm mới nhất trên toàn quốc</h2>
                        <p>Tiếp cận <strong>40,000 +</strong> tin tuyển dụng việc làm mỗi ngày từ hàng nghìn doanh nghiệp uy tín tại Việt Nam</p>
                    </div>
                    <div className="form-search-job">
                        <SearchForm onSearch={handleSubmit}/>
                    </div>
                    <div className="box-work-market">
                        <CarouselCompany />
                    </div>
                </div>
                <img className="img-responsive img-bg-left" src={bgLeft} alt="bg-left" />
                <img className="img-responsive img-bg-right" src={bgRight} alt="bg-left" />
                <img className="img-responsive img-robot" src={robot} alt="bg-left" />
            </div>
            <div className="list-company">
                <div className="container">
                    <div className="box-header"></div>
                    <div className="box-main">
                        <CompanyList jobs={jobs} />
                    </div>
                </div>
            </div>
            
        </>
    )
}


export default Home;