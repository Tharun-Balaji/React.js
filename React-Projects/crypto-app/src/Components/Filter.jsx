import React, { useContext, useRef } from 'react'
import Search from './Search';
import submitIcon from "../assets/submit-icon.svg";
import { CryptoContext } from '../context/CryptoContext';

export default function Filter() {
  const {setCurrency} = useContext(CryptoContext);
  const currencyRef = useRef(null);

  function handleCurrencySubmit(e){
    e.preventDefault();
    let val = currencyRef.current.value;
    setCurrency(val);
    currencyRef.current.value ="";
  }
  return (
    <div className="w-full h-12 border-2 border-gray-100 rounded-lg flex items-center justify-between relative">
      <Search />
      <div className="flex mr-7">
        <form className=" relative flex items-center font-nunito mr-12" onSubmit={handleCurrencySubmit} >
          <label
            className=" relative flex justify-center items-center mr-2 font-bold"
            htmlFor="currency"
          >
            currency :
          </label>
          <input
            type="text"
            placeholder="usd"
            className=" w-16 rounded bg-gray-200 placeholder:text-gray-100 pl-2 required border border-transparent focus:border-cyan leading-4"
            name="currency"
            ref={currencyRef}
          />
          <button type="submit" className=" ml-1 cursor-pointer">
            <img src={submitIcon} alt="submit" className=" w-full h-auto" />
          </button>
        </form>
      </div>
      <div>Sorting</div>
      Filter
    </div>
  );
}
