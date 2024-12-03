import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="w-full h-[10vh] px-[100px] flex items-center justify-between shadow-sm">
      <h2 className="font-semibold text-xl">Drive<span className="text-blue-500">Trade</span></h2>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-gray-100 px-5 py-2 rounded-md">
          <CiSearch className="cursor-pointer text-blue-500" />
          <input
            type="search"
            name=""
            id=""
            className="border-nne outline-none bg-transparent text-xs"
            placeholder="Search here"
          />
        </div>

        <div className="w-[30px] h-[30px] rounded-md flex items-center cursor-pointer justify-center 
          bg-gray-100"
        >
          <IoMdNotificationsOutline className="text-yellow-500" />
        </div>

        <div className="flex gap-2 items-center">
          <div className="">
            <img src="" alt="" />
          </div>
          <div className="">
            <h6 className="text-sm font-medium">John Dao</h6>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
