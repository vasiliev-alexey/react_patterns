import React from 'react';
import { FaStar } from 'react-icons/fa';

const Star: React.FC<{ selected?: boolean; onSelect: () => void }> = ({
  selected = false,
  onSelect,
}) => {
  return <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />;
};

export default Star;
