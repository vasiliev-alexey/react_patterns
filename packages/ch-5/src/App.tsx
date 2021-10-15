import * as React from 'react';
import Menu from './components/Menu';

import data from '../data/recipes.json';
function app(): React.ReactElement {
  return <Menu recipes={data} title="Delicious Recipes" />;
}

export default app;
