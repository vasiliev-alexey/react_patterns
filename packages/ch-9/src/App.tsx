import React, { useState, Suspense, lazy } from 'react';
// import BreakThings from './components/BreakThings';
import ErrorScreen from './components/ErrorScreen';
import ErrorBoundary from './components/ErrorBoundary';
import Agreement from './components/Agreement';
// import Main from './components/Main';

import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

const Main = lazy(() => import('./components/Main'));

const App: React.FC = () => {
  // return (
  //   <>
  //     <p>run it</p>
  //     <p>Site Layout Menu</p>
  //
  //     <ErrorBoundary Fallback={ErrorScreen}>
  //       <BreakThings />
  //     </ErrorBoundary>
  //
  //
  //   </>
  // );

  const [agree, setAgree] = useState(false);
  if (!agree) return <Agreement onAgree={() => setAgree(true)} />;

  return (
    <ErrorBoundary Fallback={ErrorScreen}>
      <Suspense fallback={<ClimbingBoxLoader />}>
        <Main />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
