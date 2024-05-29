import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../../../helpers/cookie";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../../actions/login";

function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = () => {
        deleteAllCookies();
        navigate("/login");
        dispatch(checkLogin(false));
    }
   
    
    return (
        <>
            <div onClick={handleClick}>Đăng xuất</div>
        </>
    )
}
export default Logout;