
// import Home from "./Home";
import { AppContext } from "./context";
import { useContext,  useState } from "react";
import { useNavigate } from "react-router";



function RecipeForm({recipeData,setRecipeData}) {


  const Navigate = useNavigate();

  const { RecipeList, SetRecipeList, IsForEdit, SetIsForEdit } = useContext(AppContext);

  // console.log(RecipeList);

  

  // useEffect(
  //   () => {
  //     if (IsForEdit.IsForEdit && IsForEdit.RecipeId > -1 ){
  //         const data = structuredClone(RecipeList[IsForEdit.RecipeId]);
  //         setRecipeData(data);
  //     }

  //   },[]
  // );

  // if (IsForEdit.IsForEdit === true) {
  //   setRecipeData(structuredClone(RecipeList[IsForEdit.RecipeId]));
  // } 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    setRecipeData((prevData) => ({ ...prevData, [name]: value }));
  };

  // function HandleInstruction(e){
  //   // console.log(e.key);
  //   recipeData.instructions += e.key === "Enter" ? "\n" : e.key;

  //   setRecipeData(structuredClone(recipeData)) ;
  // }

  const handleAddIngredient = () => {
    const newIngredient = document.getElementById('newIngredient').value.trim();
    if (newIngredient) {
      setRecipeData((prevData) => ({
        ...prevData,
        ingredients: [...prevData.ingredients, newIngredient],
      }));
      document.getElementById('newIngredient').value = '';
    }
  };

  // const handleEditRecipe = () => {
  //   setRecipeData((prevData) => ({ ...prevData, isEditing: !prevData.isEditing }));
  // };

  const handleEditIngredient = (index,e) => {
    const newIngredientText = e.target.value;

      setRecipeData((prevData) => {
        const updatedIngredients = [...prevData.ingredients];
        updatedIngredients[index] = newIngredientText;
        return { ...prevData, ingredients: updatedIngredients };
      });
  };

  const handleDeleteIngredient = (index,e) => {
    e.preventDefault(); 
    const newObj = structuredClone(recipeData);
    newObj.ingredients.splice(index, 1);
    setRecipeData(newObj);
  };

  function HandleFormSubmit(e){
    e.preventDefault();

    
      const data = structuredClone(RecipeList);
      data[recipeData.id] = recipeData;
      console.log(data[recipeData.id] );
      SetRecipeList([...data]);
      if (IsForEdit.IsForEdit){
        SetIsForEdit({
        IsForEdit: false,
        RecipeId: -1
      })  }
      
    

    
   
    // setRecipeData({
    //   id : RecipeList.length,
    //   recipeName: "",
    //   description: "",
    //   imageUrl: "",
    //   ingredients: [],
    //   instructions: "",
    // })

    localStorage.setItem("RecipeList",JSON.stringify(RecipeList));
    document.getElementById('newIngredient').value = '';

    Navigate("/")

    console.log(RecipeList);
  }

  function HandleCancelClick(){
    if (IsForEdit.IsForEdit) {
      // data[IsForEdit.RecipeId] = recipeData;
      SetIsForEdit({
        IsForEdit: false,
        RecipeId: -1
      })
    }

    setRecipeData({
      id : RecipeList.length,
      recipeName: "",
      description: "",
      imageUrl: "",
      ingredients: [],
      instructions: "",
    });

    Navigate("/");
  }

  return (
    <div className="p-[2rem]" >
    <form
     className="flex flex-col space-y-4"
    //  onSubmit={(e) =>HandleFormSubmit(e)}
     >
      <div className="flex flex-col">
        <label htmlFor="recipeName" className="text-gray-700 font-bold mb-2">
          Recipe Name:
        </label>
        <input
          type="text"
          id="recipeName"
          name="recipeName"
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={recipeData.recipeName}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="description" className="text-gray-700 font-bold mb-2">
          Short Description:
        </label>
        <textarea
          id="description"
          name="description"
          rows="5"
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
          value={recipeData.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="imageUrl" className="text-gray-700 font-bold mb-2">
          Image URL (Optional):
        </label>
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={recipeData.imageUrl}
          onChange={handleInputChange}
        />
      </div>
      <div className="text-gray-700 font-bold mb-2">Ingredients:</div>
      <ul id="ingredientsList" className="list-disc pl-4" />
      {recipeData.ingredients.map((ingredient, index) => (
        <li key={index} className="flex items-center ">
          <input
            type="text"
            // key={index}
            className="px-3 py-2 rounded-md border border-gray-300 mr-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={ingredient}
            onChange={(e) => handleEditIngredient(index,e)}
          />

    
            <button
              className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 "
              // key={index}
              onClick={(e) => handleDeleteIngredient(index,e)}
            >
              Delete
            </button>
        
        </li>
      ))}
      <div className="flex">
        <input
          type="text"
          id="newIngredient"
          name="newIngredient"
          className="px-3 py-2 rounded-md border border-gray-300 mr-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="e.g., 1 cup flour"
        />
        <button
          type="button"
          id="addIngredient"
          className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          onClick={handleAddIngredient}
        >
          Add Ingredient
        </button>
      </div>
      <div className="text-gray-700 font-bold mb-2">Instructions:</div>
      <textarea
        id="instructions"
        name="instructions"
        rows="10"
        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
        value={recipeData.instructions}
        onChange={handleInputChange}
      />
      <div className="flex justify-between">
        <button
          type="Submit"
          id="Submit"
          className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
          onClick={HandleFormSubmit}
        >
          Submit
        </button>
        <button
          id="cancelButton"
          className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
          onClick={(e) =>HandleCancelClick(e)}
        >
          Cancel
        </button>
        
      </div>
    </form>
    </div>
  );
}

export default RecipeForm;

