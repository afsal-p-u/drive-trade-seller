import { TbPhone } from 'react-icons/tb';
import { SlLock } from 'react-icons/sl';
import { TbBrandFacebookFilled } from 'react-icons/tb';
import { FaInstagram } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';

const ForgotPassword2 = () => {
  return (
    <div className="flex w-full h-[100vh]">
      <div className="bg-blue-500 basis-3/5 px-10 py-3 flex justify-center flex-col">
        <h1 className="text-white font-bold text-3xl">DriveTrade</h1>
        <p className="text-gray-100 font-medium mt-2">
          Sell Your Car Quickly and Easily - Get Paid Fast!
        </p>
      </div>

      <div className="flex items-center justify-center basis-2/5 flex flex-col">
        <h3 className="text-black text-2xl font-bold">Forgot Password</h3>

        <div className="mt-5 flex flex-col gap-4">
          <div className="border-[1px] border-gray-300 rounded-md w-[300px] flex items-center px-2 py-2 gap-2">
            <SlLock className="text-gray-400" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter code"
              className="text-sm h-full border-none outline-none w-full"
            />
          </div>

          <button className="py-2 w-full bg-blue-500 text-sm font-medium rounded-md text-white">
            Submit
          </button>

          <div className="flex items-center justify-center gap-3">
            <div className="border-[1px] rounded-full p-1 cursor-pointer">
              <TbBrandFacebookFilled />
            </div>
            <div className="border-[1px] rounded-full p-1 cursor-pointer">
              <FaInstagram />
            </div>
            <div className="border-[1px] rounded-full p-1 cursor-pointer">
              <FaXTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword2;
