import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { AiFillApi } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div
        style={{ background: "white" }}
        className="fixed w-20 h-screen p-4 border-1-[1px] flex flex-col justify-between"
      >
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-[#FF5F00] text-white p-3 rounded-lg inline-block mb-[-0.75em]">
              <RxSketchLogo size={25} color="white" />
            </div>
          </Link>
          <span className="border-b-[0.5px] border-grey-100 w-full p-2 mb-[5px]"></span>
          <Link href="/missioncontrol">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg inline-block">
              <RxDashboard size={25} color="black" />
            </div>
          </Link>
          <Link href="#">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg inline-block">
              <RxPerson size={25} color="black" />
            </div>
          </Link>
          <Link href="/products">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg inline-block">
              <AiFillApi size={25} color="black" />
            </div>
          </Link>
          <Link href="#">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-lg inline-block">
              <FiSettings size={25} color="black" />
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
