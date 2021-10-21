import { createContext, ReactElement, useContext, useState } from 'react';

import colorData from '../../data/color-data.json';

import { v4 } from 'uuid';
import * as React from 'react';

export type ColorsType = {
  colors: typeof colorData;
  addColor: (title: string, color: string) => void;
  rateColor: (id: string, rating: number) => void;
  removeColor: (id: string) => void;
};

export const ColorContext = createContext<ColorsType>(null);

export const useColors = (): ColorsType => useContext(ColorContext);

export default function ColorProvider({
  children,
}: {
  children: JSX.Element;
}): ReactElement {
  const [colors, setColors] = useState(colorData);

  const addColor = (title: string, color: string) =>
    setColors([
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color,
      },
    ]);

  const rateColor = (id: string, rating: number) =>
    setColors(
      colors.map((color) => (color.id === id ? { ...color, rating } : color))
    );

  const removeColor = (id: string) =>
    setColors(colors.filter((color) => color.id !== id));

  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      {children}
    </ColorContext.Provider>
  );
}
