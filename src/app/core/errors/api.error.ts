import { AppError } from './app-error';

/**
 * Rest api error handler
 */
export class ApiError extends AppError { }

export class LazySyncApiError extends ApiError {}
