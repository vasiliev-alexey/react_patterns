import React, { useCallback, useState } from 'react';
import Cat from './Cat';

const CatDemo: React.FC = () => {
  const [cats, setCats] = useState(['Biscuit', 'Jungle', 'Outlaw']);

  const meow = useCallback((name) => console.log(`${name} has meowed`), []);

  return (
    <>
      {cats.map((name, i) => (
        <Cat
          name={name}
          key={i}
          // meow={(name) => {
          //   console.log(`${name} has meowed`);
          // }}
          meow={meow}
        />
      ))}

      <button onClick={() => setCats([...cats, prompt('Name a cat')])}>
        Add
      </button>
    </>
  );
};

export default CatDemo;
