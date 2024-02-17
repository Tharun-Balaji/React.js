import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import TrendingMovies from "./TrendingMovies";
import Pagination from "./Pagination";

function Home(){
    return(
        <>
            {/* <div>Home Page</div> */}
            {/* // navbar */}
            <NavBar></NavBar>
            {/* // banner section */}
            <Banner></Banner>
            {/* // Trending Movies */}
            <TrendingMovies></TrendingMovies>
            {/* // pagination */}
            <Pagination></Pagination>
        </>
    );
};

export default Home;

