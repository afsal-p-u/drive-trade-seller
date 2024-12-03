import { CiFilter } from "react-icons/ci";
import { vehicleTableHead, vehicleTableItemsTemp } from "../utils/vehicles";

const Vehicles = () => {
    return (
        <div className="basis-4/5 bg-slate-100 w-full min-h-[90vh] text-black pl-5 pr-14 py-5">
            <div className="flex items-center justify-between pb-5 border-b-[1px]">
                <h2 className="font-medium">Vehicles</h2>

                <div className="flex items-center gap-5">
                    <div className="flex gap-2 items-center px-2 py-1 border-[1px] border-blue-500 rounded-md
                    cursor-pointer"
                    >
                        <p className="text-sm font-medium text-blue-500">Sort By</p>
                        <CiFilter className="text-blue-500" />
                    </div>

                    <div className="px-2 py-1 rounded-md bg-blue-500 cursor-pointer border-[1px] border-blue-500">
                        <p className="text-sm text-white font-medium">Sell Vehicle</p>
                    </div>
                </div>
            </div>

            <div className="w-full mt-5">
                <div className="py-2 px-5 text-sm mt-2 flex gap-2">
                    {vehicleTableHead?.map((item, i) => (
                        <div className="w-[100px]" key={i}>
                            <p>{item?.name}</p>
                        </div>
                    ))}
                </div>

                {vehicleTableItemsTemp?.map((item, i) => (
                    <div className="px-5 py-3 text-sm flex gap-2 bg-white rounded-md mt-2" key={i}>
                        {/* <div className="w-[100px]">
                                <img src="" alt="" />
                            </div> */}
                        <div className="w-[100px]">
                            <p>{item?.model}</p>
                        </div>
                        <div className="w-[100px]">
                            <p>{item?.year}</p>
                        </div>
                        <div className="w-[100px]">
                            <p>{item?.transmission}</p>
                        </div>
                        <div className="w-[100px]">
                            <p>{item?.fuel}</p>
                        </div>
                        <div className="w-[100px]">
                            <p>{item?.milage}</p>
                        </div>
                        <div className="w-[100px]">
                            <p>{item?.color}</p>
                        </div>
                        <div className="w-[100px]">
                        
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Vehicles;