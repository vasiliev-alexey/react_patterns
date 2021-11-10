import { useEffect, useState } from 'react';

function useFetch<T>(uri: string): {
  loading: boolean;
  data: T;
  error: string;
} {
  const [data, setData] = useState<T>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(uri, {
          headers: new Headers({
            Authorization: `token ${process.env.GH_TOKEN}`,
          }),
        });
        const json = await res.json();

        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [uri]);

  return {
    loading,
    data,
    error,
  };
}

export default useFetch;
