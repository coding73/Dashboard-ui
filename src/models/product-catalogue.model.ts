import { Attachment } from './social.model';
import { AppDealsWith, AppUserBasicDetails } from './user.model';

export interface StoreProductCommon {

  baseCategory?: StoreProductBaseCategory;
  categories?: StoreProductCategory[];
  category?: string;

  productTitle?: string;

  languageId?: string;
  languageName?: string;

  subModule?: string;

  isPublished?: boolean;
  isForReview?: boolean;
  isReviewAccepted?: boolean;
  isReviewInProgress?: boolean;
  isFarmStore?: boolean;

  productType?: string;
  shelflife?: string;
  description?: string;

  tags?: string;
  keywords?: string;

  baseSmartElements?: StoreBaseSmartElements;

  makingProcess?: string;
  uses?: string;
  disclaimers?: string;
  precautions?: string;
  packagingDetails?: string;
  nameInOtherLanguage?: string;
  specification?: string;
  otherInfo?: string;
  crop?: StoreProductIdValue[];
  dosage?: Dosage[];
  aka?: StoreProductAka[];
  madeOf?: StoreProductMadeOf[];
  nutrients?: TypeValueMap[];
  qualityCheck?: TypeValueMap[];
  packagingDimensions?: StoreProductPackagingDimension[];
  frequentlyBroughtTogether?: FrequentlyBroughtTogether[];
  attachments?: Attachment2[];
  videoLinks?: VideoLink[];

  s3Path?: string;

  createdTS?: string;
  LUT?: string;

  sellerType?: string;

  storeType?: string;

  createdBy?: AppUserBasicDetails;
  manufacturerDetails?: AppUserBasicDetails;
  supportedBy?: AppUserBasicDetails[];
  updatedBy?: AppUserBasicDetails;
}

export interface StoreProduct extends StoreProductCommon {

  baseProduct?: StoreBaseProductBasicDetails;
  baseCategory: StoreProductBaseCategory;
  categories?: StoreProductCategory[];
  category?: string;

  languageId?: string;
  languageName?: string;

  subModule?: string;

  isPublished?: boolean;
  isForReview?: boolean;
  isReviewAccepted?: boolean;
  isReviewInProgress?: boolean;
  isFarmStore?: boolean;

  productType?: string;
  shelflife?: string;
  description?: string;

  tags?: string;
  keywords?: string;

  makingProcess?: string;
  uses?: string;
  disclaimers?: string;
  precautions?: string;
  packagingDetails?: string;
  nameInOtherLanguage?: string;
  specification?: string;
  otherInfo?: string;

  aka?: StoreProductAka[];
  madeOf?: StoreProductMadeOf[];
  nutrients?: TypeValueMap[];
  qualityCheck?: TypeValueMap[];
  packagingDimensions?: StoreProductPackagingDimension[];
  attachments?: Attachment2[];
  videoLinks?: VideoLink[];

  s3Path?: string;

  createdTS: string;
  LUT?: string;

  createdBy: AppUserBasicDetails;
  manufacturerDetails?: AppUserBasicDetails;
  supportedBy?: AppUserBasicDetails[];
  updatedBy?: AppUserBasicDetails;
}

export enum StoreSellerTypes {
  MANUFACTURER = 'MANUFACTURER',
  RESELLER = 'RESELLER',
  SERVICE_PROVIDER = 'SERVICE_PROVIDER',
}

export interface StoreBaseProductBasicDetails {
  productId: string;
  productName?: string;

  baseCategory?: StoreProductBaseCategory;
  attachments?: AttachmentCategory;
  storeType?: StoreType;
  manufacturerDetails?: any;
  resellerDetails?: any
}

export interface AttachmentCategory {
  type: string;
  attachments: Attachment[];
}

export interface AvailableStock {
  unit: string;
  value: number;
}


export interface StoreBaseProduct extends StoreProductCommon {
  VProductId: string;
  VProductName: string;
  unspscId: string;
  unspscName: string;

  reviewInProgress?: boolean;

  unspsc?: string;
  baseCategory?: StoreProductBaseCategory;
  category?: string;

  tradeSpecifications?: [];
}

export interface StoreProductLevel1 extends StoreProduct {
  productLevel1Id: string;
  level1ShortId?: string;
  productLevel1Title: string;
  variety?: StoreBaseProduct;
}

export interface StoreProductLevel2 extends StoreProductLevel1 {
  productLevel2Id: string;
  productLevel2Title: string;
  level2ShortId?: string;

  level3ProductsList: StoreProductLevel3[];

  approxDeliveryTime?: string;

  masterLUT?: string;

  languageVersions?: string[];

  reviewedBy?: AppUserBasicDetails;
  reviewedOn?: string;
  resellerDetails?: AppUserBasicDetails;
  lastRejectReason?: string;
  traceabilityPageId?: string;
  traceabilityPageTitle?: string;
}

export interface StoreProductLevel3 {

  productLevel1Id?: string;
  productLevel1Title?: string;
  productLevel2Id?: string;
  productLevel2Title?: string;
  productLevel3Id?: string;
  productLevel3Title?: string;

  resellersCount?: number;

  languageId?: string;
  languageName?: string;

  orderType?: string;

  attachments?: StoreProductLevel3Attachments;

  smartElements?: StoreBaseSmartElements;

  skuSpecifications?: string;

  mrp?: number;
  pricePerUnit?: number;

  isPublished?: boolean;
  isForReview?: boolean;
  isReviewAccepted?: boolean;
  isReviewInProgress?: boolean;
  isBulkOrder?: boolean;
  freeShippingEligible?: boolean;

  termsAndConditions?: string;

  shippingDetails?: StoreProductShippingDetails;
  handlingDetails?: StoreProductCostTermsDetails;
  packagingDetails?: StoreProductCostTermsDetails;
  taxDetails: TaxDetails;

  createdBy?: AppUserBasicDetails;
  updatedBy?: AppUserBasicDetails;
  reviewedBy?: AppUserBasicDetails;

  reviewedOn?: string;
  LUT?: string;
  createdTS?: string;

  bulkMasterReqId?: string;
  bulkReqId?: string;

  sellerType?: string;

  s3Path?: string;

  requirementId?: string;
  quotationId?: string;
  selectedSKU?: string[];
}

export interface Dosage {
  volume?: string;
  unit?: string;
  hectare?: string;
  crop?: StoreProductIdValue;
  pest?: string;
}

export interface StoreProductIdValue {
  productId: string;
  productName: string;
  [key: string]: any;
}

export interface TaxDetails {
  sgst: number;
  cgst: number;
}

interface StoreProductCostTermsDetails {
  cost?: string | number;
  terms?: string;
}

export interface StoreProductShippingDetails extends StoreProductCostTermsDetails {
  dimension?: Dimension;
  weight?: ShippingWeight;
}

export interface ShippingWeight {
  value: number;
  unit: string;
}

export interface StoreBaseSmartElements {
  color?: CommonSmartElement;
  diameter?: CommonSmartElement;
  setCount?: CommonSmartElement;
  shape?: CommonSmartElement;
  sizeByName?: CommonSmartElement;
  sizeByNumber?: CommonSmartElement;
  smartLabel?: CommonSmartElement;
  weight?: CommonSmartElement;
  dimensions?: DimensionSmartElement;
}

export interface CommonSmartElement {
  type?: string;
  units?: string[];
  enabled?: boolean;
  unit?: string;
  value?: string | number;
}

export interface DimensionSmartElement extends CommonSmartElement {
  height?: CommonSmartElement;
  width?: CommonSmartElement;
  length?: CommonSmartElement;
  diameter?: CommonSmartElement;
  circumference?: CommonSmartElement;
}

export interface SetCount {
  value: string;
  unit: string;
}

export interface Dimension {
  height: any;
  width: any;
  length: any;
  units: any[];
}

export interface StoreProductCategory {
  mainCategory: StoreProductCategoryTo;
  subCategory1?: StoreProductCategoryTo;
  subCategory2?: StoreProductCategoryTo;
  subCategory3?: StoreProductCategoryTo;
}
export interface StoreProductCategoryTo {
  id: string;
  value: string;
}

export interface VideoLink {
  title?: string;
  url?: string;
}

export interface Attachment2 {
  type?: string;
  attachments?: Attachment[];
}

export interface StoreProductLevel3Attachments {
  attachments: Attachment[];
}

export interface StoreProductPackagingDimension {
  value?: string;
}

export interface FrequentlyBroughtTogether {
  value?: string;
}

export interface TypeValueMap {
  type?: string;
  value?: string;
}

export interface StoreProductMadeOf {
  value?: string;
  product?: StoreProductIdValue;
}

export interface StoreProductAka {
  language?: string;
  name?: string;
}

export interface StoreProductBaseCategory {
  id: string;
  value: string;
  level3Count?: number;
}

export interface StoreProductCatalogueIdMap {
  baseProduct?: StoreBaseProduct;

  productLevel1Id?: string;
  productLevel1Title?: string;

  productLevel2Id?: string;
  productLevel2Title?: string;

  productLevel3Id?: string;
  productLevel3Title?: string;
  languageId?: string;
}


export interface StoreProductBulkOrder {
  CT?: string;
  LUT?: string;
  reqId?: string;
  stateInfo?: StateInfo;
  reqDetails?: ReqDetails;
  shgDetails?: AppUserBasicDetails;
  masterReqId?: string;
  productList?: StoreProductLevel3[];
  requestedBy?: AppUserBasicDetails;
  negotiationDetails?: NegotiationDetails;
  negotiationThreadList?: NegotiationThreadList[];
}

export type BulkOrderMessageTypes = 'TEXT' | 'QUOTE' | 'INFO';

interface NegotiationThreadList {
  CT?: string;
  msg?: string;
  message?: string;
  quotationId?: string;
  quotedPrice?: string;
  type?: BulkOrderMessageTypes;
  sender?: AppUserBasicDetails;
  assistedBy?: AppUserBasicDetails;
}

interface NegotiationDetails {
  payment?: NegotiationTermsCharges[];
  shipping?: NegotiationTermsCharges[];
}

interface NegotiationTermsCharges {
  CT?: string;
  charges?: number;
  terms?: string;
  userDetails: AppUserBasicDetails;
}

interface ReqDetails {
  notes?: string;
  buyerName?: string;
  buyerEmail?: string;
  buyerMobile?: string;
  countryCode?: string;
  description?: string;
}

export interface StateInfo {
  actor?: string;
  actions?: Actions;
  entryTS?: string;
  expiryTS?: string;
  adminActions?: Actions;
  buyerActions?: Actions;
  currentState?: string;
  previousState?: string;
  previousAction?: string;
  targetedActors?: AppUserBasicDetails[];
  actionPerformed?: string;
}

interface Actions {
  bor_close?: string;
  bor_update?: string;
  bor_createSku?: string;
}

export interface BaseProductAutocomplete {
  unspscId: string;
  VProductId: string;
  UNSPSC: string;
  UNSPSCID: string;
  baseCategory: BaseCategory;
  VProductName: string;
  id: string;
  attachments?: AttachmentCategory;
  storeType?: StoreType;
}

export interface BaseCategory {
  level3Count?: number;
  listOfLevel2Cards?: any[];
  id: string;
  value: string;
}

export interface IngredientsAutocomplete {
  product?: IngredientProduct;
  value?: string;
}

export interface IngredientProduct {
  productId: string;
  productName: string;
}

export interface DosageAutocomplete {
  crop?: StoreProductIdValue;
  volume?: string;
  unit?: string;
  hectare?: string;
  pest?: string;
}

export interface Quotation {
  quotationId: string;
  lastQuotedPrice?: string;
  negotiationThreadList: NegotiationThreadList[];
  quotedBy: AppUserBasicDetails;
  stateInformation: StateInfo;
  termsDetails: TermDetails;
  updatedTS?: string;
}

interface TermDetails {
  shippingTerms: string;
  tradeTerms: string;
  updatedBy: AppUserBasicDetails;
  updatedTS?: string;
  assistedBy?: AppUserBasicDetails;
}

// export declare type StoreType = 'FARM_STORE' | 'BIZ_STORE' | 'CONSUMER_STORE';

export enum StoreType {
  BIZ_STORE      = 'BIZ_STORE',
  FARM_STORE     = 'FARM_STORE',
  CONSUMER_STORE = 'CONSUMER_STORE',
  SHAKTIMAN      = 'SHAKTIMAN',
  CMP_STORE = "CMP_STORE"
}

export enum StoreTypeJSON {
  FARM_STORE = 'farmer',
  BIZ_STORE = 'biz',
  CONSUMER_STORE = 'consumer'
}

export enum StoreTypePreview {
  FARM_STORE = 'farmer',
  BIZ_STORE = 'trade',
  CONSUMER_STORE = 'storefront'
}

export enum BaseProductTypes {
  BASE_PRODUCT = 'farmvproduct',
  VARIETY = 'VARIETY',
  DERIVATIVE = 'DERIVATIVE'
}

export interface AppStoreProduct {
  createdTS?: string;
  LUT?: string;
  description?: string;
  subCategories?: string;
  productId_level2?: string;
  productName_level2: string;
  approxDeliveryTime?: any;
  baseProductName?: string;
  sellerId?: string;
  sellerName?: string;
  sellerLocation?: string;
  level2published?: boolean;
  productId_level3?: string;
  productName_level3?: string;
  stores?: string;
  mrp?: string;
  pricePerSKU?: string;
  level3published?: boolean;
  isBulkOrder?: boolean;
  SKUSmartElements?: StoreBaseSmartElements;
  productPicURL_level3?: string;
  selectedSKU?: any[];
  shipping?: boolean;
  freeShippingEligible?: boolean;
  crops?: AppDealsWith[] ;
  productLevel2Title?: string;
  productLevel2Id?: string;
  productLevel3Id?: string;
  storeType?: string;
}
