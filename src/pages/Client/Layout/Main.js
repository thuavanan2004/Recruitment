import { Outlet } from "react-router-dom";

function Main() {
    return (
        <>
            <main className="layout-default__main">
                <Outlet/>
            </main>
        </>
    )
}

export default Main;