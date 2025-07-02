/**
 * Defines environment structure.
 * ```
 * {
 *   "production": true,
 *   "awsAccessKey": 'YOUR_AWS_ACCESS-KEY',
 *   "s3BucketUrl": 'https://kalgudidata.s3.amazonaws.com',
 *   "consumerStoreDomain": 'https://kalgudi.com/store',
 *   "bizStoreDomain": 'https://bizstore.kalgudi.com',
 *   "farmerStoreDomain": 'https://farmstore.kalgudi.com',
 *   "domain": 'https://kalgudi.com',
 *   "restBaseUrl": 'https://kalgudi.com/rest/v1',
 *   "dirUrl": 'https://dir.kalgudi.com'
 * }
 * ```
 */
export interface AppEnvironmentConfig {

  readonly appId: string;
  readonly production: boolean;
  readonly development?: boolean;
  readonly awsAccessKey: string;
  readonly s3BucketUrl: string;

  readonly domain: string;
  readonly kalgudiDomain?: string;
  readonly coreDomain?: string;
  readonly adminDomain?: string;
  readonly storeDomain?: string;
  readonly dirUrl: string;
  readonly useHash?: boolean;

  readonly restBaseUrl: string;
  readonly restBaseUrlV2: string;
  // readonly kalgudiRestV2?: string;

  readonly googlePlacesApi: string;
  readonly firebaseApi?: string;

  readonly firebaseConfig?: KalgudiFireBaseConfig;

  readonly ssoConfig?: KalgudiSsoConfig;

  readonly dataDomainReplaceableConfig?: KalgudiDataDomainReplaceableConfig;

  readonly kalgudiRestV2?: string;

  readonly conserWaterKey?: string;

  readonly [key: string]: any;
}

export interface KalgudiFireBaseConfig extends Partial<Record<string, string>> {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  databaseURL?: string;
}

export interface KalgudiSsoConfig {
  clientId: string;
  authority: string;
  redirectUri: string;
  postLogoutRedirectUri: string;
}

export interface KalgudiDataDomainReplaceableConfig {
  replaceableDomainList: string[],
  replaceDomain: string
}