import Link from "next/link";

const Deadlines = () => {
  return (
    <div className="p-4 grid grid-cols-1 bg-white border rounded-lg">
      <h1>Deadlines</h1>
      <ul class="w-full text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg dark:bg-gray-500 dark:border-gray-600 dark:text-white">
        <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <p>15 March</p>
          <p>Fill Out OKR's</p>
        </li>
        <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
          <p>10 February</p>
          <p>Presentation Deck for C&I</p>
        </li>
        <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
          <p>26 March</p>
          <p>Fraud.com Integration Validation</p>
        </li>
        <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
          <p>15 March</p>
          <p>Complete OKR's</p>
        </li>
      </ul>
    </div>
  );
};

export default Deadlines;
