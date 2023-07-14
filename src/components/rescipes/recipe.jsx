import { Link } from 'react-router-dom';
import { Img, Li } from './recipes.styled';
import { useState } from 'react';
export const Recipe = ({ recipe, addSelectedRecipes }) => {
  const [toggleButton, setToggleButton] = useState(false);
  const { image_url, id } = recipe;
  return (
    <Li key={id}>
      <Link to={`${id}`}>
        <Img src={image_url} alt="beer" />
      </Link>
      <input
        type="checkbox"
        onClick={() => {
          addSelectedRecipes(id);
          setToggleButton(prev => !prev);
        }}
        id="addBeer"
      />
      {toggleButton ? (
        <label htmlFor="addBeer">remove the beer from the box</label>
      ) : (
        <label htmlFor="addBeer">Add beer to box</label>
      )}
    </Li>
  );
};
