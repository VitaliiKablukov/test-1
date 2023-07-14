import { useParams } from 'react-router-dom';

import useRecipesStore from '../../../Zustand/store';
import { Div, Img, Li, Section, Ul } from './viewRecipes.styled';
export const ViewRecipe = () => {
  const { id } = useParams();
  console.log(id);
  const recipes = useRecipesStore(state => state.recipes);
  const recipe = recipes.find(res => Number(res.id) === Number(id));

  console.log(recipe);
  return (
    <Section>
      <Ul>
        <Li key={recipe.id}>
          <Img src={recipe.image_url} alt="beer" />
          <Div>
            <p>{recipe.description}</p>
            <p>alcohol: {recipe.abv}%</p>
            <p>{recipe.brewers_tips}</p>
          </Div>
        </Li>
      </Ul>
    </Section>
  );
};
