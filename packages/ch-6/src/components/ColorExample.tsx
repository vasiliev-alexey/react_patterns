import React from 'react';

import ColorList from './ColorList';
import AddColorForm from './AddColorForm';

const ColorExample: React.FC = () => {
  return (
    <>
      <AddColorForm />
      <ColorList />
    </>
  );
};

export default ColorExample;
