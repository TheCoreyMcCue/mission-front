import Link from "next/link";

const missionControl = () => {
  return (
    <div className="flex justify-center items-center flex-col h-100">
      <h1>Mission Control</h1>
      <Link href="/">
        <button className="bg-[#FF5F00] hover:bg-[#EB001B] text-white font-bold min-w-20 mx-1 py-2 px-4 rounded">
          Back Home
        </button>
      </Link>
      <Link href="/">
        <button className="bg-[#FF5F00] hover:bg-[#EB001B] text-white font-bold min-w-20 mx-1 py-2 px-4 rounded">
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default missionControl;
