import React from 'react';
import Checkbox from './Checkbox';
import Demo1 from './Demo1';
import LayoutEffectDemo from './LayoutEffectDemo';
import CatDemo from './CatDemo';

const App: React.FC = () => {
  return (
    <>
      {/*<h1>Hello</h1>*/}
      <Checkbox />
      <hr />
      <Demo1 />
      <hr />
      <LayoutEffectDemo />
      <hr />
      <CatDemo />
    </>
  );
};

export default App;
