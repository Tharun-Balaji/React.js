import { SearchIcon } from "@heroicons/react/solid"; // Assuming you have Heroicons installed

function SearchBar() {
  return (
    <div className="search-bar flex items-center rounded-md bg-gray-100 shadow-sm px-3 py-2  h-[20vh] justify-center gap-2 ">
      <div >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10    h-[50%]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>{" "}
      </div>
      <input
        type="text"
        className="search-input  focus:outline-none focus:ring-indigo-500 focus:ring-opacity-50 rounded-md pl-2 w-[60%] h-[50%] text-3xl font-bold"
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBar;
