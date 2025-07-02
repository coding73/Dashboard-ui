import { AppUser, AppUserBasicDetails } from './user.model';

export interface LoginCredentials {
  type?: AuthType;
  userName: string;
  password?: string;
  sessionId?: string;
  mobileTelecomCode?: string;
  appName?: string;
  deviceType?: string;
}

export interface BasicLogInDetails {
  emailId?: string;
  mobileNumber?: string;
  mobileTelecomCode?: string;
  emailVertifyVal?: string;
  otp?: string;
  password?: string;
}

export interface AuthLoginResponse {
  userBasicDetail: AppUserBasicDetails;
  auth: AuthDetails;
}

export interface SSOLoginResponse {
  userData: AppUserBasicDetails;
  userBasicDetail?: AppUserBasicDetails;
  pwd: string;
  auth: AuthDetails;
}

export interface AuthDetails {
  token: string;
  userName?: string;
}

export interface StudentDetails {
  universityName: string;
  universityKey: string;
  degreeName: string;
  courseId: string;
  courseName: string;
  courseStartYear: string;
  courseEndYear: string;
}

export interface AuthSignupResponse {
  userBasicDetail: AppUserBasicDetails;
  auth:AuthToken;
  userData: AppUser;
}

export interface AuthToken {
  token: string;
  userName: string;
}

export type AuthType = 'email' | 'mobile';

export interface BasicSignUpInfo {
  type?: string,
  userName?: string,
  name?: string;
}

export interface AppSignupProfileTypes {
  image: string;
  actionText: string;
  nativeBusinessTypeId: string;
  tooltipText: string;
  nativeBusinessTypeName: string;
  description: string;
  profileTypeID: string;
  title: string;
  titles: AppSignupProfileTypeTitles;
  navigation: string;
  bizTypeID: string;
  navigatoinText: string;
  action: boolean | string;
  id: string;
  displayText?: string;

  example?: string;

  signupParams?: any;
}

interface AppSignupProfileTypeTitles {
  English: string;
  Hindi: string;
  Kannada: string;
  Telugu: string;
  Spanish: string;
  Marathi: string;
}
