import { useContext } from "react";
import paginationArrow from "../assets/pagination-arrow.svg";
import { CryptoContext } from "../context/CryptoContext";

export default function Pagination() {

   const {page, setPage, totalPages} = useContext(CryptoContext);

   const totalNumberOfPages = Math.ceil(totalPages/10);

   function Next() {
     if (page === totalNumberOfPages) return null;
     setPage(page + 1);
   }


   function Previous() {
     if (page === 1) return null;
     setPage(page - 1);
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
        {page + 1 === totalNumberOfPages ||
        page === totalNumberOfPages ? (
          <li>
            <button className=" outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center text-lg">
              ...
            </button>
          </li>
        ) : null}
        {page - 1 !== 0 ? (
          <li>
            <button
              onClick={Previous}
              className=" outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-100 mx-1.5"
            >
              {page - 1}
            </button>
          </li>
        ) : null}
        <li>
          <button
            disabled
            className=" outline-0  rounded-full w-8 h-8 flex items-center justify-center bg-cyan text-gray-300 mx-1.5"
          >
            {page}
          </button>
        </li>
        {page + 1 !== totalNumberOfPages &&
        page !== totalNumberOfPages ? (
          <li>
            <button
              onClick={Next}
              className=" outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-100 mx-1.5"
            >
              {page + 1}
            </button>
          </li>
        ) : null}
        {page + 1 !== totalNumberOfPages &&
        page !== totalNumberOfPages ? (
          <li>
            <button className=" outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center text-lg">
              ...
            </button>
          </li>
        ) : null}
        {page !== totalNumberOfPages ? (
          <li>
            <button
              onClick={() => setPage(totalNumberOfPages)}
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
