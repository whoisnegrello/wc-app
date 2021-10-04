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

export default {
  get,
};
