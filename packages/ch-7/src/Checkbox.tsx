import React, { useEffect, useReducer } from 'react';

const Checkbox: React.FC = () => {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  useEffect(() => {
    console.log('click');
    // alert(`checked: ${checked.toString()}`);
  });

  console.log('render');

  // function toggle() {
  //   setChecked((checked) => !checked);
  // }

  return (
    <>
      <p>{Date.now()}</p>

      <input type="checkbox" checked={checked} onChange={toggle} />
      {checked ? 'checked' : 'not checked'}
    </>
  );
};

export default Checkbox;
