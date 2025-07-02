import { Injectable } from '@angular/core';
import { AppEnvironmentConfig, KalgudiSsoConfig, KalgudiDataDomainReplaceableConfig } from '@app/models';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentConfigService implements AppEnvironmentConfig {

  production: boolean;
  awsAccessKey: string;
  s3BucketUrl: string;
  domain: string;
  kalgudiDomain?: string;
  consumerStoreDomain?: string;
  bizStoreDomain?: string;
  farmerStoreDomain?: string;
  dirUrl: string;
  restBaseUrl: string;
  restBaseUrlV2: string;
  kalgudiRestV2?: string;
  googlePlacesApi: string;
  development?: boolean;
  appId: string;
  coreDomain?: string;
  adminDomain?: string;
  storeDomain?: string;
  conserWaterKey?: string;
  useHash?: boolean;
  ssoConfig?: KalgudiSsoConfig;
  dataDomainReplaceableConfig?: KalgudiDataDomainReplaceableConfig;

  constructor() {
    this.development                  = environment.development;
    this.production                   = environment.production;
    this.awsAccessKey                 = environment.awsAccessKey;
    this.s3BucketUrl                  = environment.s3BucketUrl;
    this.domain                       = environment.domain;
    this.kalgudiDomain                = environment.kalgudiDomain;
    this.dirUrl                       = environment.dirUrl;
    this.restBaseUrl                  = environment.restBaseUrl;
    this.restBaseUrlV2                = environment.restBaseUrlV2;
    this.coreDomain                   = environment.coreDomain;
    this.adminDomain                  = environment.adminDomain;
    this.storeDomain                  = environment.storeDomain;
    this.googlePlacesApi              = environment.googlePlacesApi;
    this.appId                        = environment.appId; 
    this.useHash                      = environment.useHash ? environment.useHash : false;
    this.ssoConfig                    = environment.ssoConfig;
    this.dataDomainReplaceableConfig  = environment.dataDomainReplaceableConfig;
  }
}
