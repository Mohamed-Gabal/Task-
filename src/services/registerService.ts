import { api } from "./api";

export const registerService = async (data) => {
  try {
    const res = await api.post("/auth/register", data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
