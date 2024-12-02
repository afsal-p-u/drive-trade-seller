import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="w-full h-[10vh] px-[100px] flex items-center justify-between">
      <h2>DriveTrade</h2>

      <div className="flex items-center gap-2 bg-gray-100 px-5 py-1 rounded-md">
        <CiSearch className="cursor-pointer" />
        <div className="">
          <input
            type="search"
            name=""
            id=""
            className="border-nne outline-none bg-transparent text-sm"
            placeholder="Search here"
          />
        </div>

        <div className=""></div>
      </div>
    </div>
  );
};

export default Navbar;
