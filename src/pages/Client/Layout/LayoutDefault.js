import { useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function LayoutDefault(){
    const isLogin = useSelector(state => state.loginReducer);
    console.log(isLogin);
    return (
        <>
            <div className="layout-default">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </>
    )
}

export default LayoutDefault;