
export interface VerifyRequest {
  code: string;
}

export interface VerifyResponse {
  data: {
    token: string;
    id: number;
    name: string;
    email: string;
  };
  message: string;
  status: boolean;
  status_code: number;
}
