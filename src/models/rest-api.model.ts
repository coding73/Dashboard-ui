import { AuthLoginResponse, SSOLoginResponse } from './auth.model';

export interface ApiResponseCommon {
  code: number;
  info?: any;
  data?: any;
  numFound?: any;
  error?: any;
  total?: number;
}

export interface ApiResponseCommonV1 extends ApiResponseCommon {
  data: string;
}

export interface ApiResponseCommonListData {
  count: number;
  results: any[];
}

export interface ApiResponseCommonList extends ApiResponseCommon {
  data: ApiResponseCommonListData;
}

export interface AuthApiResponse extends ApiResponseCommon {
  data: AuthLoginResponse;
}

export interface SSOAuthApiResponse extends ApiResponseCommon {
  data: SSOLoginResponse;
}
