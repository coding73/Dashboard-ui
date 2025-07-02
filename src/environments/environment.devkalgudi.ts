import { DEFAULT_ENVIRONMENT_NEW_DEV } from '@app/constants';
import { AppConfiguration } from '@app/models';

export const environment: AppConfiguration = {

    ...DEFAULT_ENVIRONMENT_NEW_DEV,

    production: false,
    useHash: false,
    awsAccessKey: ``,
    s3BucketUrl: `https://devawskalgudidata.s3.amazonaws.com`,
    dirUrl: `https://dir.devkalgudi.com`,
    kalgudiDomain: 'https://kalgudi.com',
    adminDomain: 'https://apmc.devkalgudi.com/admin',
    domain: 'https://apmc.devkalgudi.com',
    coreDomain: 'https://apmc.devkalgudi.com',
    restBaseUrl: `https://apmc.devkalgudi.com/rest/v1`,
    restBaseUrlV2: 'https://apmc.devkalgudi.com/v2',
    appId: 'SAM_FPO',
    development: true,
    APP_NAME: `SAM_FPO`,
    kalgudiUrl: `https://devkalgudi.vasudhaika.net`,
    googlePlacesApi: 'AIzaSyAM1rm3Chd60HQyQ6SwsJ0L_NIA5W7OBCY',
    appConfig: {
        title: 'APMC',
        appLogoUrl: '',
        appLogoUrlMd: '',
        appLogoSm: '',
        termsAndConditionsLink: '',
    },
};
