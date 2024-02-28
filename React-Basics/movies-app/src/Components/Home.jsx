import React from "react";
// import NavBar from "./NavBar";
import Banner from "./Banner";
import TrendingMovies from "./TrendingMovies";
// import Pagination from "./Pagination";

function Home(
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
    return(
        <>
            {/* <div>Home Page</div> */}
            {/* // navbar */}
            {/* <NavBar></NavBar> */}
            {/* // banner section */}
            <Banner></Banner>
            {/* // Trending Movies */}
            <TrendingMovies
                Page_no={Page_no}
                Set_page_no={Set_page_no}
                Handle_Right_Arrow_Btn={Handle_Right_Arrow_Btn}
                Handle_Left_Arrow_Btn={Handle_Left_Arrow_Btn}
                Watch_list={Watch_list}
                Set_watch_list={Set_watch_list}
                Handle_Add_to_Watch_list={Handle_Add_to_Watch_list}
                Handle_Remove_from_Watch_list={Handle_Remove_from_Watch_list}
            ></TrendingMovies>
            {/* // pagination */}
            {/* <Pagination></Pagination> */}
        </>
    );
};

export default Home;

