
import { useState ,useEffect } from "react";

const GENRE_NAME = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };



export default function WatchList(
    {
        Watch_list,
        Set_watch_list,
        Handle_Remove_from_Watch_list
    }
) {
 
    const [Genre_list, Set_Genre_list] = useState(["All Genres"]);
    const [Search,Set_search] = useState("");
    const [movie_filter, Set_movie_filter] = useState([]);

    // function Add_to_movie_filter(movie_obj){
    //     const temp = [...movie_filter,movie_obj.];
    //     Set_movie_filter(["All Genres"])
    // }

    function Handle_click(e){
        // console.log(e.target.innerHTML);
        const key = e.target.innerHTML;
        if ( key ==="All Genres" ){
           Set_movie_filter([]);
           return;
        }
        if ( movie_filter.includes(key) ){
            Set_movie_filter( 
                movie_filter.filter(function(item){
                    return item!== key;
                })
             )
        }else{
            Set_movie_filter(
                [...movie_filter,key]
            );
        }
    }

    function Handle_Change(e){
        Set_search(e.target.value);
    }

    function Handle_Increase(){
        Set_watch_list(Watch_list.toSorted( (a,b) => a.vote_average - b.vote_average ));
    }

    function Handle_Decrease(){
        Set_watch_list(Watch_list.toSorted( (a,b) => b.vote_average - a.vote_average ));
    }

    useEffect (
        function () {
            let temp = Watch_list.map( 
                function(movieObj){
                    return GENRE_NAME[movieObj.genre_ids[0]]; 
                }
            )
            const set = new Set(temp);
            Set_Genre_list(["All Genres", ...set]);
        },[Watch_list]
    );

    return (
        <>
            <div className=" flex gap-8 flex-wrap justify-center">
                
                {
                    Genre_list.map(function (Genres,ind) {
                        return (
                            (movie_filter.includes(Genres) || Genres === "All Genres") ?
                            <div
                                className="h-[3rem] w-[15rem] bg-blue-400
                                rounded-xl text-white flex justify-center items-center 
                                font-bold hover:cursor-pointer"
                                key={Genres}
                                onClick={Handle_click}
                            >{Genres}</div>
                            :
                                <div
                                    className="h-[3rem] w-[15rem] bg-zinc-400
                                    rounded-xl text-white flex justify-center items-center 
                                    font-bold hover:cursor-pointer"
                                    key = {Genres}
                                    onClick={Handle_click}
                                >{Genres}</div> 
                        )
                    })
                }
                {/* <div
                    className="h-[3rem] w-[15rem] bg-zinc-400
                 rounded-xl text-white flex justify-center items-center 
                 font-bold "
                >All Genres</div> */}


            </div>
           

            <div className="flex justify-center my-4">
                <input
                    className="h-[3rem] w-[18rem] bg-gray-200
                 outline-none px-4 text-lg "
                    placeholder="Search Movies"
                    type="text"
                    onChange={Handle_Change}
                    value={Search}
                    />
            </div>

            <div className="m-7 overflow-hidden rounded-lg border shadow-md	">
                <table className="p-4 w-full text-center">
                    <thead className=" h-[3rem] bg-gray-50 border-b-2">
                        <tr>
                            <th>Name</th>
                            <th className="flex">
                                <div
                                 className="p-2  hover:cursor-pointer "
                                 onClick={Handle_Increase}
                                ><i className="fa-solid fa-up-long"></i></div>
                                <div className="p-2"> Ratings</div>
                                <div
                                 className="p-2 hover:cursor-pointer "
                                 onClick={Handle_Decrease}
                                ><i className="fa-solid fa-down-long"></i></div></th>
                            <th>Popularity</th>
                            <th>Genre</th>
                            <th className=" text-red-500">Delete</th>
                        </tr>
                    </thead>
                    <tbody >

                        {
                            Watch_list
                                .filter(
                                    function(movie_Obj){
                                        if (movie_filter.length <= 0) return true;
                                        return movie_filter.includes(GENRE_NAME[movie_Obj.genre_ids[0]]);
                                    }
                                )
                                .filter((movieObj) => {
                                    return movieObj.title.toLowerCase().includes(Search.toLowerCase());

                                })
                                .map((movieObj) => {
                                    return <tr className=" border-b-2"
                                        key={movieObj.id}
                                    >
                                        <td className="flex items-center mx-4 py-4"> <img className="h-[6rem] w-[10rem]"
                                            src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} alt="" />
                                            <div className="mx-4">{movieObj.title}</div>
                                        </td>
                                        <td >{movieObj.vote_average}</td>
                                        <td>{movieObj.popularity}</td>
                                        <td>{GENRE_NAME[movieObj.genre_ids[0]]}</td>
                                        <td
                                            className=" text-red-500 hover:cursor-pointer"
                                            onClick={
                                                function () {
                                                    Handle_Remove_from_Watch_list(movieObj)
                                                }
                                            }
                                        ><i className="fa-solid fa-trash"></i></td>
                                    </tr>
                                })
                        }

                    </tbody>
                </table>
            </div>
        </>


    )
}