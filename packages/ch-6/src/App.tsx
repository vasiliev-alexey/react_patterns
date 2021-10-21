import React from 'react';
import ColorExample from './components/ColorExample';
import ColorProvider from 'src/hooks/useColors';

function app(): React.ReactElement {
  return (
    <ColorProvider>
      <ColorExample />
    </ColorProvider>
  );
}

export default app;
