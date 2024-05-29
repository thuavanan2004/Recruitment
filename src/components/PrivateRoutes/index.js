import { Outlet } from "react-router-dom";

function PrivateRoutes(){
    return (
        <>
            <Outlet/>
        </>
    )
}

export default PrivateRoutes;