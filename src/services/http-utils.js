import "isomorphic-fetch";

export const GET = "GET";
export const parseJSON = (response) => response.json();
export const fetchJSON = (
  url,
  method = GET,
  headerOptions = {},
  body = false
) => {
  const options = {
    method,
    headers: headerOptions,
  };

  if (body && method !== GET) {
    options.body = JSON.stringify(body);
  }

  return fetch(url, options).then(parseJSON);
};
