export const querystring = (search = window.location.search) => {
  const searchParams = new URLSearchParams(search);
  return searchParams;
};
