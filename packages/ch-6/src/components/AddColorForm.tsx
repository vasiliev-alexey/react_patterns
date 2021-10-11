import React, { useContext } from 'react';

import useInput from '../hooks/useInput';
import { ColorContext } from '../hooks/useColors';

const AddColorForm: React.FC = () => {
  const { addColor } = useContext(ColorContext);

  const [title, setTitle] = useInput('');
  const [color, setColor] = useInput('@000000');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    addColor(title.value, color.value);
    setTitle();
    setColor();
  };

  return (
    <form onSubmit={submit}>
      <input type="text" placeholder="color title" required {...title} />
      <input type="color" required {...color} />
      <button>ADD</button>
    </form>
  );
};

export default AddColorForm;
