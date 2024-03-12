
import { useNavigate } from "react-router";
import { FaPlusCircle } from 'react-icons/fa';


export default function Add(){
    const Navigate = useNavigate();

    return (
        <button
        className="fixed right-4 bottom-4 text-5xl text-green-500 bg-white rounded-full shadow-lg p-3 hover:bg-green-500 hover:text-white transition-colors duration-300"
        onClick={() => Navigate("/form")}
      >
        <FaPlusCircle />
      </button>
    );
}