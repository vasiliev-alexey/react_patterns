import { ChangeEvent, useState } from 'react';

const useInput = (
  initValue: string
): [
  { value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void },
  () => void
] => {
  const [value, setValue] = useState(initValue);

  return [
    {
      value,
      onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    },
    () => setValue(initValue),
  ];
};

export default useInput;
