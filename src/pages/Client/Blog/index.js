import { Col, Row } from "antd";
import "./blog.css";
import introduceMyself from "../../../assets/images/introduce-myself.webp";
import tester from "../../../assets/images/tester.webp";

function Blog() {
    return (
        <>
            <div className="page-blog">
                <div className="page-blog-header">
                    <div className="container">
                        <div className="blog-header-content">
                            <h1>Cẩm nang nghề nghiệp</h1>
                            <p>Khám phá thông tin hữu ích liên quan tới nghề nghiệp bạn quan tâm. Chia sẻ kinh nghiệm, kiến thức chuyên môn giúp bạn tìm được công việc phù hợp và phát triển bản thân.</p>
                        </div>
                    </div> 
                </div>
                
            </div>
            <div className="featured-artcle">
                <div className="container">
                    <h2>Bài viết nổi bật</h2>
                    <div className="list-articles">
                        <Row gutter={[20, 20]}>
                            <Col lg={12} span={24}>
                                <div className="box-articles-left">
                                    <div className="articles-image">
                                        <img src={introduceMyself} alt="anh"/>
                                    </div>
                                    <div className="box-aricles-main">
                                        <div className="articles-category">KIẾN THỨC CHUYÊN NGÀNH</div>
                                        <h2 className="articles-title">Cách giới thiệu bản thân ngày đầu đi làm cho tân binh mới </h2>
                                        <div className="articles-createAt">19/04/2024</div>
                                        <div className="articles-desc">Ngày đầu tiên đi học, ngày đầu tiên đi làm, v.v.. Những ngày đầu tiên ấy luôn mang đến cho chúng ta cảm giác hồi hộp lạ thường. Với ngày đầu đi làm, ai cũng muốn tạo được ấn tượng tốt đẹp với đồng nghiệp.</div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12} span={24}>
                                <div className="box-articles-item">
                                    <div className="articles-image">
                                        <img src={tester} alt="tester"/>
                                    </div>
                                    <div className="box-aricles-main">
                                        <div className="articles-category">KIẾN THỨC CHUYÊN NGÀNH</div>
                                        <div className="articles-title">Cách giới thiệu bản thân ngày đầu đi làm cho tân binh mới </div>
                                        <div className="articles-createAt">19/04/2024</div>
                                    </div>
                                </div>
                            
                                <div className="box-articles-item">
                                    <div className="articles-image">
                                        <img src={tester} alt="tester"/>
                                    </div>
                                    <div className="box-aricles-main">
                                        <div className="articles-category">KIẾN THỨC CHUYÊN NGÀNH</div>
                                        <div className="articles-title">Cách giới thiệu bản thân ngày đầu đi làm cho tân binh mới </div>
                                        <div className="articles-createAt">19/04/2024</div>
                                    </div>
                                </div>
                            
                                <div className="box-articles-item">
                                    <div className="articles-image">
                                        <img src={tester} alt="tester"/>
                                    </div>
                                    <div className="box-aricles-main">
                                        <div className="articles-category">KIẾN THỨC CHUYÊN NGÀNH</div>
                                        <div className="articles-title">Cách giới thiệu bản thân ngày đầu đi làm cho tân binh mới </div>
                                        <div className="articles-createAt">19/04/2024</div>
                                    </div>
                                </div>

                                <div className="box-articles-item">
                                    <div className="articles-image">
                                        <img src={tester} alt="tester"/>
                                    </div>
                                    <div className="box-aricles-main">
                                        <div className="articles-category">KIẾN THỨC CHUYÊN NGÀNH</div>
                                        <div className="articles-title">Cách giới thiệu bản thân ngày đầu đi làm cho tân binh mới </div>
                                        <div className="articles-createAt">19/04/2024</div>
                                    </div>
                                </div>
                            
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blog;