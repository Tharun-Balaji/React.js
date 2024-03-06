
import './App.css';
import { recipes } from './data';
import Home from './Components/Home';
import RecipeForm from './Components/Form';
import { AppContext } from './Components/context';
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipePage from './Components/RecipePage';
import { useLocation } from 'react-router-dom';
// import { useId } from 'react';

function App() {


  // const [Search, SetSearch] = useState("");

  // const { pathname } = useLocation();

  // console.log(pathname);

  const [RecipeList, SetRecipeList] = useState([]);

  const [IsForEdit, SetIsForEdit] = useState({
    IsForEdit: false,
    RecipeId: -1
  });

  const[RecipeId, SetRecipeId] = useState(0)

  useEffect(
    function(){
      if (!localStorage.getItem("RecipeList") ){
        localStorage.setItem("RecipeList",JSON.stringify(recipes));
      }
    }
  )

  useEffect(function () {
    if (localStorage.getItem("RecipeList")) {
      let new_list = JSON.parse(localStorage.getItem("RecipeList"));
      SetRecipeList(new_list);
    }
  }, []);

  // console.log(RecipeList);
  const [recipeData, setRecipeData] = useState({
    id: RecipeList.length,
    recipeName: "",
    description: "",
    imageUrl: "",
    ingredients: [],
    instructions: "",
  });

  useEffect( 
    function(){
      if (IsForEdit.IsForEdit && IsForEdit.RecipeId > -1) {
        const data  = RecipeList[IsForEdit.RecipeId];
        console.log(data);
        setRecipeData({...RecipeList[IsForEdit.RecipeId]});
      }
    },[IsForEdit]
   )

   const [recipe , setRecipe ] = useState([]);

   useEffect(
    function(){
      const data = RecipeList.filter(
        function(ele){
          return ele.id == RecipeId;
        }
      )
      setRecipe(data);
      console.log();
    },[RecipeId, RecipeList]
  );

//  console.log(window.location.pathname);

  useEffect (
    function(){
      SetIsForEdit(
        {
          IsForEdit: false,
          RecipeId: -1
        }
      )
    },[window.location.pathname]
  );

  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{
          RecipeList,
          SetRecipeList,
          IsForEdit,
          SetIsForEdit,
          RecipeId,
          SetRecipeId,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/form" element={<RecipeForm 
            recipeData = {recipeData}
            setRecipeData = {setRecipeData}
          />}></Route>

          <Route path="/recipe" element={<RecipePage 
              RecipeList = {RecipeList}
              recipeData = {recipe}
              setRecipeData = {setRecipe}
          />}></Route>
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
