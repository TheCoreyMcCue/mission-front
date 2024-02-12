import React from "react";
import Link from "next/link";

const TopCards = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <Link
        href="/opportunities"
        className="bg-white flex justify-between w-full border p-4 rounded-lg"
      >
        <p className="text-2xl font-bold">22</p>
        <p className="text-gray-600">Opportunities</p>
      </Link>
      <Link
        href="/sixtydays"
        className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg"
      >
        <p className="text-2xl font-bold">24</p>
        <p className="text-gray-600">Opps older than 60 days</p>
      </Link>
      <Link
        href="/sixtydays"
        className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg"
      >
        <p className="text-2xl font-bold">7</p>
        <p className="text-gray-600">Opps older than 30 days</p>
      </Link>
    </div>
  );
};

export default TopCards;
