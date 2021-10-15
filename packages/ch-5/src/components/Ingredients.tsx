import React from 'react';
const Ingredients = ({
  data,
}: {
  data: { name: string }[];
}): React.ReactElement => (
  <ul className="Ingredients">
    {data.map((ing, i) => (
      <li key={i}> {ing.name}</li>
    ))}
  </ul>
);

export default Ingredients;
