import React from 'react';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import { RecipeType } from './types';

const Recipe: React.FC<RecipeType> = ({ name, ingredients, steps }) => (
  <section id={name.toLowerCase().replace(/ /g, '-')}>
    <h1>{name}</h1>
    <Ingredients data={ingredients} />
    <Instructions data={steps} />
  </section>
);

export default Recipe;
