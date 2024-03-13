
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./context";
import{ Link } from "react-router-dom"


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

  // console.log(recipeData);

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

  // return (
  //   <>
  
  //     <div className="recipe-page bg-gradient-to-br from-sky-200 to-pink-100 shadow-md rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-8 h-[90vh] w-[90vw] translate-x-[5%] translate-y-[5%] flex-wrap-reverse">
  //       <div className="recipe-image md:col-span-6 relative h-full">
  //         <img
  //           src={recipeData[0].imageUrl}
  //           alt={recipeData[0].recipeName}
  //           className="w-full h-full object-cover absolute inset-0 rounded-xl filter blur-md md:filter-none"
  //         />
  //         <div className="overlay bg-gradient-to-t from-purple-700 opacity-25 absolute inset-0 rounded-xl"></div>
  //         <h1 className="text-white text-3xl font-bold px-8 py-8 md:text-4xl md:py-12">
  //           {recipeData[0].recipeName}
  //         </h1>
  //       </div>
  //       <div className="recipe-info md:col-span-6 p-8 flex flex-col gap-4 relative">
  //         <p className="text-gray-700 text-lg mb-4 font-semibold">
  //           {recipeData[0].description}
  //         </p>
  //         <div className="ingredients-container flex flex-wrap gap-4">
  //           <h3 className="text-teal-600 font-semibold">Ingredients</h3>
  //           <ul className="ingredients-list list-disc pl-4">
  //             {recipeData[0].ingredients.map((ingredient) => (
  //               <li key={ingredient} className="text-gray-700">
  //                 {ingredient}
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //         <h3 className="text-orange-500 font-semibold">Instructions</h3>
  //         <div className="instructions-list list-decimal pl-4">
  //           {recipeData[0].instructions}
  //         </div>
          
  //       </div>
  //     </div>

  //     <button
  //           className="back-button flex items-center px-6 py-3 text-lg font-semibold bg-teal-500 text-white rounded-md hover:bg-teal-700 shadow-md fixed left-1 top-1"
  //           onClick={handleBack}
  //         >
  //           <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back
  //         </button>
  //   </>
  // );
   const {
    recipeName,
    description,
    imageUrl,
    ingredients,
    instructions,
  } = recipeData[0];

  return (
  //   <>
  //   <div className="container mx-auto p-4 m-1 h-[70vh] ">
  //     <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">{recipe.recipeName}</h1>
  //     <div className="flex flex-col lg:flex-row justify-center items-center">
  //       <div className="lg:w-1/2 lg:mr-4">
  //         <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-[80vh] rounded-lg shadow-lg max-[500px]:h-[40vh] max-[500px]:w-[80vw]  " />
  //       </div>
  //       <div className="lg:w-1/2">
  //         <p className="text-lg italic mb-4 text-gray-700">{recipe.description}</p>
  //         <div>
  //           <h2 className="text-xl font-semibold mb-2 text-gray-800">Ingredients:</h2>
  //           <ul className="list-disc pl-4">
  //             {recipe.ingredients.map((ingredient, index) => (
  //               <li key={index} className="text-gray-700">{ingredient}</li>
  //             ))}
  //           </ul>
  //         </div>
  //         <div className="mt-4">
  //           <h2 className="text-xl font-semibold mb-2 text-gray-800">Instructions:</h2>
  //           <p className="text-gray-700 overflow-visible">{recipe.instructions}</p>
  //         </div>
  //       </div>
        
  //     </div>
     
  //   </div>
  //    <div className=" fixed bottom-0 left-0 right-0 p-4 bg-gray-200 text-center ">
  //    <Link to="/" className="text-blue-500 hover:text-blue-700">Back</Link>
  //  </div>
  // </>
  <div className="container mx-auto py-8 px-4">
  <div className="mb-8 flex justify-between items-center">
    <button
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition-colors duration-300"
      onClick={handleBack}
    >
      Back
    </button>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="md:order-last">
      <img
        src={imageUrl}
        alt={recipeName}
        className="w-full object-cover rounded-lg shadow-lg h-64 md:h-auto"
      />
    </div>
    <div className="p-4 md:p-8">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">{recipeName}</h1>
      <p className="text-gray-700 mb-8">{description}</p>

      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700 mb-2">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Instructions</h2>
            <p className="text-gray-700 whitespace-pre-line">{instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
