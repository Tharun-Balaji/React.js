import React from "react";
import Pagination from "./Pagination";
import { useState, useEffect } from "react"; 
import MovieCard from "./Moviecard";
import axios from "axios";

function TrendingMovies(
    {
        Page_no,
        Set_page_no,
        Handle_Right_Arrow_Btn,
        Handle_Left_Arrow_Btn,
        Watch_list,
        Set_watch_list,
        Handle_Add_to_Watch_list,
        Handle_Remove_from_Watch_list
    }
){
    // const [page_no, Set_page_no] = useState(1);
    const [Trending_movies, Set_Trending_movies] = useState([]);


    useEffect ( function() {
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=3ab3327354bb3dba18cfa4002b6f2885&page=${Page_no}`)
        .then(function (response) {
            Set_Trending_movies(response.data.results);
        })
        .catch(function(err) {
            console.log(err);
       } )
    }, [Page_no] );


    if (Trending_movies.length === 0) {
        return(
            <h1> Loading... </h1>
        );
    };
    return (
        <>
            <div className='text-center text-2xl font-bold m-4'>Trending Movies</div>
            <div className='mx-2 flex flex-wrap justify-around gap-4'>
                {
                    Trending_movies.map((movieObj) => {
                        return <MovieCard
                            movie_Obj = {movieObj}
                            key={movieObj.id}
                            id = {movieObj.id}
                            title={movieObj.title}
                            poster_path={movieObj.poster_path}
                            Handle_Add_to_Watch_list={Handle_Add_to_Watch_list}
                            Handle_Remove_from_Watch_list = {Handle_Remove_from_Watch_list}
                            Watch_list={Watch_list}
                        />
                    })
                }
            </div>
            <Pagination
                Page_no = {Page_no}
                Handle_Left_Arrow_Btn = {Handle_Left_Arrow_Btn}
                Handle_Right_Arrow_Btn = {Handle_Right_Arrow_Btn}
             />
        </>
    );
};

export default TrendingMovies;