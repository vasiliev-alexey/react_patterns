import React, { useEffect, useState } from 'react';

type GitHubUserPropsType = { login: string };
type GitHubUserDataType = {
  name: string;
  login: string;
  avatar_url: string;
  location: string;
};

const GitHubUserLoading: React.FC<GitHubUserPropsType> = ({ login }) => {
  const [data, setData] = useState<GitHubUserDataType>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log('data - set', data);
      })
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading) {
    return <p>loading</p>;
  }
  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  if (!data) {
    return <></>;
  }

  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
};

export default GitHubUserLoading;
