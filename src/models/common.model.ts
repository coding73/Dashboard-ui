import { AppEnvironmentConfig, AppGoogleLocationTo, PartialData } from '@app/models';

export interface Configuration {
  title: string;
  appLogoUrl: string;
  appLogoUrlMd: string;
  appLogoSm: string;
  termsAndConditionsLink?: string;
}

export interface AppConfiguration extends AppEnvironmentConfig {
  appConfig: Configuration;
}

export interface UIMenu {
  id?: string;
  title?: string;
  matIcon?: string;
  defaultProfilePic?: string;
  faIcon?: string;
  iconColor?: string;
  svgIcon?: string;
  toolTip?: string;
  subMenu?: UIMenu[];
  routerLink?: string;
  queryParams?: {
    [key: string]: string;
  };
  aLink?: string;
  selected?: boolean;
  visible?: boolean;
  hide?: boolean;
  disabled?: boolean;
  iconSize?: number;
  hideMobile?: boolean;
  clickAction?: any;
}

export interface IconInfo {
  name: string;
  path: string;
}

export interface ProductStat {
  id: string;
  title: string;
  value: number;
}

export interface AppDialogResult {
  accepted?: boolean;
  data: PartialData | PRODUCT;
}

export interface AppDialogConfig {
  title: string;
  label?: string;
  pageId?: string;
  message?: string;
  matIcon?: string;
  faIcon?: string;
  iconColor?: string;
  acceptButtonTitle?: string;
  rejectButtonTitle?: string;

  data: PartialData;

  [key: string]: any;
}

export interface RouteQueryParams extends PartialData { }

export interface GettinStartedItem {
  title: string;
  id: string;
  setupState: boolean;
  skip: boolean;
  disabled: boolean;
  readonly: boolean;
}

export interface RouteQueryParams extends PartialData {

}

export interface S3PolicyPathCategoryMap {
  category: string;
  subPath: string;
}

export interface S3UploadNamePathMap {
  fileName: string;
  filePath: string;
  fileType?: string;
}

export interface S3PolicyMap {
  SHARE: S3PolicyPathCategoryMap;
  QA: S3PolicyPathCategoryMap;
  STORE_PRODUCTS: S3PolicyPathCategoryMap;
  PROFILE_PIC: S3PolicyPathCategoryMap;
  COVER_PIC: S3PolicyPathCategoryMap;
  BUSINESS: S3PolicyPathCategoryMap;
  BRAND: S3PolicyPathCategoryMap;
  DEFAULT: S3PolicyPathCategoryMap;
  IMAGE_SEARCH: S3PolicyPathCategoryMap;
  VOICE_SEARCH: S3PolicyPathCategoryMap;
  ROBOCALL: S3PolicyPathCategoryMap;
  SHAPE_FILE: S3PolicyPathCategoryMap;
}
export interface S3PolicyPathCategoryMap {
  category: string;
  subPath: string;
}

export interface S3UploadToken {
  filesList: FileMetaData[];
}
export interface FileMetaData {
  fileName: string;
  contentType: string;
  presignedURL?: any;
}

export interface AppPageAddNewUserPayload {
  name?: string;
  mobileTelecomCode?: string;
  email?: string;
  profileTypeId?: string;
  profileTypeName?: string;
  businessTypeId?: string;
  businessTypeName?: string;
  nativeBusinessTypeId?: string;
  nativeBusinessTypeName?: string;
  mobileNumber?: string;
  googleLocationTo?: AppGoogleLocationTo;
  sourceFrom?: string;
  pageId?: string;
  pageTitle?: string;
}

export interface Product {
  productLevel3Title: string;
  productLevel3Id: string;
  categoryId: string;
  units: any[];
  selected: boolean;
  attachments: { attachments: { url: string }[] }[];
}

export interface CategoryWiseData {
  categoryName: string;
  paginatedProducts: Product[];
}
export interface IdValueMaps {
  id: string;
  value: string;
}

/**
 * Bank details 
 */
export interface BANK_DETAILS {
  accountId: string;
  bankAccountNumber: number;
  bankName: string;
  transactionId: string;
  transactionType: string;
};

/**
 * Add product list
 */
export interface PRODUCT {
  attachments: any;
  baseUnitPrice: number;
  smartElements: {
    weight: {
      value: any;
      enabled: any;
      units: any;
      unit: any;
    }
  };
  unitId: string | number;
  units: string | any;
  cessPercentage: number;
  priceWithoutTax: number;
  pricePerUnit: number;
  storeName: string | any;
  batchNo: number | string;
  mfgDate: string;
  expDate: string;
  discountPercentage: number;
  discountPerUnit: number;
  itemAfterDiscount: number;
  overallDiscountForAllQty: number;
  overallDiscountPerUnit: number;
  overallDiscountPercentage: number;
  isExempted: boolean;
  isPriceApplied: boolean;
  hsnCode: string;
  taxDetails: {
    cgst: number;
    sgst: number;
    igst: number;
  };
  cessValuePerUnit: number;
  cessTotalQtyValue: number;
  categoryId: string | number;
  categoryName: string | any;
  productQuantity: number;
  productName: string | any;
  productId: string | number;
  productDiscount: number;
  productLevel1Id: string;
  productLevel1Title: string;
  productLevel2Id: string;
  productLevel2Title: string;
  productLevel3Id: string;
  productLevel3Title: string;
  cgstValuePerUnit: number;
  sgstValuePerUnit: number;
  igstValuePerUnit: number;
  cgstTotalQtyValue: number;
  sgstTotalQtyValue: number;
  igstTotalQtyValue: number;
  amount: number;
  productGST: number;
}

export interface LOCATION {
  countryId: string;
  countryName: string;
  countryShortName: string;
  districtId: string;
  districtName: string;
  latitude: string;
  locationLong: string;
  locationShort: string;
  location_category_id: string;
  longitude: string;
  market_id: string;
  openerpCountryId: string;
  pincode?: string;
  placeId: string;
  placeName: string;
  regionId: string;
  regionName: string;
  stateId: string;
  stateName: string;
  [key: string]: any;
};

export interface TRANSACTION_DATA {
  customerTypeId: any;
  transactionDate: string;
  transactionMode: string;
  creditInterestRatePer: number | string;
  creditDueDays: number;
  creditDueDate: string | null | number;
  gstTradeType: string;
  assistanceType: string;
  supplierInvoiceId: string;
  supplierDate: string;
  isGstVerified: string;
  status: string;
  originTypeId: string;
  seller: {
    name: string;
    mobileNumber: string;
    emailId: string;
    profileKey: string;
    location: LOCATION;
    businessTypeId: string;
    businessTypeName: string;
    nativeBusinessTypeId: string;
    nativeBusinessTypeName: string;
    googleLocationTo: LOCATION | string;
    panNo: string;
    gstin: string;
    msme: string;
    login?: string;
    [key: string]: any;
  },
  buyer: {
    name: string;
    mobileNumber: string;
    emailId: string;
    profileKey: string;
    location: LOCATION;
    login?: string;
    businessTypeId: string;
    businessTypeName: string;
    nativeBusinessTypeId: string;
    nativeBusinessTypeName: string;
    googleLocationTo: LOCATION | string;
    panNo: string;
    gstin: string;
    msme: string;
    bankDetails: any;
    [key: string]: any;
  },
  bankDetails: {
    accountId: any;
    accountNumber: string | any;
    name: string;
    transactionId: string;
    transactionType: string;
    transactionDate: any;
  },
  productList: PRODUCT[],
  discountPercentage: number | string;
  discounts: number;
  charges: {
    transport: {
      vehicleType: string;
      vehicleNumber: string;
      driverMobileNumber: string;
      charges: any;
      transportGstValue: string | number;
      transportGstPercentage: any;
    };
    other: { name: string, value: any, chargeId: any }[],
    updates: any,
  },
  totalDiscount: any,
  paidAmount: any,
  taxAmount: any,
  productValue: any,
  transactionType: string,
  domainUrl: string,
  totalAmount: any,
  itemsValue: any,
  transactionStoreType: string,
  trDate: string,
  totalCessAmount: any,
  roundOffAmount: any,
  finYearId: any,
  totalTaxableValue: any,
  orderId: any,
  [key: string]: any;
};

export interface FinYear {
  endDate: string;
  finYear: string;
  finYearId: string | number;
  startDate: string;
};

export interface ProductAvailableQty {
  availableQuantity: string,
  hsnCode: string,
  visibleUnit: string
};

export interface ContraDetail {
  prefixName: string;
  prefixId: number;
  suffixNo: number;
  entryDate: string;
  accountName: {
    ledgerName: string;
    LedgerAccId: number;
  };
  LedgerAccId: number;
  ledgerName: string;
  credit: number | string;
  debit: number | string;
  narration: string;
  transContraId: number;
};

export interface ContraPayload {
  contraDetails: any[];
  userProfileKey?: string;
  businessName?: string;
  businessProfileKey?: string;
  userName?: string;
  prefixName?: string;
  narration?: string;
  entityId?: string;
  reason?: string;
  finYearId: number;
};

export enum PrefixSlabs {
  RECEIPTS = 'RE',
  JOURNAL = 'JV',
  PAYMENTS = 'PA',
  CONTRA = 'CO',
  BILL_WISE_SETTLEMENTS = 'BW',
  CREDIT_NOTE = 'CN',
  DEBIT_NOTE = 'DN',
}

export interface JournalDetail {
  prefixName: string;
  prefixId: number;
  suffixNo: number;
  entryDate: string;
  accountName: {
    ledgerName: string;
    LedgerAccId: number;
  };
  LedgerAccId: number;
  ledgerName: string;
  credit: number | string;
  debit: number | string;
  narration: string;
  transContraId: number;
};

export interface JournalPayload {
  journalDetails: any[];
  userProfileKey?: string;
  businessName?: string;
  businessProfileKey?: string;
  userName?: string;
  prefixName?: string;
  narration?: string;
  entityId?: string;
  reason?: string;
  finYearId: number;
};

export interface ContraDetails {
  ledgerName: string;
  debit: number;
  credit: number;
}

export interface TreeNode {
  name: string;
  total: number;
  children?: TreeNode[];
  level?: number;
  expanded?: boolean;
  parent?:any;
}

export interface TransReportPayload {
  accountName?: string;
  amount?: number;
  businessName: string;
  businessProfileKey: string;
  fromDate: string;
  isCredit: boolean;
  orderId?: string;
  reportName: string;
  toDate: string;
  transType: string;
}

export interface TransReportResponse {
  code: number;
  data: string;
  info: string;
}
