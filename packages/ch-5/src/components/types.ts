// type MeasurementType = 'lb' | 'cup' | 'cups' | 'med' | 'cloves';

export type IngredientType = {
  name: string;
  amount: number;
  measurement: string;
};

export type StepType = {
  data: string[];
};

export type RecipeType = {
  name: string;
  ingredients: IngredientType[];
  steps: string[];
};

export type MenuType = {
  title: string;
  recipes: RecipeType[];
};
