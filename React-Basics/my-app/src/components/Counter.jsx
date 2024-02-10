
import { useState } from "react";


function Counter() {

    let [count, setCount] = useState(0);
    function handlePlusBtn() {
        console.log("Plus button clicked");
        // count++;
        setCount(++count);
    };

    function handleMinusBtn() {
        console.log("Minus button clicked");
        setCount(--count);
    };

    return (
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={handlePlusBtn} >+</button>
            <button onClick={handleMinusBtn} >-</button>
        </div>
    );
};

export default Counter;