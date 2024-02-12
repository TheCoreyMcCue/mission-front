import React from "react";
import Link from "next/link";

const HomeMain = () => (
  <main className="bg-[#000] flex flex-col text-center">
    <div>
      <h1 className="bg-[#000] text-white text-3xl">Qualification Hub</h1>
    </div>
    <div className="bg-[#000] flex min-h-screen flex-row items-center justify-center">
      <Link href="/missioncontrol">
        <button className="bg-[#FF5F00] hover:bg-[#EB001B] text-white font-bold min-w-20 mx-2 py-2 px-4 rounded">
          <div className="w-60 h-60 rounded overflow-hidden">
            <img
              className="w-full h-40"
              src="https://www.open.edu.au/-/media/blog/2022/10-october/software-developer-vs-engineer_edited.jpg?h=402&iar=0&w=715&rev=22dc593363e74d4285cb4042c8401af0&hash=A719998C2F009EC9F76F63BFCDFBD24A"
              alt="Sunset in the mountains"
            />
            <div className="px-3 py-7">
              <div className="font-bold text-xl text-center mb-2">
                Sales Engineers
              </div>
            </div>
          </div>
        </button>
      </Link>
      <Link href="/sales">
        <button className="bg-[#FF5F00] hover:bg-[#EB001B] text-white font-bold min-w-20 mx-1 py-2 px-4 rounded">
          <div className="w-60 h-60 rounded overflow-hidden">
            <img
              className="w-full h-40"
              src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-center mb-2">
                Account Executives
              </div>
            </div>
          </div>
        </button>
      </Link>
    </div>
  </main>
);

export default HomeMain;
