

// import { useState } from "react";
import Add from "./AddIcon";
import SearchBar from "./Search";
import { Link } from "react-router-dom";
import RecipeCard from "./recipeCard";
import { AppContext } from "./context";
import { useContext, useState } from "react";
import App from "../App";


export default function Home(){

  const {RecipeList} = useContext(AppContext);

  const [ SearchStr, setSearchStr] = useState("");
  

    return (
      <>
        <div className="">
          <div
            className=" text-[3rem] text-center text-stone-200 h-[8rem]  w-[screen] flex justify-center items-center bg-no-repeat bg-cover  "
            style={{
              backgroundImage:
                "url(https://c1.wallpaperflare.com/preview/116/24/34/cook-healthy-food-eat.jpg)",
            }}
          >
            <p>Recipe-Book</p>
          </div>

          <SearchBar SearchStr={SearchStr} setSearchStr={setSearchStr} />
        </div>
        <div className="container mx-auto py-8">
          
            {RecipeList.length <= 0 ? (
              <div>...Loading</div>
            ) : (
              RecipeList.filter((ele) => {
                return ele.recipeName
                  .toLowerCase()
                  .startsWith(SearchStr.toLowerCase());
              }).map((ele) => (
                <RecipeCard
                  name={ele.recipeName}
                  description={ele.description}
                  url={ele.imageUrl}
                  key={ele.id}
                  id = {ele.id}
                />
              ))
            )}
         
        </div>

        <Add />
      </>
    );
};