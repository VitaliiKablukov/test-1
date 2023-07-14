import { useEffect } from 'react';
import useRecipesStore from '../Zustand/store';
import { Recipes } from './rescipes/recipes';

import { Route, Routes } from 'react-router-dom';
import { ViewRecipe } from './rescipes/viewRecipe/viewRecipe';

export const App = () => {
  const retchRecipes = useRecipesStore(state => state.fetchRecipes);

  useEffect(() => {
    retchRecipes();
  }, [retchRecipes]);

  return (
    <Routes>
      <Route path="/" element={<Recipes />} />
      <Route path="/:id" element={<ViewRecipe />} />
    </Routes>
  );
};
