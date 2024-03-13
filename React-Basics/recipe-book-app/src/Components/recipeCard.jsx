
// import { AwaitContext } from "react-router/dist/lib/context";
import { useNavigate } from "react-router";
import { AppContext } from "./context";
import { useContext } from "react";

// import { useNavigate } from "react-router";


function RecipeCard({name,description,url,id}) {
  const { RecipeList, IsForEdit, SetIsForEdit, RecipeId, SetRecipeId, SetRecipeList } = useContext(AppContext);

    const Navigate = useNavigate();

  function onEdit(id){
    // console.log(Number(e.target.id))
    // console.log(e)
    SetIsForEdit({
      IsForEdit: true,
      RecipeId: Number(id)
    })
    // console.log(IsForEdit);

    Navigate("/form")
  }

  function onDetails(id){
    SetRecipeId(Number(id));
    // console.log(e.target.id);
    Navigate("/recipe")
  }

  function onDelete(id){
    SetRecipeList(
      RecipeList.filter(
        function(ele){
          return ele.id!== id;
        }
      )
    )
  }

  if(RecipeList.length <= 0){
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        ...Loading
      </div>
    );
  }
  return (
    
    // <div className="bg-white rounded-lg shadow-md overflow-hidden m-[2%] h-[20rem] " 
    // key={id}>
    //   <img
    //     src={url}
    //     alt={"recipe"}
    //     className="w-full h-40 object-cover"
    //   />
    //   <div className="p-4" key={id}>
    //     <h3 className="text-xl font-bold">{name}</h3>
    //     <p className="text-gray-700 mb-4">{description}</p>
    //     <div className="flex justify-between items-center" key={id}>
    //       <button
    //           onClick={(e) =>onEdit(e)}
    //         className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
    //         id={id}
    //       >
    //         Edit
    //       </button>
    //       <button
    //       id={id}
    //           onClick={(e) =>onDetails(e)}
    //         className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200"
    //       >
    //         View Details
    //       </button>
    //     </div>
    //   </div>
    // </div>
    // <div className="bg-white rounded-lg shadow-md overflow-hidden" >
    //   <img
    //     src={url}
    //     alt={name}
    //     className="w-full h-48 object-cover md:h-64"
    //   />
    //   <div className="p-4">
    //     <h3 className="text-xl font-semibold mb-2">{name}</h3>
    //     <p className="text-gray-700 mb-4">{description}</p>
    //     <div className="flex justify-end flex-wrap">
    //       <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2">
    //         Delete
    //       </button>
    //       <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2">
    //         Edit
    //       </button>
    //       <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2">
    //         View
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-white shadow-md mb-8 hover:scale-[0.9] hover:delay-300 transition duration-300 delay-150">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img
            src={url}
            alt={name}
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="md:w-2/3 p-6">
          <h3 className="text-2xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="flex justify-end">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={() => onEdit(id)}
            >
              Edit
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => onDetails(id)}
            >
              View
            </button>
            </div>
        </div>
      </div>
    </div>
  );
}
  
  export default RecipeCard;