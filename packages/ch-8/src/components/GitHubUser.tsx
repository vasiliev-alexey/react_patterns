import React from 'react';
import Fetch from '../utils/Fetch';
import UserRepositories from './UserRepositories';

//const GIT_HUB_LOGIN_KEY = 'github-login';

type GitHubUserPropsType = { login: string };
interface GitHubUserType {
  name: string;
  login: string;
  avatar_url: string;
  location: string;
}

const UserDetails: React.FC<{ data: GitHubUserType }> = ({ data }) => {
  console.log('2222', data);

  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <p>sss</p>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}

        {data.location && <p>{data.location}</p>}
      </div>

      <UserRepositories
        login={data.login}
        onSelect={(repoName) => console.log(`${repoName} selected`)}
      />
    </div>
  );
};

// const GitHubUser: React.FC<GitHubUserPropsType> = ({ login }) => {
//   const { loading, data, error } = useFetch<GitHubUserDataType>(
//     `https://api.github.com/users/${login}`
//   );
//   if (loading) return <h1>loading...</h1>;
//   if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
//
//   return (
//     <div className="githubUser">
//       <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
//       <div>
//         <h1>{data.login}</h1>
//         {data.name && <p>{data.name}</p>}
//         {data.location && <p>{data.location}</p>}
//       </div>
//     </div>
//   );
// };

export const GitHubUser: React.FC<GitHubUserPropsType> = ({ login }) => {
  console.log('GitHubUser:', login);

  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
    />
  );
};

export default GitHubUser;
