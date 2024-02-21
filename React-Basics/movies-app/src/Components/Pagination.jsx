

import React from "react";
import { useState } from "react";



function Pagination(props){

  const [count, setCount] = useState(1);

  function Handle_Right_Arrow_Btn() {
    // console.log("Plus button clicked");
    // count++;
    setCount(previous_count => ++previous_count);
    props.onClick(count + 1);
  };

  function Handle_Left_Arrow_Btn() {
    // console.log("Plus button clicked");
    // count++;
    if ( count >  1 ){
      setCount(previous_count => --previous_count);
      props.onClick(count - 1);
    }
  };
    return (
        <div className='text-2xl flex gap-8 bg-slate-400 m-2 p-4 justify-center	'>
          <div className='cursor-pointer'>
            <i 
              className="fa-solid fa-arrow-left"
              onClick={Handle_Left_Arrow_Btn}
            ></i>
          </div>
          <div className='font-bold'>
            {count}
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