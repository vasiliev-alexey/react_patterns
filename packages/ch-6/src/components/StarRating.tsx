import React from 'react';
import Star from './Star';

type t = { style?: React.CSSProperties } & {
  totalStars?: number;
  selectedStars?: number;
  onRate: (rate: number) => void;
};

const StarRating: React.FC<t> = ({
  totalStars = 5,
  style,
  selectedStars,
  onRate,
}) => {
  return (
    <div style={{ padding: '5px', ...style }}>
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars}
      </p>
    </div>
  );
};

export default StarRating;
