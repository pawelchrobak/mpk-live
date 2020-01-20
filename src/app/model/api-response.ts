import { ApiResponseResult } from './api-response-result';

export interface ApiResponse {
    help: string;
    success: boolean;
    result: ApiResponseResult;
}
