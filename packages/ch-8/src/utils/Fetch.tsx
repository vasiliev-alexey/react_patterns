import React from 'react';
import useFetch from '../hooks/useFetch';

const Fetch = ({
  uri,
  renderSuccess,
  loadingFallback = <p>loading...</p>,
  renderError = (error: Error) => <pre>{JSON.stringify(error, null, 2)}</pre>,
}: {
  uri: string;
  renderSuccess: (data: unknown) => React.ReactElement;
  loadingFallback?: React.ReactElement;
  renderError?: (error: Error) => React.ReactElement;
}): React.ReactElement => {
  const { loading, data, error } = useFetch(uri);
  if (loading) return loadingFallback;
  if (error) return renderError(new Error(error));

  if (data) return renderSuccess({ data });
};

export default Fetch;
