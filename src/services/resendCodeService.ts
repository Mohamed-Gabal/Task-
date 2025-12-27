import { api } from "./api";

export const resendCodeService = async () => {
  const token = localStorage.getItem("token");

  const res = await api.post(
    "/auth/verify-email/resend-code",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};
