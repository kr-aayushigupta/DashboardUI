// components/Sidebar.js
import { FaChartPie, FaCog, FaUser } from "react-icons/fa";
import { FaBluetooth ,FaClock ,FaItunesNote,FaShoppingCart} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { FiMusic } from "react-icons/fi";
import { FiGift } from "react-icons/fi";
import { FiRepeat } from "react-icons/fi";
import { FiSave } from "react-icons/fi";
import { FiUserCheck } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";
import Container from "@/dashboardcomponents/Container"
const Sidebar = () => {
  return (
   
    <div className=" h-[100%] w-[40%] min-w-10 bg-gradient-to-b from-neutral-600 via-neutral-600 to-neutral-700 text-gray-400 flex flex-col items-center justify-evenly  mx-auto rounded-full shadow-accent-foreground shadow-md">
      {/* <FaChartPie className="text-2xl cursor-pointer hover:text-white" />
      <FaUser className="text-2xl cursor-pointer hover:text-white" />
      <FaCog className="text-2xl cursor-pointer hover:text-white" />
      <FaBluetooth className="text-2xl cursor-pointer hover:text-white" />
      <FaClock className="text-2xl cursor-pointer hover:text-white" />
      <FaItunesNote className="text-2xl cursor-pointer hover:text-white" />
      <FaShoppingCart className="text-2xl cursor-pointer hover:text-white" /> */}
      <FiUserCheck className="lg:text-4xl md:text-3xl sm:text-md  cursor-pointer hover:text-white " />
      <FiSettings className="lg:text-4xl md:text-3xl sm:text-md cursor-pointer hover:text-white" />
      <FiSave className="lg:text-4xl md:text-3xl sm:text-md cursor-pointer hover:text-white" />
      <FiThumbsUp className="lg:text-4xl md:text-3xl sm:text-md cursor-pointer hover:text-white" />
      <FiRepeat className="lg:text-4xl md:text-3xl sm:text-md cursor-pointer hover:text-white" />
      <FiMusic className="lg:text-4xl md:text-3xl sm:text-md cursor-pointer hover:text-white" />
      <FiGift className="lg:text-4xl md:text-3xl sm:text-md cursor-pointer hover:text-white" />
    </div>
 
  );
};

export default Sidebar;