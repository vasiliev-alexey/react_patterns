import React from 'react';
import { StepType } from './types';
const Instructions: React.FC<StepType> = ({ data = [] }) => (
  <section className="instructions">
    <h2>Cooking Instructions</h2>
    {data.map((step, i) => (
      <p key={i}>{step}</p>
    ))}
  </section>
);
export default Instructions;
