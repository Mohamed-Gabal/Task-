export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: {
    id: number;
    name: string;
    email: string;
    mobile: string;
    mobile_country_code: string;
    image: string;
    type: string;
    token: string;
  };
  message: string;
  status: boolean;
  status_code: 200 | 400 | 401 | 403 | 404 | 500;
}
