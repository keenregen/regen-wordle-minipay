export const fetcher = async (...args: any) => {
  const res = await fetch([...args] as any, { cache: 'force-cache' });
  return await res.json();
};

export const fetcherWithNoCache = async (...args: any) => {
  const res = await fetch([...args] as any, { cache: 'no-cache' });
  return await res.json();
};
