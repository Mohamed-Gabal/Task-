"use client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { verifyService } from "../services/verifyService";
import { VerifyRequest, VerifyResponse } from "../types/verifyType";

export const useVerify = () => {
  const router = useRouter();

  return useMutation<VerifyResponse, unknown, VerifyRequest>({
    mutationFn: (data) => verifyService(data),
    onSuccess: (data) => {
      toast.success(data.message);
      router.push("/login");
    },
  });
};
