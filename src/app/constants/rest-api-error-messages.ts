import { HttpStatusCode } from "@angular/common/http";

/**
 * Common rest api error messages
 */
export const REST_API_ERROR_MESSAGES = {
  [HttpStatusCode.BadRequest]: 'Server error, please try again later',
  [HttpStatusCode.Unauthorized]: 'Please login to continue!',
  [HttpStatusCode.InternalServerError]: 'Server error, please try again later',
  [HttpStatusCode.NotImplemented]: 'Server error, please try again later',
  [HttpStatusCode.BadGateway]: 'Unable to contact to server, please try again later',
  [HttpStatusCode.ServiceUnavailable]: 'Unable to contact server, please try again later',
  [HttpStatusCode.GatewayTimeout]: 'No response from server, please try again later',
  [HttpStatusCode.ExpectationFailed]: 'Requests will be synced back later when network comes',
};
