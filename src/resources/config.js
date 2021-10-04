import {encode} from 'base-64';

const config = {
  siteUrl: 'https://slippery-terrain.localsite.io/wp-json/wc/v3/',
  wcCredentials:
    'consumer_key=ck_09a0e11edd750aad7ded9ab02e166de369d47d65&consumer_secret=cs_efa5bc2611508c06d80c0f7a699b055a707c7a06',
  liveLinkCredentials: `Basic ${encode('discussion:breezy')}`,
};

export default config;
