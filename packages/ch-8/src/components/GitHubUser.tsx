import React, { useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const GIT_HUB_LOGIN_KEY = 'github-login';

type GitHubUserPropsType = { login: string };
type GitHubUserDataType = {
  name: string;
  login: string;
  avatar_url: string;
  location: string;
};

const GitHubUser: React.FC<GitHubUserPropsType> = ({ login }) => {
  const [profile, setProfile] = useLocalStorage<GitHubUserDataType>(
    GIT_HUB_LOGIN_KEY,
    null
  );

  const [data, setData] = useState<GitHubUserDataType>(profile);

  useEffect(() => {
    if (!data || (profile && profile.login === data.login)) {
      return;
    }

    const { name, login: gitHubLogin, avatar_url, location } = data;

    setProfile({
      name,
      login: gitHubLogin,
      avatar_url,
      location,
    });
  }, [data]);

  useEffect(() => {
    if (!login || (data && data.login === login)) {
      return;
    }

    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log('data - set', data);
      })
      .catch(console.error);
  }, [login]);

  if (data) {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  }

  return <div>{login}</div>;
};

export default GitHubUser;
