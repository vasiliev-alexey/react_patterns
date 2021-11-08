import React, { useState } from 'react';
import GitHubUser from './GitHubUser';
import GitHubUserLoading from './GitHubUserLoading';
import VirtListApp from './VirtListApp';

const App: React.FC = () => {
  const [login] = useState('vasiliev-alexey');

  console.log('login ', login);

  return (
    <>
      <GitHubUser login={login} />
      {/*<GitHubUser login="MoonHighway" />*/}
      <hr />
      <GitHubUserLoading login="vasiliev-alexey" />

      <VirtListApp />
    </>
  );
};

export default App;
