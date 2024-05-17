import { CiCircleList } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { PiEnvelopeOpenLight } from "react-icons/pi";

function Navbar() {
  return (
    <div className="grid grid-cols-5">
      <div className="flex items-center p-1 font-normal lg:col-span-1 "></div>

      <div className="col-span-5 flex items-center justify-between p-1 lg:col-span-4">
        <div className="flex items-center gap-5 p-1 text-sm">
          <div className=" flex items-center gap-3 border-r border-gray-600">
            <IoIosNotificationsOutline className="h-6 w-6 cursor-pointer hover:text-gray-100" />
            <CiCircleList className="h-6 w-6 cursor-pointer hover:text-gray-100" />
            <PiEnvelopeOpenLight className="mr-4 h-6 w-6 cursor-pointer hover:text-gray-100" />
          </div>
          <div className="border-r border-gray-600">
            <IoMoonOutline className="mr-4 h-6 w-6 cursor-pointer  hover:text-gray-100" />
          </div>
          <div>
            <img
              src="/public/img/unnamed.jpg"
              className="mr-4 h-10 w-10 cursor-pointer rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
