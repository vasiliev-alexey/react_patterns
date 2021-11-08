import React from 'react';
import { RepoMenu } from './RepoMenu';
import Fetch from '../utils/Fetch';

export default function UserRepositories({
  login,
  onSelect = (f) => f,
}: {
  login: string;
  onSelect: (f: string) => void;
}): React.ReactElement {
  console.log('dsdsd', login, process.env.GH_TOKEN);

  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={({ data }) => {
        console.log('dd', login, data);
        return (
          <RepoMenu repositories={data} login={login} onSelect={onSelect} />
        );
      }}
    />
  );
}
