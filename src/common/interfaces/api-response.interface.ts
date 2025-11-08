export interface ApiResponse<T = any> {
  statusCode: number;
  message: string;
  data?: T;
  timestamp?: string;
  path?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  limit: number;
}
