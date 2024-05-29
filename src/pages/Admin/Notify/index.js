import { BellOutlined, MailOutlined, UserAddOutlined, WarningOutlined } from "@ant-design/icons"
import { Button, Dropdown } from "antd";
import "./notify.css";

function Notify() {
   
    const items = [
        {
          key: 'a',
          label: 
          <div className="dropdown-item">
                <div className="dropdown-icon"><MailOutlined /></div>
                <div className="dropdown-content">
                    <div className="title">You receiced a new message</div>
                    <div className="time-ago">8 min ago </div>
                </div>
          </div>
        },
        {
          key: 'b',
          label:  
            <div className="dropdown-item">
                <div className="dropdown-icon"><UserAddOutlined /></div>
                <div className="dropdown-content">
                    <div className="title">New user registered</div>
                    <div className="time-ago">7 hours ago </div>
                </div>
            </div>,
        },
        {
          key: '',
          label: 
            <div className="dropdown-item">
                <div className="dropdown-icon"><WarningOutlined /></div>
                <div className="dropdown-content">
                    <div className="title">System Alert</div>
                    <div className="time-ago">8 hours ago </div>
                </div>
            </div>,
          
        },
      ];  
    const hoverRender = (menu) => {
        return (
           <>
                <div className="notify-dropdown">
                    <div className="notify-header">
                        <div className="notify-left">
                            <div className="icon"><BellOutlined /></div>
                            <div className="title"> Notification</div>
                        </div>
                        <div className="notify-content">
                            <Button type="link">View all</Button>
                        </div>
                    </div>
                    <div className="notify-body">
                        {menu}
                    </div>
                </div>
           
           </>
        );
    }
    
    return (
        <>
            <Dropdown 
                placement="bottomLeft"
                menu={{items}}
                dropdownRender={menu => {return hoverRender(menu)}}
                trigger="click"
            >
                <BellOutlined />
            </Dropdown>
        
        </>
    )
}

export default Notify;