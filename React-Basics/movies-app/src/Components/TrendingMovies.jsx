import React from "react";
import Pagination from "./Pagination";
import { useState, useEffect } from "react"; 
import MovieCard from "./Moviecard";
import axios from "axios";

function TrendingMovies(){
    const [page_no, Set_page_no] = useState(1);
    const [Trending_movies, Set_Trending_movies] = useState([]);

    function get_Page_no(data) {
        Set_page_no(data);
        // console.log(data);
    }

    useEffect( function(){
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=3ab3327354bb3dba18cfa4002b6f2885')
            .then(function (response) {
                Set_Trending_movies(response.data.results);
            })
            .catch(function(err) {
                 console.log(err);
            } )
    },[] );


    useEffect ( function() {
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=3ab3327354bb3dba18cfa4002b6f2885&page=${page_no}`)
        .then(function (response) {
            Set_Trending_movies(response.data.results);
        })
        .catch(function(err) {
            console.log(err);
       } )
    }, [page_no] );


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
                            key={movieObj.id}
                            title={movieObj.title}
                            poster_path={movieObj.poster_path}
                        />
                    })
                }
            </div>
            <Pagination
                onClick = {get_Page_no} 
             />
        </>
    );
};

export default TrendingMovies;