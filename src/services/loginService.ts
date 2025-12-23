import { api } from "./api";
import { LoginRequest, LoginResponse } from "../types/loginType";

export const loginService = async (userData: LoginRequest): Promise<LoginResponse> => {
  const res = await api.post<LoginResponse>("/auth/login", userData);
  return res.data;
};
