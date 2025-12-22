"use client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { registerService } from "../services/registerService";
import { useRouter } from "next/navigation";
import { RegisterRequest, RegisterResponse } from "../types/registerType";

export const useRegister = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (userData: RegisterRequest) => registerService(userData),
    onSuccess: (userData: RegisterResponse) => {
      toast.success(userData.message);
      router.push("/");
      localStorage.setItem("token", userData.data.token);
    },
  });
};
