import Link from "next/link";

const QuickLinks = () => {
  return (
    <section className="bg-white border rounded-lg p-4">
      <h1>Quick Links</h1>
      <div className="p-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <Link href="/">
          <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold min-w-20 mx-1 py-2 px-4 rounded">
            Link One
          </button>
        </Link>
        <Link href="/">
          <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold min-w-20 mx-1 py-2 px-4 rounded">
            Link Two
          </button>
        </Link>
        <Link href="/">
          <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold min-w-20 mx-1 py-2 px-4 rounded">
            Link Three
          </button>
        </Link>
        <Link href="/">
          <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold min-w-20 mx-1 py-2 px-4 rounded">
            Link Four
          </button>
        </Link>
        <Link href="/">
          <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold min-w-20 mx-1 py-2 px-4 rounded">
            Link Five
          </button>
        </Link>
        <Link href="/">
          <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold min-w-20 mx-1 py-2 px-4 rounded">
            Link Six
          </button>
        </Link>
      </div>
    </section>
  );
};

export default QuickLinks;

// className="bg-white flex justify-between w-full border p-4 rounded-lg"
