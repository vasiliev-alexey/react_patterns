import React, { useState, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';

const RepositoryReadme = ({
  repo,
  login,
}: {
  repo: string;
  login: string;
}): React.ReactElement => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [markdown, setMarkdown] = useState('');
  const loadReadme = useCallback(
    async (login, repo) => {
      setLoading(true);
      const uri = `https://api.github.com/repos/${login}/${repo}/readme`;
      const { download_url } = await fetch(uri, {
        mode: 'cors',
        headers: new Headers({
          Authorization: `token ${process.env.GH_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        }),
      }).then((res) => res.json());

      const markdown = await fetch(download_url, {
        headers: new Headers({
          Authorization: `token ${process.env.GH_TOKEN}`,
        }),
      }).then((res) => res.text());
      setMarkdown(markdown);
      setLoading(false);
    },
    [repo, login]
  );
  useEffect(() => {
    if (!repo || !login) return;
    loadReadme(login, repo).catch(setError);
  }, [repo]);
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (loading) return <p>Loading...</p>;

  console.log('markdown', markdown);

  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default RepositoryReadme;
