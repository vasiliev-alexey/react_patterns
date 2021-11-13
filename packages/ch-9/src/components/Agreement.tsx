import React from 'react';

const Agreement = ({
  onAgree,
}: {
  onAgree: React.MouseEventHandler<HTMLInputElement>;
}): React.ReactElement => {
  return (
    <div>
      <p>Terms...</p>
      <p>These are the terms and stuff. Do you agree?</p>
      <button onClick={onAgree}>I agree</button>
    </div>
  );
};
export default Agreement;
