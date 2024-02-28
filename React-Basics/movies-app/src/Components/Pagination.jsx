

// import React from "react";
// import { useState } from "react";



function Pagination(
  {
    Page_no,
    Handle_Left_Arrow_Btn,
    Handle_Right_Arrow_Btn
  }){

  
    return (
        <div className='text-2xl flex gap-8 bg-slate-400 m-2 p-4 justify-center	'>
          <div className='cursor-pointer'>
            <i 
              className="fa-solid fa-arrow-left"
              onClick={Handle_Left_Arrow_Btn}
            ></i>
          </div>
          <div className='font-bold'>
            {Page_no}
          </div>
          <div className='cursor-pointer'>
            <i
             className="fa-solid fa-arrow-right"
             onClick={Handle_Right_Arrow_Btn}
            ></i>
          </div>
        </div>
      )
};

export default Pagination;