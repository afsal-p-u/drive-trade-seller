import { CiFilter } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Vehicle = () => {
    return (
        <div className="basis-4/5 bg-slate-100 w-full min-h-[90vh] text-black pl-5 pr-14 py-5">
            <div className="flex items-center justify-between pb-5 ">
                <h2 className="font-medium">Vehicle</h2>

                <div className="flex items-center gap-5">
                    <div className="flex gap-2 items-center px-2 py-1 border-[1px] border-red-500 rounded-md
                    cursor-pointer"
                    >
                        <p className="text-sm font-medium text-red-500">Remove</p>
                        <MdOutlineDeleteOutline className="text-red-500" />
                    </div>

                    <div className="px-2 py-1 rounded-md bg-blue-500 cursor-pointer border-[1px] border-blue-500">
                        <p className="text-sm text-white font-medium">Edit Vehicle</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-10">
                <div className="basis-3/4">
                    <div className="bg-white px-5 py-5 mt-2 rounded-md shadow-sm">
                        <p className="font-medium text-sm">Media</p>

                        <p className="text-xs text-gray-500 mt-2 mb-1">Photo</p>
                        <div className="w-full h-[30vh] border-[1px] rounded-md"></div>
                    </div>

                    <div className="bg-white px-5 py-5 mt-2 rounded-md shadow-sm">
                        <p className="font-medium text-sm">General Information</p>

                        <p className="text-xs text-gray-500 mt-2 mb-1">Model Name</p>
                        <input 
                            type="text" name="" id="" placeholder="Model name" 
                            className="px-5 py-2 text-sm mt-1 border-[1px] border-gray-300 outline-none
                            rounded-md w-full" 
                        />

                        <p className="text-xs text-gray-500 mt-2 mb-1 mt-2">
                            Description
                        </p>
                        <textarea 
                            placeholder="Description" 
                            className="px-5 py-2 text-sm mt-1 border-[1px] border-gray-300 outline-none
                            rounded-md w-full" 
                        />
                    </div>

                    <div className="bg-white px-5 py-5 mt-2 rounded-md shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col gap-1">
                                <p className="text-xs text-gray-500">Body</p>
                                <input 
                                    type="text" name="" id="" placeholder="Body" 
                                    className="px-5 py-2 text-sm mt-1 border-[1px] border-gray-300 outline-none
                                    rounded-md w-full" 
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-xs text-gray-500">Milage</p>
                                <input 
                                    type="text" name="" id="" placeholder="Milage" 
                                    className="px-5 py-2 text-sm mt-1 border-[1px] border-gray-300 outline-none
                                    rounded-md w-full" 
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-xs text-gray-500">Fuel Type</p>
                                <input 
                                    type="text" name="" id="" placeholder="Fuel type" 
                                    className="px-5 py-2 text-sm mt-1 border-[1px] border-gray-300 outline-none
                                    rounded-md w-full" 
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-xs text-gray-500">Transmission</p>
                                <input 
                                    type="text" name="" id="" placeholder="Transmission" 
                                    className="px-5 py-2 text-sm mt-1 border-[1px] border-gray-300 outline-none
                                    rounded-md w-full" 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white px-5 py-5 mt-2 rounded-md shadow-sm">
                        <div className="grid grid-cols-3 gap-2">
                            <div className="flex flex-col gap-1">
                                <p className="text-xs text-gray-500">Year</p>
                                <input 
                                    type="text" name="" id="" placeholder="Year" 
                                    className="px-5 py-2 text-sm mt-1 border-[1px] border-gray-300 outline-none
                                    rounded-md w-full" 
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-xs text-gray-500">KM Driven</p>
                                <input 
                                    type="text" name="" id="" placeholder="Km" 
                                    className="px-5 py-2 text-sm mt-1 border-[1px] border-gray-300 outline-none
                                    rounded-md w-full" 
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-xs text-gray-500">Color</p>
                                <input 
                                    type="text" name="" id="" placeholder="Color" 
                                    className="px-5 py-2 text-sm mt-1 border-[1px] border-gray-300 outline-none
                                    rounded-md w-full" 
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="basis-1/4">
                    <div className="px-5 py-5 bg-white rounded-md mt-2 shadow-sm">
                        <p className="text-sm font-medium">Features</p>

                        <div className="flex flex-col gap-2 mt-2">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="" id="" />
                                <p className="text-xs">Anti-lock Braking</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="" id="" />
                                <p className="text-xs">Brake Assist</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="" id="" />
                                <p className="text-xs">Child Safety Locks</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="" id="" />
                                <p className="text-xs">Drive Air Bag</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="" id="" />
                                <p className="text-xs">Anti-lock braking</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="" id="" />
                                <p className="text-xs">Anti-lock braking</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="" id="" />
                                <p className="text-xs">Anti-lock braking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 border-t-[1px] border-gray-200 py-5 px-5 flex items-center justify-center">
                <p className="text-xs text-gray-500">Copyright @ 2024 all rights powered by DriveTrade</p>
            </div>
        </div>
    )
}

export default Vehicle;