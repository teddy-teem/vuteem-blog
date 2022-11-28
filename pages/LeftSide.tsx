import { useState } from "react";

export default function Home() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="flex flex-col justify-between items-center w-[12%] fixed top-[5hv] left-0 h-full shadow-md shadow-red-700">
      <div className="flex flex-col justify-start w-full h-[50%] mt-[5vh]">
        <div className="text-rose-700 tracking-widest hover:cursor-pointer hover:shadow-xl w-full text-center mt-2 ease-in-out duration-300">
          Home
        </div>
        <div className="text-rose-700 tracking-widest hover:cursor-pointer hover:shadow-xl w-full text-center mt-2 ease-in-out duration-300">
          About
        </div>
        <div className="text-rose-700 tracking-widest hover:cursor-pointer hover:shadow-xl w-full text-center mt-2 ease-in-out duration-300">
          Contact
        </div>
      </div>
    </div>
  );
}
