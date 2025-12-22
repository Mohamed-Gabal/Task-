import { RegisterRequest, RegisterResponse } from "../types/registerType";
import { api } from "./api";

export const registerService = async (userData: RegisterRequest) => {
  const res = await api.post<RegisterResponse>("/auth/register", userData);
  return res.data;
};
