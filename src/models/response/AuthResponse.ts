export interface LoginResponse {
  payload: { accessToken: string; refreshToken: string };
}

export interface GetCodeResponse {
  payload: { code: string };
}
