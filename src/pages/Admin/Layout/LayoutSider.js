import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, BarsOutlined, FileDoneOutlined, DashboardOutlined } from '@ant-design/icons';
const { Sider } = Layout;


function LayoutSider(props) {
    const {collapsed} = props;
    const items = [
        { 
            key: "menu-1",
            label: <Link to="book-room" > Tổng quan </Link>,
            icon: <DashboardOutlined />,
        },
        {   
            key: "menu-2",
            label: <Link to="book-room" > Thông tin công ty </Link>,
            icon: <UserOutlined />,
        },
        { 
            key: "menu-5",
            label: <Link to="book-room" > Quản lý việc làm </Link>,
            icon: <BarsOutlined />
        },
        { 
            key: "menu-6",
            label: <Link to="create-room" > Quản lý CV </Link>,
            icon: <FileDoneOutlined />
        }
    
        ]

    return (
        <>
            <Sider className="sider" collapsed={collapsed} width={280} theme="light">
                <Menu items={items} mode="inline" defaultOpenKeys={["menu-1"]} defaultSelectedKeys={['2']} multiple={true} />
            </Sider>
        </>
    )
}

export default LayoutSider;