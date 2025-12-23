"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { loginService } from "../services/loginService";
import { LoginRequest, LoginResponse } from "../types/loginType";

export const useLogin = () => {
  const router = useRouter();

  return useMutation<LoginResponse, unknown, LoginRequest>({
    mutationFn: (data: LoginRequest) => loginService(data),
    onSuccess: (data) => {
      toast.success(data.message);
      localStorage.setItem("token", data.data.token);
      router.push("/");
    },
  });
};
