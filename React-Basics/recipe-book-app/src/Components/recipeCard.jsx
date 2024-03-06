
// import { AwaitContext } from "react-router/dist/lib/context";
import { useNavigate } from "react-router";
import { AppContext } from "./context";
import { useContext } from "react";

// import { useNavigate } from "react-router";


function RecipeCard({name,description,url, id}) {
  const { RecipeList, IsForEdit, SetIsForEdit, RecipeId, SetRecipeId } =
    useContext(AppContext);

    const Navigate = useNavigate();

  function onEdit(e){
    console.log(Number(e.target.id))
    console.log(e)
    SetIsForEdit({
      IsForEdit: true,
      RecipeId: Number(e.target.id)
    })

    Navigate("/form")
  }

  function onDetails(e){
    SetRecipeId(Number(e.target.id));
    console.log(e.target.id);
    Navigate("/recipe")
  }

  if(RecipeList.length <= 0){
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        ...Loading
      </div>
    );
  }
  return (
    
    <div className="bg-white rounded-lg shadow-md overflow-hidden m-[2%] h-[20rem] " key={id}>
      <img
        src={url}
        alt={"recipe"}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <button
              onClick={(e) =>onEdit(e)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
            id={id}
          >
            Edit
          </button>
          <button
          id={id}
              onClick={(e) =>onDetails(e)}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
  
  export default RecipeCard;