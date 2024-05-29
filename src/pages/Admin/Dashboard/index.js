import { Col, Row } from "antd";
import JobStatistic from "./JobStatistic";
import CvStatistic from "./CvStatistic";
import InforCompany from "./InforCompany";

function Dashboard() {
    return (
        <>
            <Row gutter={[20, 20]}>
                <Col span={8}>
                    <JobStatistic/>
                </Col>
                <Col span={8}>
                   <CvStatistic/>
                </Col>
                <Col span={8}>
                    <InforCompany/>
                </Col>
            </Row>
        </>
    )
}
export default Dashboard;