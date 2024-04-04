import { useState } from "react";
import paginationArrow from "../assets/pagination-arrow.svg";

export default function Pagination() {

   const [currentPage , setCurrentPage] = useState(1);

   const totalNumberOfPages = 250;

   function Next() {
     if (currentPage === totalNumberOfPages) return null;
     setCurrentPage(currentPage + 1);
   }


   function Previous() {
     if (currentPage === 1) return null;
     setCurrentPage(currentPage - 1);
   }

   

  return (
    <div className=" flex items-center">
      <ul className=" flex items-center justify-end text-sm">
        <li className=" flex items-center">
          <button
            onClick={Previous}
            className=" outline-0 hover:text-cyan w-8 rotate-180"
          >
            <img className="w-full h-auto" src={paginationArrow} alt="left" />
          </button>
        </li>
        {currentPage + 1 === totalNumberOfPages ||
        currentPage === totalNumberOfPages ? (
          <li>
            <button className=" outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center text-lg">
              ...
            </button>
          </li>
        ) : null}
        {currentPage - 1 !== 0 ? (
          <li>
            <button
              onClick={Previous}
              className=" outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-100 mx-1.5"
            >
              {currentPage - 1}
            </button>
          </li>
        ) : null}
        <li>
          <button
            disabled
            className=" outline-0  rounded-full w-8 h-8 flex items-center justify-center bg-cyan text-gray-300 mx-1.5"
          >
            {currentPage}
          </button>
        </li>
        {currentPage + 1 !== totalNumberOfPages &&
        currentPage !== totalNumberOfPages ? (
          <li>
            <button
              onClick={Next}
              className=" outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-100 mx-1.5"
            >
              {currentPage + 1}
            </button>
          </li>
        ) : null}
        {currentPage + 1 !== totalNumberOfPages &&
        currentPage !== totalNumberOfPages ? (
          <li>
            <button className=" outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center text-lg">
              ...
            </button>
          </li>
        ) : null}
        {currentPage !== totalNumberOfPages ? (
          <li>
            <button
              onClick={() => setCurrentPage(totalNumberOfPages)}
              className=" outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-100 mx-1.5"
            >
              {totalNumberOfPages}
            </button>
          </li>
        ) : null}
        <li>
          <button onClick={Next} className=" outline-0 hover:text-cyan w-8 ">
            <img className="w-full h-auto" src={paginationArrow} alt="right" />
          </button>
        </li>
      </ul>
    </div>
  );
}
