import { useCallback, useMemo, useState } from 'react';

export function useIterator<T>(
  items: T[] = [],
  initialValue = 0
): [T, () => void, () => void] {
  const [i, setIndex] = useState(initialValue);
  const prev = useCallback(() => {
    if (i === 0) return setIndex(items.length - 1);
    setIndex(i - 1);
  }, [i, items.length]);
  const next = useCallback(() => {
    if (i === items.length - 1) return setIndex(0);
    setIndex(i + 1);
  }, [i, items.length]);
  const item = useMemo(() => items[i], [i, items]);
  return [item || items[0], prev, next];
}
