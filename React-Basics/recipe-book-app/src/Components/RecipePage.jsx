
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./context";


// const recipeData = {
//   name: "Chocolate Chip Cookies",
//   shortDescription: "A classic and delicious treat!",
//   imageUrl: "https://bakerbynature.com/wp-content/uploads/2015/05/IMG_1823-2-copy.jpg",
//   ingredients: [
//     "1 cup (2 sticks) unsalted butter, softened",
//     "1 cup granulated sugar",
//     "1 cup packed light brown sugar",
//     "2 large eggs",
//     "2 teaspoons pure vanilla extract",
//     "2 ¾ cups all-purpose flour",
//     "1 teaspoon baking soda",
//     "1 teaspoon salt",
//     "2 cups semisweet chocolate chips",
//   ],
//   instructions: "Preheat oven to 375 degrees F (190 degrees C). Line baking sheets with parchment paper.In a large bowl, cream together the butter and sugars until light and fluffy.Beat in the eggs one at a time, then stir in the vanilla extract.In a separate bowl, whisk together the flour, baking soda, and salt.Gradually add the dry ingredients to the wet ingredients, mixing until just combined"
  
// };

// recipeData.instructions = recipeData.instructions.split(/\r?\n/);

export default function RecipePage({RecipeList,recipeData,setRecipeData}) {
  const Navigate = useNavigate();
  const { RecipeId, SetRecipeId } = useContext(AppContext);

  

  // const List = structuredClone(RecipeList);  
  console.log(RecipeId)   

  function handleBack() {
    Navigate("/");
    SetRecipeId(-1);
  }

  // useEffect(
  //   function(){
  //     const data = RecipeList.filter(
  //       function(ele){
  //         return ele.id === RecipeId;
  //       }
  //     )
  //     setRecipeData(data);
  //     console.log();
  //   },[RecipeId, RecipeList]
  // );

  console.log(recipeData);

  // console.log(reci);

  // useEffect(
  //  function(){
  //     console.log(recipeData)
  //     // while ( RecipeList[RecipeId] === undefined){}
  //     if ( localStorage.getItem("RecipeList") ){
  //       const data = JSON.parse(localStorage.getItem("RecipeList"));
  //       // console.log(data);
  //       setRecipeData(structuredClone(data[RecipeId]));
  //     }
  //     console.log(recipeData);
  //   },[]
  // )

   



  if (  recipeData.length <= 0  ){
    return (
      <div className="App">
        <h1>Loading...</h1>
      </div>
    );
  }

  // while(RecipeList[RecipeId] == undefined){
  
  //     <div className="App">
  //       <h1>Loading...</h1>
  //     </div>
    
  // }

  return (
    <>
  
      <div className="recipe-page bg-gradient-to-br from-sky-200 to-pink-100 shadow-md rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-8 h-[90vh] w-[90vw] translate-x-[5%] translate-y-[5%] ">
        <div className="recipe-image md:col-span-6 relative h-full">
          <img
            src={recipeData[0].imageUrl}
            alt={recipeData[0].recipeName}
            className="w-full h-full object-cover absolute inset-0 rounded-xl filter blur-md md:filter-none"
          />
          <div className="overlay bg-gradient-to-t from-purple-700 opacity-25 absolute inset-0 rounded-xl"></div>
          <h1 className="text-white text-3xl font-bold px-8 py-8 md:text-4xl md:py-12">
            {recipeData[0].recipeName}
          </h1>
        </div>
        <div className="recipe-info md:col-span-6 p-8 flex flex-col gap-4 relative">
          <p className="text-gray-700 text-lg mb-4 font-semibold">
            {recipeData[0].description}
          </p>
          <div className="ingredients-container flex flex-wrap gap-4">
            <h3 className="text-teal-600 font-semibold">Ingredients</h3>
            <ul className="ingredients-list list-disc pl-4">
              {recipeData[0].ingredients.map((ingredient) => (
                <li key={ingredient} className="text-gray-700">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <h3 className="text-orange-500 font-semibold">Instructions</h3>
          <div className="instructions-list list-decimal pl-4">
            {recipeData[0].instructions}
          </div>
          
        </div>
      </div>

      <button
            className="back-button flex items-center px-6 py-3 text-lg font-semibold bg-teal-500 text-white rounded-md hover:bg-teal-700 shadow-md fixed left-1 top-1"
            onClick={handleBack}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back
          </button>
    </>
  );
}
