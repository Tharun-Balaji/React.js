import React from "react";
import Pagination from "./Pagination";
import { useState, useEffect } from "react"; 
import MovieCard from "./Moviecard";
import axios from "axios";

function TrendingMovies(){
    // const [page_no, Set_page_no] = useState(1);
    const [Trending_movies, Set_Trending_movies] = useState([]);
    const [count, setCount] = useState(1);
    const [Watch_list, Set_watch_list] = useState([]);

    function Handle_Add_to_Watch_list (id) {
        const new_list = [...Watch_list,id];
        localStorage.setItem("watch_list",JSON.stringify(new_list));
        Set_watch_list(new_list);
    };

    function Handle_Remove_from_Watch_list (id) {
        const new_list = Watch_list.filter( function(movie_id){
            return movie_id !== id;
        } );
        localStorage.setItem("watch_list",JSON.stringify(new_list));
        Set_watch_list(new_list);
    };

  function Handle_Right_Arrow_Btn() {
    // console.log("Plus button clicked");
    // count++;
    setCount(previous_count => ++previous_count);
    // props.onClick(count + 1);
  };

  function Handle_Left_Arrow_Btn() {
    // console.log("Plus button clicked");
    // count++;
    if ( count >  1 ){
      setCount(previous_count => --previous_count);
    //   props.onClick(count - 1);
    }
  };
    // function get_Page_no(data) {
    //     Set_page_no(data);
    //     // console.log(data);
    // }

    useEffect( function(){
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=3ab3327354bb3dba18cfa4002b6f2885')
            .then(function (response) {
                Set_Trending_movies(response.data.results);
            })
            .catch(function(err) {
                 console.log(err);
            } )
        let new_list = JSON.parse(localStorage.getItem("watch_list"));
        Set_watch_list(new_list);
    },[] );


    useEffect ( function() {
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=3ab3327354bb3dba18cfa4002b6f2885&page=${count}`)
        .then(function (response) {
            Set_Trending_movies(response.data.results);
        })
        .catch(function(err) {
            console.log(err);
       } )
    }, [count] );


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
                count = {count}
                Handle_Left_Arrow_Btn = {Handle_Left_Arrow_Btn}
                Handle_Right_Arrow_Btn = {Handle_Right_Arrow_Btn}
             />
        </>
    );
};

export default TrendingMovies;