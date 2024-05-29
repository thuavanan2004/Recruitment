import { Form, Input, Button } from "antd";
import { MailOutlined,
    SafetyCertificateOutlined 
} from '@ant-design/icons';
import { login } from "../../../services/loginService";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../../helpers/cookie";
import { useDispatch } from "react-redux";

import "./login.css";
import { checkLogin } from "../../../actions/login";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit= async (value) => {      
        const response = await login(value.email, value.password);
        if(response.length > 0){
            const name = response[0].name;
            const email = response[0].email;
            const token = response[0].token;
            setCookie("email", email, 1);
            setCookie("token", token, 1);
            setCookie("name", name, 1);
            dispatch(checkLogin(true));
        }
        
        if(response.length > 0){
            alert("Đăng nhập thành công");
            navigate("/");
        }else{
            alert("Đăng nhập không thành công");
        }
    }
    return (
        <>
           <div className="login" >
                <h2>Trang đăng nhập</h2>
                <Form layout="vertical" onFinish={handleSubmit}>
                    <Form.Item
                        label="Email"
                        name="email"
                    >
                        <Input prefix={<MailOutlined />} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                    >
                        <Input type="password" prefix={<SafetyCertificateOutlined />}/>
                    </Form.Item>

                    <Form.Item>
                        <Button  htmlType="submit">
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )   
}

export default Login;