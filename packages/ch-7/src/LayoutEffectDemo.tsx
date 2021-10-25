import React, { useEffect, useLayoutEffect } from 'react';

const LayoutEffectDemo: React.FC = () => {
  useEffect(() => console.log('useEffect'));
  useLayoutEffect(() => console.log('useLayoutEffect'));

  return <div>ready</div>;
};

export default LayoutEffectDemo;
