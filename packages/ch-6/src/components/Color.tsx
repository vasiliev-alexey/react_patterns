import React from 'react';
import ColorData from '../types';
import StarRating from './StarRating';
import { FaTrash } from 'react-icons/fa';

const Color: React.FC<
  ColorData & {
    onRemove: (id: string) => void;
    onRateColor: (id: string, rating: number) => void;
  }
> = ({ id, title, color, rating, onRemove, onRateColor }) => {
  return (
    <section>
      <h1>{title}</h1>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={(rating) => onRateColor(id, rating)}
      />

      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
    </section>
  );
};

export default Color;
