import { IdValueMap, AppGoogleLocationTo, LatLong, UnitValueMap } from './core.model';
import { AttachmentCategory, AvailableStock, BaseCategory, StoreProductIdValue } from './product-catalogue.model';
import { Attachment } from './social.model';

// import { LatLong } from './misc.model';
export interface AppUser {
  profileKey: string;
  profilePicUrl: string;
  coverPicUrl?: string;
  firstName: string;
  lastName?: string;
  emailId?: string;
  altemailId?: string;
  mobileNo?: string;
  mobileCode?: string;
  alternateMobileNo?: string;
  businessTypeName?: string;
  isPanVerified?: boolean;
  defaultBusinessKey?: string;
  dateOfBirth?: string;
  gender?: string;
  education?: string;
  uniqueIdentificationNo?: string;
  lstOfUserBusinessDetailsInfo: AppUserBusinessDetails[];
  lstOfFarmerMembershipDetails?: AppUserFarmerMembershipDetails[];
  lstOfFarmerEquipmentDetails?: AppUserFarmerEquipmentDetails[];
  isAlternateWhatsapp?: boolean
  languageId?: string;
  languageName?: string;

  connectsCount?: number;

  buttonType?: string;
  isConnected?: string;
  additionalBizDetails?: AppUserAdditionalBizDetails;
  address2?: string;

  isEffectedBizKey?: string;
  lstOfUserEducationDetails?: AppUserEducation[];
  prfCreatedDate?: string;
  prfModifiedDate?: string;
  isBlocked?: boolean;
  languageLocalName?: string;
  currencySymbol?: string;
  currencyCode?: string;
  location?: string;
  is_company_account_created?: boolean;
  isActive?: boolean;
  isVerified?: boolean;
  isPreCreated?: boolean;
  membersCount?: number;
  aboutMe?: string;
  connectsInfo?: any;
  bizTypeCount?: any;
  otherAddress?: string;
  emailUnsubscribed?: boolean;
  defaultEntityDetails?: AppUserDefaultEntity;
  isContentPublisher?: boolean;
  listOfPageDetails?: AppUserPageDetails[];
  isScriptCreated?: boolean;
  sourceFrom?: string;
  expressSignup?: boolean;
  defaultLocationUpdated?: boolean;
  fpoSeasonalCropMembers?: number;
  fpoSeasonalCropAcreage?: number;

  employeeProfileTo?: EmployeeProfileTo;

  dealsWith?: AppDealsWith[];
  farmerLandDetails?: AppFarmerLandDetails;
  distance?: number;
  establishedSince?: string;
  farmers?: number;
  employees?: number;
  shgActivity?: string;
  productCategory?: string[];
  villages?: number;
  boardOfMembers?: BoardOfMember[];
  fpoAvgLand?: UnitValueMap;
  zipCode?: string;
  fpoAdditionalDetails?: FPOAdditionalDetails;
  mainActivity?: string;
  assets?: string[];
  totalTurnOver?: string;
  dateOfBoardMeeting?: string;
  registrationNo?: string;
  registrationCertificate?: string;
  registeredUnder?: string;
  // promotingAgency?: any;
  promotingAgency?: string[];
  sourcesOfFunding?: string[];

  registrations?: FPORegistrations;
  bannerURL?: string;
  selected?: boolean;
  locationLong?: string;
  locationTo?: AppLocation;
  useWhatsapp?: boolean;
  ageGroup?: string;
  state?: string;
  sourcePortal?: string;
  pinCode?: string;
  apmcDetails?: APMCDetails;
  associatedWith?: string;
  samunnatiFpoDetails?: SamunnatiProfileDetails;
  sammunatiFarmerDetails?: SamunnatiFarmerDetails;
  farmerDetailedInfo?: SamunnatiFarmerDetails;

  groupId?: string;
  searchForPages?: boolean;
  isMember?: boolean;
  userRoles?: string;
  acreageDetails?: AcreageDetails;
  profileCompletionPercentage?: number;
}

export interface AppSellerConfig {
  profileKey?: string;
  sellerConfigurationId?: string;
  companyBusinessName?: string;
  storeName?: string;
  isAggrementAccepted?: boolean;
  productCategory?: string;
  address?: any;
  taxDetails?: SellerTaxDetails;
  bankAccount?: BankAccount;
  LUT?: string;
  supportedBy?: AppUserBasicDetails[];
  sellerLicenses?: any[];
  hasLabel?: boolean;
}

export interface SellerTaxDetails {
  panNumber?: string;
  gstinNumber?: string;
}

export interface BankAccount {
  accountHolderName?: string;
  acountType?: string;
  accountNumber?: string;
  ifscCode?: string;
  bankName?: string;
  bankAttachment?: string;
}

export interface AppFarmerLandDetails {
  total: number;
  unit: string;
  farmDetails?: AppFarms[];
  lands?: AppFarmerLand[];
}

export interface AppFarms {
  CT?: string;
  LUT?: string;
  farmId?: string;
  farmName?: string;
  description?: string;
  FSAFarmId?: string;
  total?: number;
  unit?: string;
  lands?: AppFarmerLand[];
}

export interface AppFarmerLand {
  landId?: string;
  location?: AppLocation;
  landSize?: UnitValueMap;
  waterLevel?: UnitValueMap;
  soilType?: string;
  geoFences?: GeoFenceDetails[];
  conserWaterAreaName?: string;
  landName?: string;
  shareId?: string;
  irrigationType?: string;
  salinity?: string;
  salinityLevel?: string;
  attachments?: Attachment[];
  landCoverType?: string;
  fieldNotes?: string;
  soilHealthCard?: Attachment[];
  CT?: string;
  LUT?: string;
  fsaFieldId?: string;
  fasTractId?: string;
  isUploadedFromShapeFile?: boolean;
  LandType?: string
  surveyNumber?: string
}

export interface GeoFenceDetails {
  latitude?: number;
  longitude?: number;
  lat?: string | number;
  lng?: string | number;

  coords?: LatLong[];
  areaInAcres?: number;
}

export interface AppDealsWith {
  availableStock: AvailableStock;
  productId: string;
  productName: string;
  attachments: any;
  storeType: string;
  baseCategory: BaseCategory;
  baseProductId: string;
  baseProductName: string;
  baseProductAttachments: AttachmentCategory;
  pageId?: string;
  farmingFarmType?: string;
  sinceYear?: string;
}

export interface AppFarmingHistory {
  profileKey?: string;
  CT?: string;
  id?: string;
  LUT?: string;
  year: number;
  season: string;
  landId?: string;
  crop: StoreProductIdValue;
  variety: StoreProductIdValue;
  landSize?: UnitValueMap;
  totalYield?: UnitValueMap;
  farmingType?: string[];
  title?: string;
  flag?: string;
  land?: AppFarmerLand;
  pageId?: string;
  seasonTimeFrame?: {
    from: string;
    to: string;
  };
  expectedYield?: UnitValueMap;
  actualYield?: UnitValueMap;
  farmers?: number;
  acres?: number;
  harvestingMonth?: string;
  noOfliveStock?: number;
  remarks?: string;
  cropCalendarId?: string;
  cropCalendarTitle?: string;
  farmingFarmType?: string;
  harvestingDates?: harvestingDates[];
}

export interface harvestingDates {
  startDate: string;
  endDate: string;
}

export interface AppUserBasicDetails {
  firstName?: string;
  profileKey?: string;
  businessKey?: string;
  businessName?: string;
  businessTypeName?: string;
  profilePicURL?: string;
  profilePicUrl?: string;
  location?: string;
  locationLong?: string;
  locationDetails?: AppLocation;
  latLong?: string;
  description?: string;
  lstOfUserBusinessDetailsInfo?: AppUserBusinessDetails[];
  email?: string;
  mobile?: string;
  coverPicUrl?: string;
  distance?: number;
  isMember?: boolean;
  userRoles?: string;
}

export interface AppUserShortProfile {
  profileKey: string;
  profilePicUrl: string;
  password: string;
  firstName: string;
  mobileNo: string;
  currentBusinessUUID: string;
  profileUUID: string;
  languageId: string;
  languageName: string;
  lstOfBusinessInfo: AppUserBusinessDetails[];
  mobileTelecomCode: string;
  isMember?: boolean;
  userRoles?: string;
}

export interface AppUserAdditionalBizDetails {
  profileTypeId?: string;
  businessTypeId?: string;
  profileTypeName?: string;
  businessTypeName?: string;
  industryId?: string;
  constructedBusinessTypeName?: string;
  nativeBusinessTypeId?: string;
  nativeBusinessTypeName?: string;
  approved?: boolean;
  profileTypeDetails: ProfileTypeDetails;
}

export interface AppUserBusinessDetails {
  businessKey?: string;
  businessName: string;
  businessUUID?: string;
  businessTypeId?: string;
  businessTypeName?: string;
  lstOfProducts?: AppProduct[];
  locationTo?: AppLocation;
  nativeBusinessTypeId?: string;
  nativeBusinessTypeName?: string;
  lstOfBusinessAwardDetails?: AppUserAwardDetails[];
  lstOfBusinessCertificationDetails?: AppUserCertificateDetails[];
  lstOfUserExperienceDetails?: AppUserExperienceDetails[];
  lstOfBusinessMembershipDetails?: AppUserBusinessMembershipDetails[];
  lstOfBusinessTaxDetails?: AppUserBusinessTaxDetails[];
  listOfLicenses?: AppUserLicenceDetails[];
  businessPaymentMethodDetails?: AppUserBusinessPaymentMethodDetails;
  lstOfUserLandDetails?: AppUserLandDetails[];

  prfCreatedDate?: string;
  prfModifiedDate?: string;
  licenseNumber?: string;
  wikipediaLink?: string;
  facebookLink?: string;
  linkedInLink?: string;
  twitterLink?: string;

  establishmentDate?: string;
  noOfEmployees?: string;
  orgRegNumber?: string;
  orgType?: string;
  lstOfSpecificFields?: AppUserSpecificFields[];
  address1?: string;
  mobileNumber?: string;
  emailId?: string;
  website?: string;
  briefDescription?: string;
  BusinessSpecificDetailsTo?: any;
  industryName?: string;
  industryId?: string;
}

export interface AppUserFarmerMembershipDetails {
  organization?: string;
  organizationName?: string;
  memberRole?: string;
  farmerMembershipId?: string;
  sinceYear?: string;
  createdDate?: string;
  updatedDate?: string;
  id?: string;
}

export interface AppUserFarmerEquipmentDetails {
  equipmentName?: string;
  equipmentCapacity?: string;
  equipmentId?: string;
}

export interface AppUserSpecificFields {
  fieldId: string;
  fieldName: string;
  fieldValue: string;
}

export interface AppUserExperienceDetails {
  company?: string;
  description?: string;
  endYear?: string;
  startYear?: string;
  jobDesignation?: string;
  experienceId?: string;
  industryId?: string;
  industryName?: string;
  attachments?: Attachment[];
}

export interface AppUserLandDetails {
  descriptionForLand: string;
  areaOfGeoFence: string;
  locationOfGeoFence: string;
  landId: string;
  geoLocation: string;
  geoFencelatlngs: GeoDetails[];
  documents: AppLandDetailsDocument[];
  markerGeofence?: string[];
}

export interface AppLandDetailsDocument {
  id?: string;
  title: string;
  description: string;
  images: any[];
  attachments: Attachment[];
}

export interface GeoDetails {
  latitude?: string | number;
  longitude?: string | number;
  lat?: string | number;
  lng?: string | number;
}

export interface AppUserBusinessPaymentMethodDetails {
  lstOfUpiPaymentDetails: UpiPaymentDetails[];
}

export interface UpiPaymentDetails {
  vpa: string;
  upiQRCodeDecodedData: string;
  upiQRCodeS3Key: string;
  bankName: string;
  paymentType: string;
  upiId: string;
}

export interface AppUserLicenceDetails {
  type: IdValueMap;
  number: string;
}

export interface AppUserBusinessMembershipDetails {
  businessMembershipId: string;
  membershipName: string;
  membershipType: string;
  isDeleted?: boolean;
  prfCreatedDate: string;
  prfModifiedDate?: string;
  attachments?: Attachment[];
}

export interface AppUserBusinessTaxDetails {
  fieldName: string;
  fieldValue: string;
  isDeleted: number;
  prfCreatedDate: string;
  prfModifiedDate?: string;
}

export interface AppUserAwardDetails {
  title: string;
  description: string;
  isDeleted?: boolean;
  prfCreatedDate?: string;
  businessAwardId?: string;
  date?: string;
  awardGivenOrganization?: string;
  attachments?: Attachment[];
  prfModifiedDate?: string;
}

export interface AppUserCertificateDetails {
  certName: string;
  certAuthority: string;
  businessCertificationId?: string;
  isDeleted?: boolean;
  prfCreatedDate?: string;
  prfModifiedDate?: string;
  certNumber?: string;
  certURL?: string;
  startDate?: string;
  endDate?: string;
  attachments?: Attachment[];
  organicCertification?: FPOOrganicCertification;
}

export interface FPOOrganicCertification {
  farmers?: number;
  crops?: string;
  acres?: number;
  certifiedBy?: string;
}

export interface AppUserMembershipDetails {
  membershipName: string;
  membershipType: string;
  businessMembershipId?: string;
}

export interface AppUserTaxDetails {
  fieldName?: string;
  fieldValue: string;
}

export interface BusinessFieldNames {
  fieldId: string;
  fieldName: string;
  abbreviation: string;
}

export interface EmployeeProfileTo {
  industryId?: string;
  companyName?: string;
  jobDescription?: string;
  jobDescriptionId?: string;
  jobDescriptionTitle?: string;
  industryName?: string;
  specialization?: string;
  rolesAndResponsibilities?: string;
  experience?: ExperienceTo;
  entityDetails?: any
}

export interface ExperienceTo {
  years?: number;
  months?: number;
}

export interface AppUserPageDetails {
  pageId: string;
  pageTitle: string;
  pageType: AppPageType;
  relation: AppPageRelation;
}

export declare type AppPageType = "PROGRAM" | "ORGANIZATION";

export const APP_PAGE_RELATION_MAP = {
  ADMIN: "ADMIN",
  FOLLOWER: "FOLLOWER",
  CONTRIBUTOR: "CONTRIBUTOR",
  MEMBER: "MEMBER",
};

export declare type AppPageRelation =
  keyof typeof APP_PAGE_RELATION_MAP;

export interface AppUserDefaultEntity {
  entityId: string;
  entityName: string;
  registeredCount: number;
  followerCount: number;
  isPrecreated: boolean;
  following: boolean;
  entityRelationType: string;
  agentCount: number;
  pending: boolean;
  paidProgram: boolean;
}

export interface AppUserEducation {
  educationDetailId?: string;
  institutionName: string;
  startYear: string;
  endYear: string;
  degree: string;
  fieldOfStudy: string;
  isDeleted?: boolean;
  prfCreatedDate?: string;
  grade?: string;
  activities?: string;
  prfModifiedDate?: string;
  attachments?: Attachment[];
}

export interface AppLocation extends LatLong {
  placeId?: string;
  placeName?: string;

  districtId?: string;
  districtName?: string;

  stateId?: string;
  stateName?: string;

  regionId?: string;
  regionName?: string;

  countryId?: string;
  countryName?: string;
  countryShortName?: string;

  locationLong?: string;
  locationShort?: string;

  postalCode?: string;

  location_category_id?: string;
  openerpCountryId?: string;

  locality?: string;
}

export interface AppProduct {
  productId?: string;
  productName?: string;
  baseUnitId?: string;
  baseUnitName?: string;
  commodityId?: string;
  commodityName?: string;
  varietyId?: string;
  varietyName?: string;
  groupId?: string;
  groupName?: string;
  imageUrl?: string;
  alsoKnownAs?: string;
  productDescription?: string;
  qualifiers?: string;
  listofUnits?: AppProductUnit[];
  customunits?: any[];
  universal_name?: string;
  scientific_name?: string;
  company?: string;
  productType?: string;
  brand?: boolean;
  isApproved?: boolean;
  isEdited?: boolean;
  allowed?: boolean;
}

export interface AppProductUnit {
  unitId?: number;
  unitName?: string;
  conversion?: number;
  rank?: number;
}

export interface AppCountryDetails {
  countryShortName?: string;
  countryShortNameTwo?: string;
  MobileTelecomcode?: string;
  countryName?: string;
  MobileNoLength?: string;
  countryId?: string;
}

export interface ProfileTypeDetails {
  isPrecreated: boolean;
  entityProfilePic: string;
  prfCreatedDate: string;
  entityType: string;
  memberCount: number;
  pending: boolean;
  placeTo: AppLocation;
  prfModifiedDate: string;
  entityId: string;
  employessCount: number;
  entityRelationType: string;
  committeeMemberCount: number;
  industryId: string;
  entityName: string;
  following: boolean;
  activatedDate: string;
  adminDetails: AppUserAdminDetails;
  followerCount?: number;
  agentCount?: number;
  registeredCount?: number;
}
export interface AppUserAdminDetails extends AppUserBasicDetails {
  isScriptCreated: boolean;
  mobileNo: string;
}

export interface AppConnects {
  userId?: string;
  businessId?: string;
  firstName?: string;
  businessName?: string;
  businessTypeName?: string;
  businessTypeId?: string;
  placeTo?: AppLocation;
  currencyCode?: string;
  productDetails?: ProductDetail[];
  profilePicURL?: string;
  TS?: string;
  isMobileContact?: boolean;
  isDeleted?: boolean;
  loginId?: string;
}

interface ProductDetail {
  productId?: string;
  productName?: string;
}

/**
 * Used for common basic details update
 */
export interface CommonBasicProfile {
  location?: AppGoogleLocationTo;
  basicDetails?: CommonBasicDetails;
  employeeDetails?: EmployeeProfileTo;
  fpoBasicDetails?: FPOBasicDetails;
  apmcDetails?: APMCDetails;
  personalDetails?: samFarmerPersonalDetails;
  samunnatiFpoDetails?: SamunnatiProfileDetails;
  sammunatiFarmerDetails?: SamunnatiFarmerDetails;
  farmerDetailedInfo?: SamunnatiFarmerDetails;
}

export interface samFarmerPersonalDetails {
  aadhar_kyc_number?: string,
  pan_kyc_number?: string,
  UniqueID?: string,
}

export interface CommonBasicDetails {
  dateOfBirth: string;
  firstName: string;
  lastName?: string;
  gender: string;
  address2: string;
  alternateMobileNo: string;
  altemailId: string;
  businessTypeName: string;
  aboutMe: string;
  location: AppLocation;
  employees?: number;
  farmers?: number;
  villages?: number;
  fpoAvgLand?: UnitValueMap;
  establishedSince?: string;
  useWhatsapp?: boolean;
  fatherName?: string;
  farmerWhatsApp?: boolean;
  village?: string;
  hasSmartPhone?: string;
  shgActivity?: string;
  productCategory?: string[];
}

export interface FPOBasicDetails {
  dateOfBirth: string;
  firstName: string;
  gender: string;
  address2: string;
  alternateMobileNo: string;
  altemailId: string;
  businessTypeName: string;
  aboutMe: string;
  location: AppLocation;
  employees?: number;
  shgActivity?: string;
  productCategory?: string[];
  farmers?: number;
  villages?: number;
  fpoAvgLand?: UnitValueMap;
  establishedSince?: string;
  mainActivity?: string;
  assets?: string[];
  totalTurnOver?: string;
  dateOfBoardMeeting?: string;
  registrationNo?: string;
  registrationCertificate?: string;
  registeredUnder?: string;
  promotingAgency?: string[];
  sourcesOfFunding?: string[];
  registrations?: FPORegistrations;
}

export interface APMCDetails {
  licenseNumber: string;
  userName: string;
  password: string;
}

export interface FPORegistrations {
  establishedSince?: string;
  isPan?: string;
  isPanVerified?: string;
  pan?: string;
  isGST?: string;
  GST?: string;
  isPesticideLicense?: string;
  pesticideLicense?: string;
  isFertilizerLicense?: string;
  fertilizerLicense?: string;
  isSeedLicense?: string;
  seedLicense?: string;
  panAttachment?: string;
  gstAttachment?: string;
  pesticideLicenseAttachment?: string;
  seedLicenseAttachment?: string;
  fertilizerLicenseAttachment?: string;
  isfssaiLicense?: string;
  fssaiLicenseNumber?: string;
  fssaiLicenseAttachment?: string;
  agmarkLicense?: string;
  isagmarkLicense?: string;
  agmarkLicenseAttachment?: string;
}

export interface AppBulkUsersDetails {
  firstName?: string;
  profileKey?: string;
  loginId?: string;
  failedReason?: string;
  status?: boolean;
}

export interface AppUserLoginIdUpdatePayload {
  newMobileNo: string;
  oldMobileNo: string;
  mobileTelecomCode: string;
  assistantDetails: AppUserBasicDetails;
}

export interface AppUserLoginIdResponse {
  loginId: string;
}

export interface AppRegistration {
  name?: string;
  mobileNumber?: string;
  businessName?: string;
  businessTypeId?: string;
  businessTypeName?: string;
  businessKey?: string;
  bizUUID?: string;
  apmcLicenseNo?: string;
  password?: string;
  mobileTelecomCode?: string;
  licenseNo?: string;
  locationId?: string;
  productIds?: string;
  preCreatedRegInfo?: string;
  licenseValidityDate?: string;
  email?: string;
  website?: string;
  address?: string;
  otherPhoneNumbers?: string;
  profileTypeId?: string;
  profileTypeName?: string;
  industryId?: string;
  industryName?: string;
  companyName?: string;
  jobDescription?: string;
  organizationName?: string;
  constructedBusinessTypeName?: string;
  nativeBusinessTypeId?: string;
  nativeBusinessTypeName?: string;
  scriptCreatedAccount?: string;
  scriptCreatedSecondaryAcct?: string;
  memberId?: string;
  alternateMobileNo?: string;
  sourceFrom?: string;
  excelSorceFrom?: string;
  village?: string;
  mandal?: string;
  district?: string;
  nameOfFpo?: string;
  nameOfFpg?: string;
  fpgId?: string;
  parentOrgId?: string;
  sourcePortal?: string;
  userCreatedFrom?: string;

  //list/set of strings
  memberOf?: string[];

  //boolean variables
  isPreCreated?: boolean;
  isPreCreatedRegComplete?: boolean;
  isScriptCreated?: boolean;
  expressSignup?: boolean;

  //Integer variable;
  otpflag?: number;

  entityDetailsTo?: AppUserDefaultEntity;
  lstOfProducts?: AppProduct[];
  apmcTo?: AppLocation;
  locationTo?: AppLocation;
  lstBizInterest?: AppLocation[];
  googleLocationTo?: AppGoogleLocationTo;
  dealsWith?: AppDealsWith[];
  StudentTo?: AppStudent;
  employeeProfile?: AppEmployee;
  employeeCompany?: AppEmployeeCompany;
  additionalFarmerInfo?: AppAdditionalFarmerDetails;
  additionalORGInfo?: AppAdditionalFarmerDetails;
}

export interface AppStudent {
  studentName?: string;
  studentProfileKey?: string;
  universityName?: string;
  universityKey?: string;
  courseId?: string;
  courseName?: string;
  courseStartYear?: string;
  courseEndYear?: string;
  degreeName?: string;
  entityDetailsTo?: AppUserDefaultEntity;
}

export interface AppEmployee {
  industryId?: string;
  companyName?: string;
  jobDescription?: string;
  jobDescriptionId?: string;
  jobDescriptionTitle?: string;
  industryName?: string;
  specialization?: string;
  rolesAndResponsibilities?: string;
  experience?: AppEmployeeExperience;
  entityDetails?: AppUserDefaultEntity;
}

export interface AppEmployeeExperience {
  years?: number;
  months?: number;
}

export interface AppEmployeeCompany {
  businessKey?: string;
  businessName?: string;
  profileKey?: string;
}

export interface AppAdditionalFarmerDetails {
  type?: string;
  description?: string;
  additionalFields?: AppFarmerAdditionalFields[];
}

export interface AppFarmerAdditionalFields {
  titleName?: string;
  titleValue?: string;
}

export interface AppUserPersonalInfo {
  lastName?: string;
  dateOfBirth?: string;
  maritalStatus?: string;
  gender?: string;
  interests?: string;
  address1?: string;
  address2?: string;
  zipCode?: string;
  landMark?: string;
  mobileCode?: string;
  mobileNo?: string;
  landLineCode?: string;
  landLineNumber?: string;
  alternateMobileCode?: string;
  alternateMobileNo?: string;
  emailId?: string;
  altmobileNo?: string;
  isAltMobileNoVerified?: boolean;
  altemailId?: string;
  businessTypeName?: string;
  uniqueIdentificationNo?: string;
  aboutMe?: string;
  profilePicURL?: string;
  bannerURL?: string;
  firstName?: string;
  education?: string;
  isAlternateWhatsapp?: boolean

  objCityTo?: AppLocation;
  objCountryTo?: AppCountry;
  objStateTo?: AppState;
  objDistrictTo?: AppDistrict;
  additionalRoles?: string[];

  employees?: number;
  shgActivity?: string;
  productCategory?: string[];
  farmers?: number;
  villages?: number;
  fpoAvgLand?: UnitValueMap;
  establishedSince?: string;
  employeeProfileTo?: EmployeeProfileTo;
  fpoAdditionalDetails?: FPOAdditionalDetails;
  mainActivity?: string;
  assets?: string[];
  totalTurnOver?: string;
  dateOfBoardMeeting?: string;
  registrationNo?: string;
  registrationCertificate?: string;
  registeredUnder?: string;
  promotingAgency?: string[];
  sourcesOfFunding?: string[];
  registrations?: FPORegistrations;
  useWhatsapp?: boolean;
  ageGroup?: string;
  state?: string;
  otherAddress?: string;
  pinCode?: string;
  apmcDetails?: APMCDetails;
  associatedWith?: string;
  samunnatiFpoDetails?: SamunnatiProfileDetails;
  sammunatiFarmerDetails?: SamunnatiFarmerDetails;
  farmerDetailedInfo?: SamunnatiFarmerDetails;
  acreageDetails?: AcreageDetails;
}

export interface AcreageDetails {
  totalAcreage?: number,
  paddyAcreage?: number,
  rabiCrops?: string[],
  transplantedAcreageSize?: number,
  dsrAcreageSize?: number
}

export interface AppCountry {
  countryId: string;
  countryName: string;
}

export interface AppState {
  stateId: string;
  stateName: string;
}
export interface AppDistrict {
  districtId: string;
  districtName: string;
}

export interface BoardOfMember {
  profileKey?: string;
  name: string;
  designation?: string;
  dateOfJoining?: string;
  mobile?: number;
}

export interface ProfileLog {
  pageDetails: PageDetailsTo;
  assistantDetails: AssistantDetails;
  member: AssistantDetails;
  logDetails: LogBasicDetails;
  CT?: string;
  LUT?: string;
  id?: string;
}

export interface LogBasicDetails {
  message: string;
  attachments: Attachment[];
  status: LogStatus;
}

export enum LogStatus {
  PENDING,
  IN_PROGRESS,
  COMPLETED,
}

export type PageDetailsTo = {
  pageId: string;
  pageTitle: string;
  pageType: string;
  relation: string;
  pageProfilePic?: string;
};

export type AssistantDetails = {
  firstName: string;
  email?: string;
  profileKey?: string;
  role?: AssistantRoles;
  profilePicUrl?: string;
  mobile?: string;
};

export type FPOAdditionalDetails = {
  fpoServices?: FPOServices[];
  fpoInfrastructure?: FPOInfrastructure;
  fpoWarehouse?: FPOWarehouse;
  fpoBankingDetails?: FPOBankingDetails;
};

export type FPOServices = {
  service?: string;
  license?: string;
};

export type FPOWarehouse = {
  itemsStocked?: string;
  capacityInTons?: string;
  warehouseSize?: string;
};

export type FPOBankingDetails = {
  bankName?: string;
  accountHolderName?: string;
  accountNumber?: string;
  branchAddress?: string;
  ifscCode?: string;
  bankAttachment?: string;
};

export type FPOInfrastructure = {
  isInternetConnected?: string;
  isDeviceAvailable?: string;
  interestedToParticipate?: FPOInterestedToParticipate;
  accounting?: FPOAccounting;
  fieldTrials?: FPOFieldTrials;
};

export type FPOInterestedToParticipate = {
  isInterestedToParticipate?: string;
  participatingInInput?: string;
};

export type FPOAccounting = {
  isAccounted?: string;
  FPOSoftware?: string;
};

export type FPOFieldTrials = {
  isTrialDone?: string;
  trialsBy?: string;
};

export enum AssistantRoles {
  MANAGER = "salesManager",
  BOS = "BOS",
  LEAD = "BOSLead",
  SALESMAN = "salesman",
  CONTRIBUTOR = "contributor",
  SALESPARTNER = "salesPartner",
  BOSPERSON = "bosPerson",
  CREDITMANAGER = "creditManager",
  LEADMANAGER = "leadManager",
  RELATIONSHIPMANAGER = "relationshipManager"
}

export interface SamunnatiProfileDetails {
  basicDetailsInfo?: SamunnatiBasicInfoDetails,
  financialDetails?: SamunnatiFinancialDetails,
  bod?: BodDetails[],
  businessActivities?: BusinessActivities,
  socialDetails?: SocialDetailsInfo,
  cropInfo?: cropDetails,
  gradingDetails?: GradingDetails,
  valueAddedProducts?: ValueAddedProducts[],
  rewardsRecognitions?: RewardsRecognitions[],
}

export interface SamunnatiBasicInfoDetails {
  basicDetails?: BasicDetails,
  programType?: ProgramTypeDetails,
  turnoverDetails?: TurnoverDetails[],
  ceoDetails?: CeoDetails,
  samunnatiRelationship?: SamunnatiRelationship,
  entityDetails?: EntityDetails
}

export interface SamunnatiFinancialDetails {
  bankDetails?: BankDetails[],
  creditHistory?: SamCreditHistory[],
  licenses?: SamLicenses[],
  assetDetails?: AssetDetails[],
  insurance?: SamInsurance,
}

export interface BasicDetails {
  fpoId?: Number,
  fpoName?: String,
  firstName?: String,
  contactNumber?: String,
  memberShipBase?: Number,
  femaleMembers?: Number,
  maleMembers?: Number,
  isWomenLedEntity?: Boolean,
  isMicroSmallMediumEnterprises?: Boolean,
  isClimateSmartAgriculture?: Boolean,
  noOfShareholders?: Number,
  activeMembers?: Number,
  perOfSmallHolder?: Number,
  isFarmerGrpAvailable?: Boolean,
  fpoStatus?: Boolean,
  mainActivity?: String,
  boardMeeting?: String,
  status?: Boolean,
  createdAt?: String
  updatedAt?: String,
  isFigAvailable?: Boolean,
  shareCapital?: String,
}

export interface ProgramTypeDetails {
  isKym?: Boolean,
  mandi?: Boolean,
  lhfpoMember?: Boolean,
  bmgfMember?: Boolean,
  fpoNextMember?: Boolean,
  fpo360?: Boolean,
  isFederation?: Boolean,
  samIpl?: Boolean,
  sbi?: Boolean
  isLighter?: Boolean
}

export interface TurnoverDetails {
  turnover?: String,
  financialYearId?: String
}

export interface CeoDetails {
  ceoName?: String,
  ceoMobileNumber?: String,
  ceoEmailId?: String
}

export interface SamunnatiRelationship {
  rmEmail?: String,
  rmName?: String,
  shEmail?: String,
  shName?: String
}

export interface EntityDetails {
  entityId?: String,
  entityType?: String,
  companyCin?: String,
  societyType?: String,
  cooperativeRegistrationNumber?: String,
  trustRegistrationNumber?: String,
  societyRegistrationNumber?: String
}

export interface BankDetails {
  bankName?: String,
  branch?: String,
  bankAccountType?: String,
  accountNumber?: Number,
  ifscCode?: String
}

export interface SamCreditHistory {
  loanAmountAvailed?: String,
  tenure?: Number,
  lenderName?: String,
  creditHistoryStatus?: String
}

export interface SamLicenses {
  licenceName?: String,
  licenceNumber?: String,
  validityDate?: String,
  attachment?: String,
  isVerified?: boolean
}

export interface AssetDetails {
  assetType?: String,
  assetStatus?: String,
  assetValue?: String,
  otherDetails?: String,
  quantity?: Number
}

export interface SamInsurance {
  cropInsFarmerCount?: Number,
  lifeInsFarmerCount?: Number,
  annadhathaSurakshaFarmerCount?: Number
}

export interface BodDetails {
  name?: String,
  designation?: string,
  gender?: String,
  location?: String,
  mobile?: String
  otherDesignation?: String
}

export interface SocialDetailsInfo {
  promotingInstitution?: PromotingInstitution,
  resourceInstitution?: ResourceInstitution,
  teamPhoto?: TeamPhoto,
  socialInfo?: SocialInfo,
  entityLogo?: String,
}

export interface BusinessActivities {
  inputBusinessActivities?: InputBusinessActivities[],
  outputBusinessActivities?: OutputBusinessActivities[],
  otherBusinessActivities?: OtherBusinessActivities[],
  chcServices?: ChcServices[],
  lending?: Lending[],
  productsAndCommodities?: productsAndCommodities,
  infrastructure?: InfrastructureDetails
}

export interface PromotingInstitution {
  promotingInstitution?: String,
  promotingInstitutionLogo?: String,
  promotingInstitutionLogoName?: String
}

export interface ResourceInstitution {
  resourcingInstitution?: String,
  resourcingInstitutionLogo?: string,
  resourcingInstitutionLogoName?: String
}

export interface TeamPhoto {
  teamPhotoName?: String,
  teamPhotoLogo?: String
}


export interface SocialInfo {
  officialWebsiteLink?: String,
  facebookLink?: String,
  twitterLink?: String,
  instagramLink?: String
}

export interface InputBusinessActivities {
  businessYear?: String,
  businessRevenue?: String,
  inputShop?: Boolean,
  noOfShops?: Number
}

export interface OutputBusinessActivities {
  businessYear?: String,
  businessRevenue?: String,
  percentageOfOutput?: String,
  topThreeBuyers?: String
}

export interface OtherBusinessActivities {
  businessYear?: String,
  businessRevenue?: String,
  otherBusiness?: Boolean,
  activities?: String
}

export interface ChcServices {
  businessYear?: String,
  businessRevenue?: String,
  chcShop?: Boolean,
  quantity?: Number
}

export interface Lending {
  year?: String,
  lendingAmount?: String
}

export interface productsAndCommodities {
  consumer?: ConsumerProducts[],
  certified?: CertifiedProducts[],
  warehouse?: WarehouseProducts[],
  coldStorage?: ColdStorageProducts[],
  exportsOrImports?: ExportsOrImportsProducts[],
  allied?: AlliedProducts[]
}

export interface ConsumerProducts {
  showConsumer?: Boolean,
  consumerProductRevenue?: String,
  consumerProductCommodity?: String
}

export interface CertifiedProducts {
  showCertified?: Boolean,
  certifiedProductionCrop?: String,
  certifiedProductionRevenue?: String
}

export interface WarehouseProducts {
  showWarehouse?: Boolean,
  commodityStoredInWarehouse?: String,
  capacityInWarehouse?: Number
}

export interface ColdStorageProducts {
  showColdStorage?: Boolean,
  commodityStoredInColdStorage?: String,
  capacityInColdStorage?: Number
}

export interface ExportsOrImportsProducts {
  showImportsOrExports?: Boolean,
  exportsOrImportsCommodity?: String,
  exportsOrImportsRevenue?: String
}

export interface AlliedProducts {
  showAllied?: Boolean,
  alliedActivities?: String,
  alliedActivitiesRevenue?: String
}

export interface InfrastructureDetails {
  id?: Number,
  name?: String
}

export interface cropDetails {
  cropDetails?: SamFpoCropDetails[],
  cropWiseProcurement?: CropWiseProcurement[]
}

export interface SamFpoCropDetails {
  year?: String,
  season?: String,
  cropId: String,
  cropName?: String,
  varietyName?: String,
  varietyId?: String,
  cultivationArea?: String,
  outputQty?: String,
  outputQtyUnit?: String
}

export interface CropWiseProcurement {
  year?: String,
  season?: String,
  noOfFarmers?: Number,
  crop?: String,
  totalQty?: String
}

export interface GradingDetails { }

export interface ValueAddedProducts {
  productName: String,
  productPrice: String,
  productQuantity: String,
  productQuantityUnit: String,
  productAttachment: String,
}

export interface RewardsRecognitions {
  rewardRecognitionName: String,
  rewardTitle: String,
  rewardDate: String,
  rewardDescription: String,
  rewardAttachment: RewardAttachmentType[],
}

export interface RewardAttachmentType {
  url: String;
  msgType: String;
}

export interface SamunnatiFarmerDetails {
  village?: String;
  hasSmartPhone?: String;
  identityProofDocumentUrl?: String;
  addressProofDocumentUrl?: string;
  Name_of_the_Nominee?: String;
  Relationship_with_the_Nominee?: String;
  marital?: String;
  pan_kyc_number?: String;
  aadhar_kyc_number?: String;
  UniqueID?: String;
  fatherName?: String;
  spousename?: String;
  spouse_aadhar_kyc_number?: String;
  spouse_pan_kyc_number?: String;
  isShareholderWithFPO?: Boolean;
  isTransactingWithFPO?: Boolean;
  house?: String;
  housetype?: String;
  maleMembers?: String;
  femaleMembers?: String;
  householdct?: String;
  primeMemName?: String;
  primeMemContact?: String;
  isAnymemberPartOfSameFpo?: Boolean;
  shareHolderAnotherFpo?: Boolean;
  ownirrigatedland?: String;
  snownirrigatedland?: String;
  ownrainfedland?: String;
  snownrainfedland?: String;
  leaseirrigatedland?: String;
  snleaseirrigatedland?: String;
  leaserainfedland?: String;
  snleaserainfedland?: String;
  fpoDetails?: FarmerFPODetails;
  total?: number;
  unit?: string;
  annualGrossIncome?: SamFarmerAnnualGrossIncome[];
  insuranceDetails?: SamFarmerInsuranceDetails[];
  cropDetails?: SamFarmerCropDetails[];
  liveStockDetails?: SamFarmerLiveStockDetails[];
  bankDetails?: SamFarmerBankDetails[];
  assets?: SamFarmerAssets[];
  lands?: SamFarmerLands[];
}

export interface FarmerFPODetails {
  fpoName: String;
  fpoNumber: String;
  fpoLocation: String;
  figName: String;
  figLocation: String;
  leadName: String;
  leadNumber: String;
  leadEmailId: String
}

export interface SamFarmerLands {
  CT?: string;
  landType?: String,
  landName?: String;
  surveyNumber?: String;
  landId?: String,
  location?: {
    latitude: string | number,
    longitude: string | number,
    stateId: String,
    stateName: String,
    countryId: String,
    countryName: String,
    countryShortName: String,
    locationLong: String,
    locationShort: String
  },
  landSize?: UnitValueMap
  waterLevel?: UnitValueMap
  geoFences?: GeoFenceDetails
  soilType?: String,
  irrigationType?: String,
  salinity?: String,
  salinityLevel?: String,
  attachments?: Attachment[]
  landCoverType?: String,
  fieldNotes?: String
}

export interface SamFarmerAnnualGrossIncome {
  annualIncome: String;
  year: String
}

export interface SamFarmerInsuranceDetails {
  insuranceType: String
  insuranceName: String;
  insuranceNumber: String
  insuranceValidity: String;
  otherInsurance: String;
}

export interface SamFarmerCropDetails {
  year: String;
  season: String;
  cropId: String;
  cropName: String;
  varietyId: String;
  varietyName: String
  cultivationArea: String;
  outputQty: String;
  outputQtyUnit: String
}

export interface SamFarmerLiveStockDetails {
  liveStockName: String,
  liveStockQuantity: String,
  liveStockQuantityUnit: String,
  otherLiveStock: String,
  year: String
}

export interface SamFarmerBankDetails {
  bankName: String;
  branchName: String;
  accountType: String;
  bankAccountNumber: Number;
  ifscCode: String;
  passbookImage: String
}
export interface SamFarmerAssets {
  name: String;
  quantity: String;
  otherAsset: String
}

export interface AppPageAddNewUsersResponse {
  data: AppUser;
}