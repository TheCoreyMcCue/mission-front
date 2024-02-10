import React from "react";
import Link from "next/link";

const SalesDashboard = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div>
        <h1>Sales Dashboard</h1>
        <Link href="/">
          <button className="bg-[#FF5F00] hover:bg-[#EB001B] text-white font-bold min-w-20 mx-1 py-2 px-4 rounded">
            Back Home
          </button>
        </Link>
      </div>
      <div>
        <h2>request SE Flow</h2>
      </div>
    </div>
  );
};

export default SalesDashboard;
