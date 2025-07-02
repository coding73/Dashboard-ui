import { Type } from "@angular/core";
import { AppEnvironmentConfig } from "./app.environment.model";
import { AppNotification } from "./app-notification.model";
import { AppAuthRouteConfig } from "./app-auth-route.config.model";
import { AgGridFormatter } from "./ag-grid.model";

export interface PartialData {
  [key: string]: any;
}

/**
 * Hash map of string and any type. Where key is of string type
 * and value is of any type.
 */
export interface StringAnyMap extends PartialData {}

/**
 * Hash map of string and string type. Where both key and value both
 * are of string type.
 */
export interface StringStringMap extends PartialData {
  [key: string]: string;
}

/**
 * Hash map of string and object type. Where key is of string type and
 * value is object type.
 */
export interface StringObjectMap {
  [key: string]: object;
}

/**
 * Object containing Id value fields
 */
export interface IdValueMap {
  id: string;
  value: string;
}

export declare type IdValueList = Array<IdValueMap>;

export interface UnitValueMap {
  unit: string;
  value: string | number;
}

export declare type UnitValueList = Array<UnitValueMap>;

export interface LatLong {
  latitude?: string | number;
  longitude?: string | number;
  lat?: string | number;
  lng?: string | number;
  full_location?: string;
}

export interface AppGoogleLocationTo extends LatLong {
  adminLevel1: string;
  adminLevel2: string;
  countryName: string;
  locality: string;

  zipcode?: string;
  mandalId?: string;
  mandalName?: string;
  type?: string;
  pincode?: any;
}

export interface GooglePlace {
  street_number?: string;
  route?: string;

  administrative_area_level_1?: string;
  administrative_area_level_2?: string;
  administrative_area_level_3?: string;

  sublocality_level_1?: string;
  sublocality_level_2?: string;

  locality?: string;
  country?: string;
  postal_code?: string;

  latitude?: string | number;
  longitude?: string | number;
}

/**
 * Specifies App core configuration
 */
export interface AppCoreConfig {
  environment: Type<AppEnvironmentConfig>;
  notification: Type<AppNotification>;
  routeConfig: Type<AppAuthRouteConfig>;
  dateFormatter: Type<AgGridFormatter>;
  currencyFormatter: Type<AgGridFormatter>;
}