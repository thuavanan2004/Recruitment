import { Layout } from "antd";
import "./LayoutAdmin.scss";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import LayoutSider from "./LayoutSider";
import LayoutHeader from "./LayoutHeader";
const { Content } = Layout;


function LayoutAdmin() {
    
    const [collapsed, setCollapsed] = useState(false);

    // Hàm callback để nhận giá trị `collapsed` từ component con
    const handleCollapseChange = (collapsedValue) => {
        setCollapsed(!collapsedValue);
    };
    return (
        
        <Layout className="layout-default">
            <LayoutHeader onClick={handleCollapseChange} />
            <Layout>
                <LayoutSider collapsed={collapsed} />
                <Content className="content"> <Outlet/> </Content>
            </Layout>
        </Layout>
    )
}

export default LayoutAdmin;