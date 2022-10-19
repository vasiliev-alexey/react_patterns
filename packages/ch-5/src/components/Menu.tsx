import React from 'react';
import Recipe from './Recipe';
import { MenuType } from './types';

const Menu: React.FC<MenuType> = ({ title, recipes }) => (
  <article>
    <header>
      <h1>{title}</h1>
    </header>
    <div className="recipes">
      {recipes.map((recipe, i) => (
        <Recipe key={i} {...recipe} />
      ))}
    </div>
  </article>
);

export default Menu;
