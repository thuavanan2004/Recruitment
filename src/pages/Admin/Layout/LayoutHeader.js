import logo from "../../../assets/images/logo.png";
import logoFold from "../../../assets/images/logo-fold.png";
import {MenuUnfoldOutlined, SearchOutlined } from '@ant-design/icons';
import Notify from "../Notify";
import { useState } from "react";


function LayoutHeader(props) {

    const [collapsed, setCollapsed] = useState(false);
    const handleClick = () => {
        setCollapsed(!collapsed);
        props.onClick(collapsed);
    };

    return (
        <>
            <header className="header"> 
                
                {collapsed ?  (
                    <div className="header__logo-fold"><img src={logoFold} alt="logo-fold"/></div>
                    ) : (
                        <div className="header__logo"> <img src={logo} alt="logo"/></div>
                    )}
                <div className="header__nav">
                    <div className="header__nav-left">
                        <div className="header__nav-left--collapsed"><MenuUnfoldOutlined onClick={handleClick}/> </div>
                        <div className="header__nav-left--search"><SearchOutlined />  </div>
                    </div>
                    <div className="header__nav-notify"><Notify/></div>
                </div>

            </header>
        </>
    )
}

export default LayoutHeader;