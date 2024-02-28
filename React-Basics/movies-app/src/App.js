
import './App.css';
import React, { useState, useEffect } from'react';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import WatchList from './Components/WatchList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [Page_no, Set_page_no] = useState(1);
  const [Watch_list, Set_watch_list] = useState([]);

  function Handle_Add_to_Watch_list (Movie_Obj) {
      const new_list = [...Watch_list,Movie_Obj];
      localStorage.setItem("watch_list",JSON.stringify(new_list));
      Set_watch_list(new_list);
  };

  function Handle_Remove_from_Watch_list (Movie_Obj) {
      const new_list = Watch_list.filter( function(movie){
          return movie.id !== Movie_Obj.id;
      } );
      localStorage.setItem("watch_list",JSON.stringify(new_list));
      Set_watch_list(new_list);
  };

function Handle_Right_Arrow_Btn() {
  // console.log("Plus button clicked");
  // Page_no++;
  Set_page_no(previous_count => ++previous_count);
  // props.onClick(Page_no + 1);
};

function Handle_Left_Arrow_Btn() {
  // console.log("Plus button clicked");
  // Page_no++;
  if ( Page_no >  1 ){
    Set_page_no(previous_count => --previous_count);
  //   props.onClick(Page_no - 1);
  }
};
  // function get_Page_no(data) {
  //     Set_page_no(data);
  //     // console.log(data);
  // }

  useEffect( function(){
      // axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=3ab3327354bb3dba18cfa4002b6f2885')
      //     .then(function (response) {
      //         Set_Trending_movies(response.data.results);
      //     })
      //     .catch(function(err) {
      //          console.log(err);
      //     } )
      if  (localStorage.getItem("watch_list")){
          let new_list = JSON.parse(localStorage.getItem("watch_list"));
          Set_watch_list(new_list);
      }
  },[] );


  return (
    // <h1 class="text-3xl font-bold underline">
    //   Hello world!
    // </h1>

    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={
          <Home
            Page_no={Page_no}
            Set_page_no={Set_page_no}
            Handle_Right_Arrow_Btn={Handle_Right_Arrow_Btn}
            Handle_Left_Arrow_Btn={Handle_Left_Arrow_Btn}
            Watch_list={Watch_list}
            Set_watch_list={Set_watch_list}
            Handle_Add_to_Watch_list={Handle_Add_to_Watch_list}
            Handle_Remove_from_Watch_list={Handle_Remove_from_Watch_list}
          />
          } ></Route>
        <Route path="/watchlist" element={
          <WatchList
            Watch_list={Watch_list}
            Set_watch_list={Set_watch_list}
            Handle_Remove_from_Watch_list={Handle_Remove_from_Watch_list}
          />
        } ></Route>
        </Routes>
    </BrowserRouter>
        
  );
}

export default App;
