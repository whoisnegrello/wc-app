import config from './config';

const get = async url => {
  const res = await fetch(`${url}`, {
    headers: {
      Authorization: config.liveLinkCredentials,
    },
  });
  const resJSON = await res.json();
  return resJSON;
};

const post = async (url, body) => {
  const req = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: config.liveLinkCredentials,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const reqJSON = await req.json();

  return reqJSON;
};

export default {
  get,
  post,
};
