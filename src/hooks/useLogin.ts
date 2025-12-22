"use client";

import { useMutation } from "@tanstack/react-query";
import { loginService } from "../services/loginService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginService(email, password),
    onSuccess: (data) => {
      toast.success("Logged in Successfully!");
      router.push("/");
      localStorage.setItem("token", data.token);
    },
  });
};
