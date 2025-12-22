export interface RegisterRequest {
  email: string;
  mobile: string;
  mobile_country_code: string;
  name: string;
  password: string;
  password_confirmation: string;
}
export interface RegisterResponse {
  data: {
    count_items_cart: number;
    email: string;
    email_verified_at: boolean;
    id: number;
    image: string;
    mobile: string;
    mobile_country_code: string;
    name: string;
    token: string;
    type: string;
  };
  message: string;
  status: boolean;
  status_code: 200 | 201 | 400 | 401 | 403 | 404 | 500;
}
