import React, { memo } from 'react';

const Cat: React.FC<{ name: string; meow: (f: string) => void }> = ({
  name,
  meow,
}) => {
  console.log(`rendering ${name}`);
  return <p onClick={() => meow(name)}>{name}</p>;
};

// const PureCat = memo(
//   Cat,
//   (prevProps, nextProps) => prevProps.name === nextProps.name
// );
const PureCat = memo(Cat);

export default PureCat;
