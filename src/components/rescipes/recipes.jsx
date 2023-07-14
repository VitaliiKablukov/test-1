import { useEffect, useState } from 'react';
import useRecipesStore from '../../Zustand/store';
import { Button, Section, Ul } from './recipes.styled';
import { Recipe } from './recipe';
export const Recipes = () => {
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const recipes = useRecipesStore(state => state.recipes).slice(0, 15);
  const deleteRecipes = useRecipesStore(state => state.deleteRecipes);
  const fetchRecipes = useRecipesStore(state => state.fetchRecipes);
  const addSelectedRecipes = id => {
    if (selectedRecipes.includes(id)) {
      const index = selectedRecipes.indexOf(id);
      selectedRecipes.splice(index, 1);
    } else {
      selectedRecipes.push(id);
    }
    console.log(selectedRecipes);
  };
  useEffect(() => {
    if (recipes.length < 1) {
      fetchRecipes();
    }
  }, [fetchRecipes, recipes.length]);

  const recipesDelete = e => {
    deleteRecipes(selectedRecipes);
    setSelectedRecipes([]);
  };
  return (
    <Section>
      <Ul>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.id}
            recipe={recipe}
            addSelectedRecipes={addSelectedRecipes}
          />
        ))}
      </Ul>

      {selectedRecipes.length >= 0 && (
        <Button onClick={recipesDelete}>DeleteRecipes</Button>
      )}
    </Section>
  );
};
