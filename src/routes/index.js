import LayoutDefault from "../pages/Client/Layout/LayoutDefault";
import Home from "../pages/Client/SearchWork";
import Login from "../pages/Client/Login";
import Logout from "../pages/Client/Logout";
import PrivateRoutes from "../components/PrivateRoutes";
import LayoutAdmin from "../pages/Admin/Layout/LayoutAdmin";
import Dashboard from "../pages/Admin/Dashboard";
import Company from "../pages/Client/Company";
import DetailCompany from "../pages/Client/DetailCompany";
import Apply from "../pages/Client/Apply";
import Blog from "../pages/Client/Blog";
import LoginAdmin from "../pages/Admin/Login";
import RegisterAdmin from "../pages/Admin/Register";

export const routes = [
    {
        path: "/",
        element: <LayoutDefault/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/logout",
                element: <Logout/>
            },
            {
                path: "/company",
                element: <Company/>,
            },
            {
                path: "/detail/:id",
                element: <DetailCompany/>
            },
            {
                path: "/apply/:id",
                element: <Apply/>
            },
            {
                path: "/blog",
                element: <Blog/>
            }
           
        ]
    },
    {
        path: "/admin",
        element: <LayoutAdmin/>,
        children:[ 
            {
                path: "login",
                element: <LoginAdmin/>
            },
            {
                path: "register",
                element: <RegisterAdmin/>
            },
            {
        
                element: <PrivateRoutes/>,
                children: [
                        {
                            path: "dashboard",
                            element: <Dashboard/>
                        }
                ]
            }
        ]
    },
   
]