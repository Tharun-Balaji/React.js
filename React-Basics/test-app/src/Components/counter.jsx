import { useState } from "react";


export default function Counter(){
    const [count, setCount] = useState(0);
    const [increment, Set_Increment_Or_Decrement_Count] = useState(1);
    

    function Handel_increment_Or_Decrement_Input(e){
        Set_Increment_Or_Decrement_Count(Number(e.target.value));
    };
    function Handle_plus_Button(){
        setCount(count + increment);
    };
    function Handle_minus_Button(){
        if (count > 0) setCount(count - increment);
        if (count < 0) setCount(0);
    };
    function Handle_Reset_Button(){
        setCount(0);
        Set_Increment_Or_Decrement_Count(1);
        document.querySelector("input[type=number]").value = "";
    };

    return (
        <div>
            <h1> Counter </h1>
            <h2> Count: {count} </h2>
            <label>
                increment/Decrement by 
                <input
                    type="number"
                    // value={increment}
                    onChange={Handel_increment_Or_Decrement_Input}
                />
            </label>
            <br/>
            <div>
                <button onClick={Handle_plus_Button} >+</button>
                <button onClick={Handle_minus_Button}>-</button>
                <button onClick={Handle_Reset_Button}>Reset</button>
            </div>
        </div>
    );
}