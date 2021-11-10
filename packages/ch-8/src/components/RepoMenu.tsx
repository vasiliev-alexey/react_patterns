import React, { useEffect } from 'react';
import { useIterator } from '../hooks/useIterator';
import RepositoryReadme from './RepositoryReadme';

export function RepoMenu({
  repositories,
  login,
  onSelect = (f) => f,
}: {
  repositories: { name: string }[];
  onSelect: (f: string) => void;
  login: string;
}): React.ReactElement {
  const [{ name }, previous, next] = useIterator(repositories);
  useEffect(() => {
    if (!name) return;
    onSelect(name);
  }, [name, onSelect]);
  return (
    <>
      <div style={{ display: 'flex' }}>
        <button onClick={previous}>&lt;</button>
        <p>{name}</p>
        <button onClick={next}>&gt;</button>
      </div>
      <RepositoryReadme login={login} repo={name} />
    </>
  );
}
