import { create } from 'zustand';
import axios from 'axios';

const useRecipesStore = create((set, get) => ({
  recipes: [],
  fetchRecipes: async () => {
    try {
      const response = await axios.get(
        'https://api.punkapi.com/v2/beers?page=1'
      );
      set({ recipes: response.data });
    } catch (error) {
      console.log(error.message);
    }
  },
  deleteRecipes: ids => {
    try {
      console.log(get().recipes);
      ids.map(id => {
        const newRecipes = get().recipes.filter(recipe => recipe.id !== id);
        return set({ recipes: newRecipes });
      });

      console.log(get().recipes);
    } catch (error) {}
  },
}));
export default useRecipesStore;
