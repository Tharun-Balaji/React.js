import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";

// function Banner() {

//   const [movieObj, setMovieObj] = useState({});

//   useEffect(function(){
//     axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=3ab3327354bb3dba18cfa4002b6f2885")
//     .then(function (response) {
//       let movies = response.data.results;
//       let RandomMovie = movies[Math.floor(Math.random() * 19)];
//       console.log(RandomMovie);
//       setMovieObj(RandomMovie);
//     })
//     // .catch(function (err) {
//     //   console.log(err);
//     // })
//     // .finally(function () {
//     //   // always executed
//     //   console.log("Success!");
//     // });
//   },[]);

//   if ( movieObj.backdrop_path === undefined){
//     return (
//       <div>
//         <h1>Loading...</h1>
//       </div>
//     )
//   };
//   return (
//     <div className={`flex justify-center items-end h-[70vh] bg-[url("https://image.tmdb.org/t/p/original${movieObj.backdrop_path}")] bg-cover bg-no-repeat`}>
//       <div className='text-white py-1 bg-slate-950/50 w-full text-center'>
//       {movieObj.title}
//       </div>
//     </div>
//   )
// }
function Banner() {
  const [movieObj,setMovieObj] = useState({});

  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=3ab3327354bb3dba18cfa4002b6f2885')
    .then(function (response) {
      // console.log(response);
      let movies = response.data.results;
      // console.log(movies);
      let randomMovie = movies[Math.floor(Math.random()*20)]
      // console.log(randomMovie);
      setMovieObj(randomMovie);
    })
  //   fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=3ab3327354bb3dba18cfa4002b6f2885')
  //     .then( async function (response) {
  //       let result  = await response.json()
  //       // console.log( result);
  //       return result;
  //     })
  //     .then(function (response) {
  //       // console.log(response.results);
  //       let movies = response.results;
  //     // console.log(movies);
  //     let randomMovie = movies[Math.floor(Math.random()*20)]
  //     // console.log(randomMovie);
  //     setMovieObj(randomMovie);
  //     })
  },[])

  if(movieObj.backdrop_path === undefined){
    return<>...Loading</>
  }

  return (
    <div
      className="flex justify-center items-end h-[70vh]  bg-cover bg-no-repeat"
      // style={}
      style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movieObj.backdrop_path})`}}
    >
      <div className='text-white py-1 bg-slate-950/50 w-full text-center'>
        {movieObj.title}
      </div>
    </div>
  )
}

export default Banner;