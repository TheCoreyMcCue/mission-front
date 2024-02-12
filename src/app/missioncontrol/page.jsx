import Link from "next/link";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TopCards from "../components/TopCards";

const missionControl = () => {
  return (
    <Sidebar>
      <section className="bg-gray-100 h-screen">
        <Header />
        <TopCards />
        {/* <div className="flex justify-center items-center flex-col h-100"> */}
        <div className="flex justify-center items-center flex-col h-100">
          <h1>Mission Control</h1>
          <Link href="/">
            <button className="bg-[#FF5F00] hover:bg-[#EB001B] text-white font-bold min-w-20 mx-1 py-2 px-4 rounded">
              Back Home
            </button>
          </Link>
        </div>
      </section>
    </Sidebar>
  );
};

export default missionControl;
