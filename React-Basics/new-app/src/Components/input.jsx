
import { useState } from "react";

export default function Input(){

    const [text, Set_text] = useState([]);

    let Make_network_call = (e) => debounce( (e) => Handle_change(e),1000);

    function debounce(func, delay) {
        console.log(func);
        let timer;
        return function(func,delay){
            clearTimeout(timer);
            timer = setTimeout(func,delay);
        }
    };

    function Handle_change(e){
        const str = e.target.value;
        Set_text([...text,str]);
        // Make_network_call(cb,1000);
    }

    return (
        <>
            <input 
                type="text"
                value={text[text.length - 1] ? text[text.length - 1] : ""}
                onChange={ (e) => Make_network_call(e)}
            />
            {
                text.map(
                    function(item,index){
                        return (
                            <div
                             key={index}
                            >{item}</div>
                        )
                    }
                )
            }
        </>
    );
};