import { Col, Form, Input, Row, Select, Button } from "antd";
import { SearchOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { getJobs } from "../../../services/jobsService";
import { getCompanies } from "../../../services/companiesService";

function SearchForm({onSearch}) {
    const [listJobs, setListJobs] = useState([]);
    const [listCompany, setListCompany] = useState([]);
    const experienceOptions = [
        { label: 'Tất cả kinh nghiệm', value: 'all' },
        { label: 'Chưa có kinh nghiệm', value: 'none' },
        { label: '1 năm', value: '1' },
        { label: '2 năm', value: '2' },
        { label: '3 năm', value: '3' },
        { label: '4 năm', value: '4' },
        { label: '5 năm', value: '5' },
        { label: 'Trên 5 năm', value: 'over 5' }
    ];
      
    const salaryOptions = [
        { label: 'Tất cả mức lương', value: 'all' },
        { label: 'Dưới 5 triệu', value: 'under 5,000,000' },
        { label: '5 - 10 triệu', value: '5,000,000 10,000,000' },
        { label: '10 - 20 triệu', value: '10,000,000 20,000,000' },
        { label: '20 - 30 triệu', value: '20,000,000 30,000,000' },
        { label: '30 - 50 triệu', value: '30,000,000 50,000,000' },
        { label: 'Trên 50 triệu', value: 'over 50,000,000' }
    ];
    const cityOptions = [
        { label: 'Tất cả địa điểm', value: 'all' },
        { label: 'Hà Nội', value: 'Hanoi' },
        { label: 'Hồ Chí Minh', value: 'Ho Chi Minh City' },
        { label: 'Đà Nẵng', value: 'Da Nang' },
        { label: 'Huế', value: 'Hue' }  
    ];
    useEffect(() => {
        const fetchApi = async () => {
            const jobs = await getJobs();
            const companies = await getCompanies();
            setListJobs(jobs);
            setListCompany(companies)
        }
        fetchApi();
    })
    const handleSubmit = (value) => {
        const name = value.name  ;
        const city = value.city;
        const experience = value.experience;
        const salary = value.salary ;
        const resultJobs = listJobs.filter((job) => {
            const nameCondition = !name || job.name.toLowerCase().includes(name.toLowerCase());
            let salaryCondition = true;
            let experienceCondition = true; 
            let cityCondition = true;

            if (city !== 'all' && city) {
                cityCondition = !city || job.city.some(c => c.includes(city)) ;
            }

            if(experience !== 'all' && experience) {
                const arrayExperience = experience.split(" ");
                switch (arrayExperience[0]) {
                    case 'none':
                        experienceCondition = job.experience === 'Chưa có kinh nghiệm';
                        break;
                    case 'over':
                        experienceCondition = parseInt(job.experience.split(' ')[0]) > parseInt(arrayExperience[1]);
                        break;
                    default:
                        experienceCondition = job.experience.includes(arrayExperience[0]);
                        break;
                
            }}
            if(salary !== "all" && salary) {
                const arraySalary = salary.split(" ");
                const valueSalary = parseInt(job.salary.split(" ")[0]);

                if (arraySalary[0] === "under") {
                    salaryCondition = parseInt(arraySalary[1]) > valueSalary;
                } else if (arraySalary[0] === "over") {
                    salaryCondition = parseInt(arraySalary[1]) < valueSalary;
                } else {
                    salaryCondition = valueSalary >= parseInt(arraySalary[0]) && valueSalary <= parseInt(arraySalary[1]);
            }};


            return(nameCondition && cityCondition && experienceCondition && salaryCondition)
        })
        const jobsWithCompanyData = resultJobs.map( (job) => {
            const company = listCompany.find(c => parseInt(c.id) === parseInt(job.idCompany) );
            
            return {
                ...job,
                companyName : company ? company.companyName : "",
                image: company ? company.image : ""
            }
        })

        onSearch(jobsWithCompanyData);
        
    };



    return (
        <>
            <Form onFinish={handleSubmit}>
                <Row gutter={[20,20]}>
                    <Col xl={5} md={12} span={24} >
                        <Form.Item name="name">
                            <Input size="large" prefix={<SearchOutlined />} placeholder="Vị trí tuyển dụng" />
                        </Form.Item>
                    </Col>
                    <Col xl={5} md={12} span={24} >
                        <Form.Item name="city">
                            <Select
                                prefix={<EnvironmentOutlined />}
                                size="large"
                                options={cityOptions}
                                placeholder="Tất cả địa điểm"
                            />
                        </Form.Item>
                    </Col>
                    <Col xl={5} md={12} span={24} >
                        <Form.Item name="experience" >
                            <Select
                                size="large"
                                options={experienceOptions}
                                placeholder="Tất cả kinh nghiệm"
                            />
                        </Form.Item>
                    </Col>
                    <Col xl={5} md={12} span={24}>
                        <Form.Item name="salary">
                            <Select
                                size="large"
                                options={salaryOptions}
                                placeholder="Tất cả các mức lương"
                            />
                        </Form.Item>
                    </Col>
                    <Col xl={4} span={24}>
                        <Form.Item>
                            <Button type="" size="large" htmlType="submit">Tìm kiếm </Button>
                        </Form.Item>
                    </Col>
                </Row>
                    
                    
            </Form>
             
        </>
    )
}

export default SearchForm;