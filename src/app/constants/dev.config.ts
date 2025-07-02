import { AppEnvironmentConfig } from "@app/models";

const NEW_DEV_KALGUDI_HOST = window.location.host.includes('localhost') ? 'devkalgudi.com' : window.location.host;

export const DEFAULT_ENVIRONMENT_NEW_DEV: AppEnvironmentConfig = {
  development: true,
  production: false,
  useHash: false,
  awsAccessKey: ``,
  s3BucketUrl: `https://devawskalgudidata.s3.amazonaws.com`,
  dirUrl: `https://dir.devkalgudi.com`,
  kalgudiDomain: `https://${NEW_DEV_KALGUDI_HOST}`,
  coreDomain: `https://devkalgudi.com`,
  domain: `https://${NEW_DEV_KALGUDI_HOST}`,
  restBaseUrl: `https://${NEW_DEV_KALGUDI_HOST}/rest/v1`,
  restBaseUrlV2: `https://${NEW_DEV_KALGUDI_HOST}/v2`,
  appId: 'APMC',
  googlePlacesApi: 'AIzaSyAM1rm3Chd60HQyQ6SwsJ0L_NIA5W7OBCY',

};