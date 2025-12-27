"use client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { resendCodeService } from "../services/resendCodeService";

export const useResendCode = () => {
  return useMutation({
    mutationFn: resendCodeService,
    onSuccess: (data) => {
      toast.success(data.message || "Code sent again");
    },
  });
};
