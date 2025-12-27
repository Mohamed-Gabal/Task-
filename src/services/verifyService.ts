import { VerifyRequest } from "../types/verifyType";
import { api } from "./api";

export const verifyService = async (data: VerifyRequest) => {
  const token = localStorage.getItem("token");

  const res = await api.post("/auth/verify-email", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};


