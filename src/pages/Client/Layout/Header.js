import logo from "../../../assets/images/topcv-logo.webp";
import { getCookie } from "../../../helpers/cookie";
import { Link } from "react-router-dom";
import { UnorderedListOutlined } from "@ant-design/icons";
import "./LayoutDefault.scss";
import InforCollapse from "./InforCollapse";


function Header() {
  
    const token = getCookie("token");
    return (
        <>
            <header>
                <div className='layout-default__header'>
                    <div className='layout-default__header-logo'><Link to="/"><img src={logo} alt="logo-company" /></Link></div>
                    <div className='layout-default__header-main'> 
                        <div className='layout-default__header-menu'>
                            <ul>
                                <li><Link to="/">Việc làm</Link></li>
                                <li><Link to="/company" > Công ty </Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                            </ul>
                        </div>
                        <div className='layout-default__header-account'>
                            {token ? (
                                <InforCollapse/>
                            ) : (
                                <>
                                    <div className="login"><Link to="/login">Đăng nhập</Link></div>
                                    <div className="register">Đăng ký</div>
                                    <div className="registerSearch">Đăng tuyển & tìm hồ sơ</div>
                                </>
                            )}
                        </div>  
                        <div className="layout-default__header-bar">
                            <UnorderedListOutlined />
                        </div>  
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;