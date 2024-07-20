
// import Home from "./Home";
import { AppContext } from "./context";
import { useContext,  useState , useEffect} from "react";
import { useNavigate } from "react-router";



function RecipeForm() {

  

  const Navigate = useNavigate();

  const { RecipeList, SetRecipeList, IsForEdit, SetIsForEdit } = useContext(AppContext);

  const [recipeData, setRecipeData] = useState({
    id: RecipeList[RecipeList.length - 1].id === undefined ? RecipeList.length : RecipeList[RecipeList.length - 1].id + 1,
    recipeName: "",
    description: "",
    imageUrl: "",
    ingredients: [],
    instructions: "",
  });

  useEffect( 
    function(){
      if (IsForEdit.IsForEdit && IsForEdit.RecipeId > -1) {
        const data  = RecipeList.filter(
          (item) => item.id === IsForEdit.RecipeId
        )
        // console.log(data);
        setRecipeData({...data[0]});
      }
    },[IsForEdit,RecipeList]
   )

  // console.log(recipeData);

  // console.log(RecipeList);

  // console.log(IsForEdit);

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
    // console.log(name);
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

      let data = RecipeList;
      if ( recipeData.ingredients.length <= 0 ){
        alert("Pleas add at least one Ingredient");
        return;
      }
      
      
      if (IsForEdit.IsForEdit) {
        data = RecipeList.filter(
          function(ele){
            return ele.id !== IsForEdit.RecipeId;
          }
        )
        // console.log(data);
        SetRecipeList([...data, recipeData].sort((a, b) => a.id - b.id));
        SetIsForEdit({
          IsForEdit: false,
          RecipeId: -1,
        });
      } else {
        SetRecipeList([...RecipeList, recipeData].sort((a, b) => a.id - b.id));
      }
      
    

    
   
    setRecipeData({
      id : RecipeList.length,
      recipeName: "",
      description: "",
      imageUrl: "",
      ingredients: [],
      instructions: "",
    })

    localStorage.setItem("RecipeList",JSON.stringify(RecipeList));
    document.getElementById('newIngredient').value = '';

    Navigate("/")

    // console.log(RecipeList);
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

  // console.log(recipeData);

  return (
    // <div className="p-[2rem]" >
    // <form
    //  className="flex flex-col space-y-4"
    // //  onSubmit={(e) =>HandleFormSubmit(e)}
    //  >
    //   <div className="flex flex-col">
    //     <label htmlFor="recipeName" className="text-gray-700 font-bold mb-2">
    //       Recipe Name:
    //     </label>
    //     <input
    //       type="text"
    //       id="recipeName"
    //       name="recipeName"
    //       className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
    //       value={recipeData.recipeName}
    //       onChange={handleInputChange}
    //     />
    //   </div>
    //   <div className="flex flex-col">
    //     <label htmlFor="description" className="text-gray-700 font-bold mb-2">
    //       Short Description:
    //     </label>
    //     <textarea
    //       id="description"
    //       name="description"
    //       rows="5"
    //       className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
    //       value={recipeData.description}
    //       onChange={handleInputChange}
    //     />
    //   </div>
    //   <div className="flex flex-col">
    //     <label htmlFor="imageUrl" className="text-gray-700 font-bold mb-2">
    //       Image URL (Optional):
    //     </label>
    //     <input
    //       type="url"
    //       id="imageUrl"
    //       name="imageUrl"
    //       required
    //       className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
    //       value={recipeData.imageUrl}
    //       onChange={handleInputChange}
    //     />
    //   </div>
    //   <div className="text-gray-700 font-bold mb-2">Ingredients:</div>
    //   <ul id="ingredientsList" className="list-disc pl-4" />
    //   {recipeData.ingredients.map((ingredient, index) => (
    //     <li key={index} className="flex items-center ">
    //       <input
    //         type="text"
    //         // key={index}
    //         className="px-3 py-2 rounded-md border border-gray-300 mr-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
    //         value={ingredient}
    //         onChange={(e) => handleEditIngredient(index,e)}
    //       />

    
    //         <button
    //           className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 "
    //           // key={index}
    //           onClick={(e) => handleDeleteIngredient(index,e)}
    //         >
    //           Delete
    //         </button>
        
    //     </li>
    //   ))}
    //   <div className="flex">
    //     <input
    //       type="text"
    //       id="newIngredient"
    //       name="newIngredient"
    //       className="px-3 py-2 rounded-md border border-gray-300 mr-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
    //       placeholder="e.g., 1 cup flour"
    //     />
    //     <button
    //       type="button"
    //       id="addIngredient"
    //       className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
    //       onClick={handleAddIngredient}
    //     >
    //       Add Ingredient
    //     </button>
    //   </div>
    //   <div className="text-gray-700 font-bold mb-2">Instructions:</div>
    //   <textarea
    //     id="instructions"
    //     name="instructions"
    //     rows="10"
    //     className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
    //     value={recipeData.instructions}
    //     onChange={handleInputChange}
    //   />
    //   <div className="flex justify-between">
    //     <button
    //       type="Submit"
    //       id="Submit"
    //       className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
    //       onClick={HandleFormSubmit}
    //     >
    //       Submit
    //     </button>
    //     <button
    //       id="cancelButton"
    //       className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
    //       onClick={(e) =>HandleCancelClick(e)}
    //     >
    //       Cancel
    //     </button>
        
    //   </div>
    // </form>
    // </div>
    <div className="container mx-auto max-w-3xl p-4">
      <h2 className="text-2xl font-bold mb-4">Add Recipe</h2>
      <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        onSubmit={(e) => HandleFormSubmit(e)}
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="recipeName">
            Recipe Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="recipeName"
            name="recipeName"
            type="text"
            required
            placeholder="Enter recipe name"
            value={recipeData.recipeName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Short Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            id="description"
            name="description"
            rows="3"
            required
            placeholder="Enter a short description"
            value={recipeData.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="imageUrl">
            Image URL (Optional)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="imageUrl"
            name="imageUrl"
            type="url"
            placeholder="Enter image URL"
            value={recipeData.imageUrl}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Ingredients</label>
          <ul className="list-disc list-inside">
            {recipeData.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center mb-2">
                <input
                  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2 flex-grow"
                  type="text"
                  value={ingredient}
                  onChange={(e) => handleEditIngredient(index, e)}
                />
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={(e) => handleDeleteIngredient(index, e)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <div className="flex">
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2 flex-grow"
              type="text"
              id="newIngredient"
              name="newIngredient"
              placeholder="e.g., 1 cup flour"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleAddIngredient}
            >
              Add
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="instructions">
            Instructions
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            id="instructions"
            name="instructions"
            rows="8"
            required
            placeholder="Enter instructions"
            value={recipeData.instructions}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            // onClick={HandleFormSubmit}
          >
            Submit
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={HandleCancelClick}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>

  );
}

export default RecipeForm;

