
import { useNavigate } from "react-router";


export default function Add(){
    const Navigate = useNavigate();

    return (
        <>
        <button 
        className="fixed right-3 bottom-3 text-xl bg-green-500 px-1 py-1 rounded-lg shadow-sm"
            onClick={ () => Navigate("/form")}
        >
            Add Recipe
        </button>
        </>
        
        
    );
}