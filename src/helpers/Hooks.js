import { useState, useEffect } from 'react';

/* https://usehooks.com/useMedia/ */
export const useMedia = (queries, values, defaultValue) => {
  const mediaQueryLists = queries.map((q) => {
    q = q.replace('@media', '').trim();
    return window.matchMedia(q);
  });
  const getValue = () => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches);
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach((mql) => mql.addListener(handler));
    return () => mediaQueryLists.forEach((mql) => mql.removeListener(handler));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return value;
};
