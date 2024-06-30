import { Link } from "react-router-dom";
// import { IoCarSportSharp } from "react-icons/io5";
import logo2 from "../assets/logo2.png";
import Clock from "./Clock";

const Navbar = () => {
  return (
    <div>
      <div className="bg-slate-600 sticky top-0 z-40 py-5">
        <div className="w-11/12 md:w-4/5 m-auto flex justify-between items-center">
          <div className="hover:bg-black rounded-full ">
            <Link to="/">
              <img src={logo2} className="block" alt="" />
              {/* <h1 className="text-4xl text-green-700 md:text-red-700 lg:text-blue-700 xl:text-purple-600 flex items-end gap-8 font-bold">
            RoyalCars <IoCarSportSharp /> */}
              {/* </h1> */}
            </Link>
          </div>
          <ul className="hidden md:flex space-x-5 text-sm font-semibold">
            <Link to="/">
              <li className="hover:bg-black hover:text-white border rounded-full border-none text-white ">
                Home
              </li>
            </Link>
            <li className="hover:bg-black hover:text-white border rounded-full border-none text-white">
              Cars
            </li>

            <li className="hover:bg-black hover:text-white border rounded-full border-none text-white">
              Help
            </li>
          </ul>
          <div className="flex items-center space-x-5">
            <Clock />
            {/* <button className="px-5 py-2 text-indigo-600 font-semibold hover:bg-green-400 hover:text-white rounded-full">
              Register
            </button>
            <button className="px-5 py-2 border border-indigo-600 bg-blue-700 rounded-full text-white font-semibold hover:bg-blue-400">
              Log in
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
