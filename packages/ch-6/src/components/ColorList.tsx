import React from 'react';
import Color from './Color';
import { useColors } from '../hooks/useColors';

const ColorList: React.FC = () => {
  const { colors, removeColor, rateColor } = useColors();

  console.log('c', colors);

  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemove={removeColor}
          onRateColor={rateColor}
        />
      ))}
    </div>
  );
};

export default ColorList;
