'use client'
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { registerService } from "../services/registerService"
import { useRouter } from "next/navigation"

export const useRegister = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (data) => registerService(data),
    onSuccess: (data) => {
      toast.success("Registered Successfully! Please Login.")
      router.push("/login")
      localStorage.setItem("token", data?.data?.token)
    }
  })
}