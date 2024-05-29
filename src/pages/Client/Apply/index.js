import "./apply.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getJobsById, getJobsByIdCompany } from "../../../services/jobsService";
import { getCompany } from "../../../services/companiesService";
import { Button, Card, Col, Row, Table, message, Modal, Form, Input, Upload, Spin } from "antd";
import { DollarOutlined, EnvironmentOutlined, HourglassOutlined, UploadOutlined } from '@ant-design/icons';
import { getCookie } from "../../../helpers/cookie";
import { postCV } from "../../../services/cvService";


function Apply() {
    const [data, setData] = useState();
    const [company, setCompany] = useState();
    const [jobs, setJob] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [spinning, setSpinning] = useState(false);

    const params = useParams();
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getJobsById(params.id);
            const company = await getCompany(response.idCompany); 
            const listJob = await getJobsByIdCompany(response.idCompany);
            setCompany(company);
            setData(response);
            setJob(listJob);
        }
        fetchApi();
    }, [params])
    const handleClick = () => {
        const isLogin = getCookie("token");
        if(!isLogin){
            messageApi.warning("Bạn cần đăng nhập trước khi ứng tuyển !");
        } else{
            setIsModalOpen(true)
        }
    }

    const checkFile = (file) => {
        const isPdfOrDoc = file.type === 'application/pdf' || file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        const isLt5M = file.size / 1024 / 1024 < 5;
    
        if (!isPdfOrDoc) {
          message.error('Chỉ hỗ trợ tệp PDF hoặc DOC/DOCX!');
        }
        if (!isLt5M) {
          message.error('Tệp phải nhỏ hơn 5MB!');
        }
    
        return false;
      };
    
      const handleChange = (info) => {
        let fileList = [...info.fileList];
        fileList = fileList.slice(-1);
        setFileList(fileList);
        if (info.file.status === 'done') {
          message.success(`${info.file.name} đã được tải lên thành công!`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} tải lên không thành công.`);
        }
      };
    
      const handleSubmit =  (value) => {
        setSpinning(true)
        const formPost = {
            idCompany: data.idCompany,
            idJob: data.id,
            linkCV: value.formData.file,
            name: value.name,
            email: value.email,
            phone: value.phone
        };

        const fetchApi = async () => {
            const response = await postCV(formPost);
            if(response){
                message.success(`Gửi CV lên thành công!`);
                setSpinning(false)
                setIsModalOpen(false)
            }else {
                message.error(`Gửi CV lên không thành công!`);
                setIsModalOpen(false)
            }
        }
        fetchApi();
        
      }
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
                    <Button >Ứng tuyển</Button>
                </Link>
            ),
        },
    ]
    
    
    return (
        <>
            {contextHolder}
            {data && 
                <div className="job-detail">
                    
                    <div className="container">
                        <Row>
                            <Col span={18}>
                                <Card>
                                    <div className="name-job">{data.name}</div>
                                    <div className="job-introduce-detail">
                                        <div className="job-salary"><DollarOutlined /> Lương : {data.salary}</div>
                                        <div className="job-city"><EnvironmentOutlined />
                                            Thành phố : {data.city.map((city, index) => (
                                                <li key={index}>{city}</li>
                                                ))}</div>
                                        <div className="job-experience"> <HourglassOutlined /> Kinh nghiệm {data.experience}</div>
                                      
                                    </div>
                                    <Button onClick={handleClick} className="button-apply" type="text">ỨNG TUYỂN NGAY</Button>
                                    <div className="form-apply">
                                        <Spin tip="loading" spinning={spinning} >
                                            <Modal title={`Ứng tuyển vị trí ${data.name}`} open={isModalOpen} footer={null} onCancel={() => setIsModalOpen(false)} >
                                                <Form layout="vertical" onFinish={handleSubmit}>
                                                    <Form.Item
                                                        label=""
                                                        name="formData"
                                                        rules={[
                                                            {
                                                            required: true,
                                                            message: 'Vui lòng gửi link CV của bạn vào đây !',
                                                            },
                                                        ]}
                                                    >
                                                        <Upload.Dragger 
                                                            fileList={fileList}  
                                                            action={"http://localhost:3001/"} 
                                                            beforeUpload={checkFile}  
                                                            onChange={handleChange}
                                                            accept=".doc,.docx,.pdf"
                                                        >
                                                                <UploadOutlined />
                                                                <p>Hỗ trợ định dạng .doc, .docx, pdf có kích thước dưới 5MB</p>
                                                                <h4>Tải lên CV từ máy tính của bạn, Chọn hoặc kéo thả</h4>
                                                        </Upload.Dragger>
                                                    </Form.Item>

                                                    <Form.Item
                                                        label="Họ và tên"
                                                        name="name"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Vui lòng nhập họ tên !',
                                                            },
                                                        ]}
                                                    >
                                                        <Input />
                                                    </Form.Item>

                                                    <Form.Item
                                                        label="Email"
                                                        name="email"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Vui lòng nhập email !',
                                                            },
                                                        ]}
                                                    >
                                                        <Input />
                                                    </Form.Item>

                                                    <Form.Item
                                                        label="Số điện thoại"
                                                        name="phone"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Vui lòng nhập số điện thoại!',
                                                            },
                                                        ]}
                                                    >
                                                        <Input />
                                                    </Form.Item>

                                                    <Form.Item >
                                                        <Button htmlType="submit">Gửi</Button>
                                                    </Form.Item>
                                                </Form>
                                            </Modal>
                                        </Spin>
                                    </div>
                                </Card>
                                <Card title="Tuyển dụng">
                                    <Table dataSource={jobs} columns={columns} rowKey="id" />
                                </Card>
                            </Col>
                            <Col span={6}>
                            <Card>
                                <div className="company-info">
                                    <h3>Thông tin công ty</h3>
                                    <p><strong>Công ty:</strong> {company.companyName}</p>
                                    <p><strong>Địa chỉ:</strong> {company.address}</p>
                                    <p><strong>Email:</strong> {company.email}</p>
                                    <p><strong>Điện thoại:</strong> {company.phone}</p>
                                    <p><strong>Website:</strong> <a href={company.website} target="_blank" rel="noopener noreferrer">{company.website}</a></p>
                                    <div className="company-image"><img src={company.image} alt={company.companyName} /></div>
                                </div>
                            </Card>
                            </Col>

                        </Row>
                    </div>
                </div>
            }
           
        </>
    )
}

export default Apply;