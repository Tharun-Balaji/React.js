
import { Link } from "react-router-dom";


function NavBar(){
    return(
        <div className="flex py-2">
            <img
             className="h-5 mx-3"
             src="data:image/png;base64,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" 
             alt="Movie-Icon"
            />
            <Link
                to="/"
                className="font-bold text-sky-500 mx-2"
            >Movies</Link>
            <Link
                to = "./WatchList"
                className="font-bold text-sky-500 mx-2"
            >WatchList</Link>
        </div>
    );
};



export default NavBar;