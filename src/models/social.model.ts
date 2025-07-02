import { LatLong, PartialData } from './core.model';
import { AppStoreProduct } from './product-catalogue.model';
import { AppBulkUsersDetails, AppUserBasicDetails, ProfileTypeDetails } from './user.model';

export interface Attachment {
  url: string;
  context?: string;
  msgType: AttachmentType;
  geoLocation?: LatLong;
}

export const AVAILABLE_STORES = {
  OUTPUTS: 'OUTPUTS'
}

export declare type AttachmentList = Array<Attachment>;

export const ATTACHMENT_TYPE_MAP = {
  IMAGE: 'IMAGE',
  AUDIO: 'AUDIO',
  DOCUMENT: 'DOCUMENT',
  VIDEO: 'VIDEO'
} as const;

export const APP_QA_FILTER_MAP = {
  ALL_QA: 'ALL_QA',
  MY_QA: 'MY_QA',
  AI_TAGS: 'AI_TAGS',
  DISTRICTS: 'DISTRICTS'
};

export const APP_SHARE_UPDATE_FILTER_MAP = {
  ALL_SHARES: 'ALL_SHARES',
  MY_SHARES: 'MY_SHARES',
};

export enum ProfileSocialActivityType {
  CREATE_SHARE       = 'CREATE_SHARE',
  CREATE_QUESTION    = 'CREATE_QUESTION'
}

export declare type AttachmentType = keyof typeof ATTACHMENT_TYPE_MAP;

export type ShareActionType = 'likes' | 'comments';

export type ProgramRelationType = 'MEMBER' | 'ADMIN';

export interface LabelValueMap {
  label: string;
  value: string;
}

export interface SocialPost {
  author?: AppUserBasicDetails;
  event?: string;
  id?: string;

  // Google language short code for the shared update
  googleLocationShortCodes?: string;

  // For ui purposes
  liked?: boolean;
  commented?: boolean;
  geoLocation?: LatLong;

  entityId?: string;
  scheduleId?: string;
  scheduledTS?: string;
  scheduledDate?: string;
  scheduledTime?: string;

  satelliteAdvisories?: SatelliteAdvisories;
  shareId?: string;
}

export interface SatelliteAdvisories {
  bbox?: number[];
  createdOn?: string;
  id?: string;
  landDetails?: any;
  nitrogen?: any;
  soilMoisture?: any;
  phosphorous?: any;
  plantHealth: any;
  pageId?: string;
  syncId?: string;
}
export interface SocialProductTo {
  productId?: string;
  productName?: string;
}

export interface SocialComments {
  id: string;
  text: string;
  name: string;
  profilePicURL: string;
  flag?: number;
  TS?: string;

  socialBizKey?: string;
}

export interface ShareUpdate extends SocialPost {
  authorId?: string;
  shareText?: string;
  richShareText?: string;
  sharedTo?: string;
  fromDate?: Date;
  totalAttendance?: number,
  noOfHours?: number,

  uri?: string;
  uriTitle?: string;
  uriImage?: string;
  domain?: string;
  lstOfAttachments?: Attachment[];

  sessionId?: string;
  CT?: string;
  LUT?: string;
  moduleId?: string;

  shareId?: string;

  farmingSeasonTitle?: string;
  farmingActivityDetails?: FarmingActivityDetails;

  authorName?: string;
  authorProfilePicURL?: string;
  authorBizId?: string;
  authorBizName?: string;
  authorBizType?: string;
  authorLocationId?: string;
  authorLocation?: string;
  additionalBizDetails?: AdditionalBizDetails;
  approvalStatus?: RobocallApprovalStatus;

  promotionalTitle?: string;
  memberOf?: string[];
  contentFlag?: boolean;
  imageResized?: boolean;
  isExtended?: boolean;
  isPublishedThroughTool?: boolean;
  clickedCounts?: number;
  likesCount?: number;
  servedCounts?: number;
  commentsCount?: number;
  reachCounts?: number;
  networkReachCounts?: number;
  recentComments?: SocialPostComments[];
  likes?: SocialPostLike[];
  sourceDetails?: SocialPostSourceDetails;
  s3URI?: string;
  latestActivity?: SocialPostLatestActivity;
  tags?: any;
  imageUri?: string;

  liked?: boolean;

  scheduleId?: string;
  scheduledTS?: string;
  scheduledDate?: string;
  scheduledTime?: string;

  productsMetaData?: AppStoreProduct[];

  pageDetails?: PageDetails;
  pageAuthorDetails?: AppUserBasicDetails;

  filter?: any;
  entityName?: any;
  msgTypes?: any;

  robocallDetails?: RobocallDetails;
}

export interface RobocallApprovalStatus {
  isApproved?: boolean,
  approvedBy?: any,
  approvedDate?: string,
  isRejected?: boolean,
  rejectedBy?: any,
  rejectedReason?: string,
  rejectedDate?: string,
  currentStatus?: string,
}

export interface ProgramShareUpdate extends ShareUpdate {
  entityId: string;
  entityName: string;
  isAdmin: boolean;
  isAuthor: boolean;
  msgTypes: string[];
  filter: ProgramShareFilter;
  recipient: string;
  id: string;
  isThroughOrg: boolean;
  adminId: string;
  productTo?: SocialProductTo;
  isRelaunched?: boolean;
}

export interface PageDetails {
  pageTitle: string;
  pageType: string;
  pageProfilePic: string;
  pageId?: string;
}

export interface RobocallDetails {
  targetedUsers?: string,
  requestId?: string,
  fpoId?: string,
  reportURL: string,
  status?: boolean,
  mobileNumbers?: string[],
  audioUrl?: string,
  scheduledTime?: any,
  callReceived?: number,
  responseUrls?: string[],
  uniqueTargetedUsers?: string
}

export interface ProfileSocialActivities extends ShareUpdate {
  activityType: ProfileSocialActivityType;
}

export interface ProgramShareFilter {
  businessTypes: string[];
  locations: string[];
  products: string[];
  pageId: string;
  pageTitle: string;
  pageType: string;
  pageUrl: string;
  parentPageId: string;
  parentPageTitle: string;
  parentPageUrl: string;
  isSms: boolean;
  memberOf: string[];
  organisations: string[];
  isExtended: boolean;
}

export interface StreamUrls {
  url: string;
  event: string;
}

export interface UrlMetadata {
  domain: string;
  image?: string;
  title?: string;
  url: string;
}

export interface SocialPostLatestActivity {
  TS: string;
  type: string;
  profilePicURL: string;
  name: string;
  id: string;
}

export interface SocialPostLike extends SocialPostLatestActivity {
  flag?: number;
  socialBizKey: string;
}

export interface SocialPostComments extends SocialComments {
  shareId?: string;
}

export interface SocialPostSourceDetails {
  eventTitle?: string;
  sourceFrom: string;
  sourceId: string;
}

export interface AdditionalBizDetails {
  profileTypeId: string;
  profileTypeName: string;
  businessTypeId: string;
  businessTypeName: string;
  profileTypeDetails: ProfileTypeDetails;
  constructedBusinessTypeName: string;
  nativeBusinessTypeId: string;
  nativeBusinessTypeName: string;
  approved: boolean;
}

export interface ScheduleDates {
  scheduledTS?: string;
  scheduledDate?: string;
  scheduledTime?: string;
}

export interface ShareRequest {
  authorId: string;

  shareText: string;
  richShareText?: string;

  sharedTo: ShareVisibility;

  imageUri?: string;
  uri?: string;
  uriTitle?: string;
  uriImage?: string;
  domain?: string;
  lstOfAttachments?: Attachment[];
}

export interface AssistedShareRequest extends ShareRequest {
  assistantDetails: AppUserBasicDetails;
}

export declare type ShareVisibility =  'CONNECTS' | 'ALL_SUBSCRIBERS' | 'SPECIFIC_APP_USER';

export interface ProgramShareRequest extends ShareRequest {
  recipient: ShareVisibility;

  entityId: string;
  entityName: string;

  isAdmin: boolean;
  isAuthor: boolean;

  msgTypes: string[];
  farmingActivityDetails?: FarmingActivityDetails;

  filter: AppProgramShareFilter;
  isPublishedThroughTool: boolean;
}

export interface AppShareFilters {
  businessTypes?: string[];
  locations?: string[];
  products?: string[];
  users?: string[];
  states?: string[];
  districts?: string[];
}

export interface AppProgramShareFilter extends AppShareFilters {

  pageId: string;
  pageTitle: string;
  pageType: string;
  pageUrl: string;
  parentPageId: string;
  parentPageTitle: string;
  parentPageUrl: string;
  isSms: boolean;
}

export interface AppPageFilters {
  businessTypes?: string[];
  locations?: string[];
  products?: string[];
  users?: string[];
  countries?: string[];
  districts?: string[];
  states?: string[];
}

export declare type QuestionTypes = 'disease_related';

export interface ShareQaRequest {
  text: string;

  groupName: ShareVisibility;

  imageURL?: string;
  type?: string;
  questionType: QuestionTypes;

  filter?: ShareQaProgramFilter;
  lstOfAttachments?: Attachment[];
}

export interface AssistedShareQaRequest extends ShareQaRequest {
  assistantDetails: AppUserBasicDetails;
}

export interface ProgramQaRequest extends ShareQaRequest {
  entityId?: string;
  id?: string;
  isAdmin?: boolean;
  isAuthor?: boolean;
}


export interface ShareQaAnswerRequest extends ShareQaRequest {
  id: string;
}

export interface ShareQaProgramRequest extends ShareQaRequest {
  entityId: string;
  isAdmin: boolean;
  isAuthor: boolean;
}

export interface ShareQaProgramFilter {
  pageId: string;
  parentPageId: string;
  parentPageTitle: string;
  parentPageUrl: string;
}


export interface ShareQaFullDetails extends SocialPost {

  CT?: string;
  LUT?: string;
  moduleId?: string;
  questionId?: string;
  type?: string;
  questionType?: string;
  s3URI?: string;
  latestActivity?: LatestActivity;

  authorId?: string;
  authorName?: string;
  authorProfilePicURL?: string;
  authorBizId?: string;
  authorBizName?: string;
  authorBizType?: string;
  authorLocation?: string;
  authorLocationId?: string;
  authorDistrictId?: string;
  authorStateId?: string;
  entityName?: string;

  authorCountryId?: string;
  memberOf?: string[];
  contentFlag?: boolean;
  imageResized?: boolean;
  isExtended?: boolean;
  networkReachCounts?: number;
  reachCounts?: number;
  answersCount?: number;
  servedCounts?: number;
  clickedCounts?: number;
  questionText?: string;
  imageUri?: Attachment;
  lstOfAttachments?: Attachment[];
  isAdmin?: boolean;
  isAuthor?: boolean;
  isPublishedThroughTool?: boolean;
  notificationObject?: NotificationObject;

  answers?: ShareQaAnswer[];
  answer?: ShareQaAnswerFull;
  filter?: AppProgramShareFilter;

  isAllowedToAnswer?: boolean;
  latestReply?: AppMessageDetails;

  pageDetails?: PageDetails;
  pageAuthorDetails?: AppUserBasicDetails;
}

export interface ProgramQaFullDetails extends ShareQaFullDetails {
  id: string;
  entityId: string;
  entityName: string;
  language: string;
  likesCount: number;
  commentsCount: number;
  filter: AppProgramQaFilter;
}

interface AppProgramQaFilter extends AppProgramShareFilter {
  memberOf: string[];
  organisations: string[];
  programs: string[];
  isExtended: boolean;
}


export interface ShareQaAnswer {
  answerId: string;
  id: string;
  name: string;
  TS: string;
  profilePicURL: string;
  flag: number;
  likesCount: number;
  commentsCount: number;
  socialRank: number;
  answerUrl: string;
  imageUri: string;
  answer?: string;

  author?: AppUserBasicDetails;
}

export interface ShareQaAnswerFull extends ShareQaAnswer {
  CT: string;
  LUT: string;
  questionId: string;

  author?: AppUserBasicDetails;

  answerId: string;
  answer: string;
  authorId: string;
  authorName: string;
  authorProfilePicURL: string;
  authorBizName: string;
  authorBizId: string;
  authorBizType: string;
  memberOf: string[];
  imageResized: boolean;
  likesCount: number;
  clickedCounts: number;
  reachCounts: number;
  commentsCount: number;
  networkReachCounts: number;
  servedCounts: number;
  imageUri: string;
  lstOfAttachments: Attachment[];
  answerUrl: string;
}

export interface ShareQaAnswerLike {
  TS: string;
  id: string;
  flag: number;
  name: string;
  answerId: string;
  questionId: string;
  type: string;
  answerAuthorId: string;
}

export interface ShareQaAnswerComment extends SocialComments {
  answerId?: string;
  questionId?: string;
  type?: string;
  answerAuthorId?: string;
}

export interface NotificationObject {
  activityId: string;
  bizKey: string;
  moduleKey: string;
  event: string;
  heading: string;
  description: string;
  notifyTime: string;
  userName: string;
  bizName: string;
  profilePicUrl: string;
  eventCategory: string;
  url: string;
  type: string;
  isRead: boolean;
  isRecommended: boolean;
  isViewed: boolean;
  latestActivity: LatestActivity;
}

export interface LatestActivity {
  TS: string;
  type: string;
  profilePicURL: string;
  name: string;
  id: string;
}

export interface ShareUpdateHeader {
  matIcon?: string;
  faIcon?: string;
  iconColor?: string;
  title?: string;
  showMenu?: boolean;
}

export interface SimilarQuestionsList {
  latestQa: SimilarQuestion;
  relatedQa: SimilarQuestion;
}

export interface SimilarQuestion {
  count: number;
  result: SimilarQuestionDetails[];
}

export interface SimilarQuestionDetails {
  question: string;
  questionId: string;
  answerCount: number;
  answer: string;
}

export interface BulkMembersAdditionResponse {
  failed?: number;
  success?: number;
  users?: AppBulkUsersDetails[];
}

export interface AppQAChatListApi {
  questionData: ShareQaFullDetails;
  isAllowedToReply: boolean;
  items: AppMessageDetails[];
  count?: number;
}

export interface AppMessageDetails {
  CT?: string;
  attachments?: Attachment[];
  message?: string;
  messageId?: string;
  questionId?: string;
  sender: AppUserBasicDetails;
  type?: string;

  hide?: boolean; // UI purpose
  replyToMsgData?: PartialData;
  productsMetaData?: AppStoreProduct[];

}
export interface FarmingActivityDetails {
  seasonType: string;
  seasonDetails: SeasonDetails;
}

export interface SeasonDetails {
  activityType: string;
  irrigationType: string;
  fertilizerType: string;
  weedType: string;
  pestsType: string;
  diseaseType: string;
  harvestType: string;
  date: string;
  hours: number;
  quantityApplied: QuantityApplied;
  rateOfInfestation: string;
}
export interface QuantityApplied {
  value: number;
  unit: string;
}
