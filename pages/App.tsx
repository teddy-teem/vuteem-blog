import Home from "./Home";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

// const A = dynamic(() => import("../component/A"), { ssr: false });
export default function Application() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-center fixed top-0 bg-red-900 w-screen py-2 text-white font-bold z-50">
        {!menuOpen && (
          <div className="w-1/3 md:hidden ml-2 hover:cursor-pointer">
            <MenuIcon
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            />
          </div>
        )}
        {menuOpen && (
          <div className="w-1/3 md:hidden ml-2 hover:cursor-pointer">
            <CloseIcon onClick={() => {
                setMenuOpen(!menuOpen);
              }} />
          </div>
        )}
        <div className="w-2/3 md:w-full md:flex md:justify-center">
          ABCD EFGH IJKL MNOP QRST UVWX YZ
        </div>
      </div>
      <div className="flex m-2 justify-center">
        <div className="hidden md:flex">
          <LeftSide />
        </div>
        {menuOpen && (
          <div className="h-screen w-[25%] bg-white shadow-2xl shadow-gray-300">
            <LeftSide />
          </div>
        )}
        <div id="#" className=" w-full md:w-[65%] snap-y snap-mandatory  overflow-y-auto">
          <div id="" className="snap-start w-full  h-screen  py-[5vh]">
            <Home />
          </div>
        </div>
        <RightSide />
      </div>
    </div>
  );
}
