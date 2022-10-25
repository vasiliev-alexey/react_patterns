import React from 'react';
import GitHubUser from './GitHubUser';
import GitHubUserLoading from './GitHubUserLoading';
import VirtListApp from './VirtListApp';

const App: React.FC = () => {
  return (
    <>
      <GitHubUser login="vasiliev-alexey" />
      {/*<GitHubUser login="MoonHighway" />*/}
      <hr />
      <GitHubUserLoading login="vasiliev-alexey" />

      <VirtListApp />
    </>
  );
};

export default App;
