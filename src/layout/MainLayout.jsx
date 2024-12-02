import { Outlet } from "react-router-dom"
import { Navbar, Sidebar } from "../components"

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout