import { AgGridFormatter, AppAuthRouteConfig, AppCoreConfig, AppEnvironmentConfig, AppNotification, StoreAdminConfiguration } from "@app/models";
import { NotificationsConfigService } from "../core/services/notifications-config.service";
import { DefaultRouteConfigService } from "./default-route-config.service";
import { EnvironmentConfigService } from "./environment-config.service";
import { InjectionToken } from "@angular/core";
import { DateFormatterService } from "../features/ag-grid/services/date-formatter.service";
import { CurrencyFormatterService } from "../features/ag-grid/services/currency-formatter.service";

/**
 * Kalgudi core library configuration object.
 */
export const APP_CONFIG: AppCoreConfig = {
  environment: EnvironmentConfigService,
  notification: NotificationsConfigService,
  routeConfig: DefaultRouteConfigService,
  dateFormatter: DateFormatterService,
  currencyFormatter: CurrencyFormatterService,
};

// App injection tokens
export const KL_ENV               = new InjectionToken<AppEnvironmentConfig>('KL_ENV');
export const KL_NOTIFICATION      = new InjectionToken<AppNotification>('KL_NOTIFICATION');
export const KL_ROUTE_CONFIG      = new InjectionToken<AppAuthRouteConfig>('KL_ROUTE_CONFIG');

// Config for the ag grid
export const STORE_ADMIN_CONFIG = new InjectionToken<StoreAdminConfiguration>('STORE_ADMIN_CONFIG');

export const AG_GRID_DATE_FORMATTER = new InjectionToken<AgGridFormatter>('AG_GRID_DATE_FORMATTER');

export const AG_GRID_CURRENCY_FORMATTER = new InjectionToken<AgGridFormatter>('AG_GRID_CURRENCY_FORMATTER');

export const TOKEN_REGISTRY: any = {
  'AG_GRID_DATE_FORMATTER': AG_GRID_DATE_FORMATTER,
  'AG_GRID_CURRENCY_FORMATTER' : AG_GRID_CURRENCY_FORMATTER,
} as const;