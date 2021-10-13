import React from 'react';
import GitHubUser from './GitHubUser';
import GitHubUserLoading from './GitHubUserLoading';

const App: React.FC = () => {
  return (
    <>
      <GitHubUser login="vasiliev-alexey" />
      {/*<GitHubUser login="MoonHighway" />*/}
      <hr />
      <GitHubUserLoading login="vasiliev-alexey" />
    </>
  );
};

export default App;
