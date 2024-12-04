import { MdAutoGraph } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSignOut } from "react-icons/pi";
import { Link, useLocation, useParams } from "react-router-dom";

const Sidebar = () => {
    const path = useLocation()

    return (
        <div className="w-[300px] h-[90vh] basis-1/5 py-5 pl-10 flex flex-col gap-5 pr-2 shadow-sm">
            <Link to="/">
                <div className={`px-5 py-2 rounded-md cursor-pointer flex items-center gap-3
                ${path?.pathname == "/" && 'bg-blue-500'}`}>
                    <MdAutoGraph className={`${path?.pathname == "/" ? 'text-white' : 'text-black'}`} />
                    <p className={`text-sm font-medium
                    ${path?.pathname == "/" ? 'text-white' : 'text-black'}`}
                    >Dashboard</p>
                </div>
            </Link>
            <Link to="/vehicles">
                <div className={`px-5 py-2 rounded-md cursor-pointer flex items-center gap-3
                    ${path?.pathname == "/vehicles" ? 'bg-blue-500' :
                    path?.pathname == "/vehicle" ? 'bg-blue-500' : ''}`}
                >
                    <IoCarSportOutline className={`text-gray-700
                        ${path?.pathname == "/vehicles" ? 'text-white' : 
                        path?.pathname == "/vehicle" ? 'text-white' : 'text-black'}`} 
                    />
                    <p className={`text-sm font-medium text-gray-700
                        ${path?.pathname == "/vehicles" ? 'text-white' : 
                        path?.pathname == "/vehicle" ? 'text-white' : 'text-black'}`
                    }>Vehicle</p>
                </div>
            </Link> 
            {/* <Link to="/messages">
                <div className="px-5 py-2 rounded-md cursor-pointer flex items-center gap-3">
                    <BiMessageSquareDetail className="text-gray-700" />
                    <p className="text-sm font-medium text-gray-700">Messages</p>
                </div>
            </Link> 
            <Link to="/settings">
                <div className="px-5 py-2 rounded-md cursor-pointer flex items-center gap-3">
                    <IoSettingsOutline className="text-gray-700" />
                    <p className="text-sm font-medium text-gray-700">Settings</p>
                </div>
            </Link>           
            <div className="px-5 py-2 rounded-md cursor-pointer flex items-center gap-3">
                <PiSignOut className="text-gray-700" />
                <p className="text-sm font-medium text-gray-700">SignOut</p>
            </div> */}
        </div>
    )
}

export default Sidebar;