import { TbPhone } from 'react-icons/tb';
import { SlLock } from 'react-icons/sl';
import { TbBrandFacebookFilled } from 'react-icons/tb';
import { FaInstagram } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';

const SignIn = () => {
  return (
    <div className="flex w-full h-[100vh]">
      <div className="bg-blue-500 basis-3/5 px-10 py-3 flex justify-center flex-col">
        <h1 className="text-white font-bold text-3xl">DriveTrade</h1>
        <p className="text-gray-100 font-medium mt-2">
          Sell Your Car Quickly and Easily - Get Paid Fast!
        </p>
      </div>

      <div className="flex items-center justify-center basis-2/5 flex flex-col">
        <h3 className="text-black text-2xl font-bold">SignIn</h3>

        <div className="flex items-baseline mt-1 text-sm text-gray-500">
          <p>
            Don't have an account? <span className="text-blue-500">SignUp</span>
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-4">
          <div className="border-[1px] border-gray-300 rounded-md w-[300px] flex items-center px-2 py-2 gap-2">
            <TbPhone className="text-gray-400" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter phone number"
              className="text-sm h-full border-none outline-none w-full"
            />
          </div>

          <div className="border-[1px] border-gray-300 rounded-md w-[300px] flex items-center px-2 py-2 gap-2">
            <SlLock className="text-gray-400" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter password"
              className="text-sm h-full border-none outline-none w-full"
            />
          </div>

          <div className="flex justify-between">
            <div className="flex gap-2 items-start">
              <input type="checkbox" className="text-xs" name="" id="" />
              <p className="text-xs text-gray-500">Keep me signed in</p>
            </div>

            <p className="text-xs font-medium cursor-pointer text-gray-700">
              Forgot Password?
            </p>
          </div>

          <button className="py-2 w-full bg-blue-500 text-sm font-medium rounded-md text-white">
            SignIn
          </button>

          <div className="">
            <p className="text-gray-500 text-xs text-center">
              By sign up you agree to the{' '}
              <span className="text-black">terms & conditions</span>
            </p>
          </div>

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

export default SignIn;
