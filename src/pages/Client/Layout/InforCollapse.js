import { Dropdown } from "antd";
import { BellOutlined, MessageOutlined, UserOutlined, DownOutlined, LogoutOutlined, LockOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import avatar from "../../../assets/images/avatar.jpg";
import Logout from "../Logout";


function InforCollapse() {

    const items = [
        {
          label: (
            <Link>Cài đặt thông tin cá nhân</Link>
          ),
          key: '1',
          icon: <EditOutlined />,
        },
        {
          label: 'Nâng cấp tài khoản vip',
          key: '2',
          icon: <UserOutlined />,
        },
        {
          label: 'Đổi mật khẩu',
          key: '3',
          icon: <LockOutlined />,
        },
        {
          label: <Logout/>,
          key: '4',
          icon: <LogoutOutlined />,
          danger: true,
        },
      ];
      

    return (
        <>
            <div className="account">
                <div className="account__item"><BellOutlined /></div>
                <div className="account__item"><MessageOutlined /></div>
                <div className="account__infor">
                    <Dropdown 
                        trigger="click"
                        menu={{items}} 
                        placement="bottomRight" 
                        size="large" 
                        icon={<UserOutlined />}
                        dropdownRender={(menu) => (
                            <div className="account__collapse">
                                <div className="account__collapse-head">
                                    <div className="head-image">
                                        <img src={avatar} alt="avatar" />
                                    </div>
                                    <div className="head-infor">
                                        <div className="name">Thừa Văn An</div>
                                        <div className="item">Mã ứng viên: #8066724</div>
                                        <div className="item">thuavanan628@gmail.com</div>
                                    </div>
                                </div>
                                <div className="account__collapse-menu">
                                    {menu}
                                </div>
                            </div>
                        )}
                    >
                        
                        <div className="account__infor--tag">
                            <div className="image">
                                <img src={avatar} alt="avatar" />
                            </div>
                            <span>Thừa Văn An</span>
                            <div className="icon-right"><DownOutlined/></div>
                        </div>
                    </Dropdown>
                </div>
            </div>
        </>
    )
}
export default InforCollapse;