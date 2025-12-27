"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { verifySchema } from "@/src/validation/verifySchema";
import { VerifyRequest } from "@/src/types/verifyType";
import { useVerify } from "@/src/hooks/useVerify";
import { useResendCode } from "@/src/hooks/useResendCode";
import FormInput from "../shared/ui/FormInput";

const VerifyForm = () => {
  const { mutate, isPending } = useVerify();
  const { mutate: resend, isPending: resendPending } = useResendCode();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<z.infer<typeof verifySchema>>({
    resolver: zodResolver(verifySchema),
  });

  const onSubmit: SubmitHandler<VerifyRequest> = (data) => {
    mutate(data, {
      onError: (error: any) => {
        const backendErrors = error?.response?.data?.errors;

        if (backendErrors) {
          Object.entries(backendErrors).forEach(([field, messages]: any) => {
            setError(field as keyof VerifyRequest, {
              type: "server",
              message: messages.join(" "),
            });
          });
        }
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full max-w-md mx-auto p-6 sm:p-8 bg-white rounded-xl shadow-md"
      >
        <h1 className="text-2xl font-bold text-center">Verify Account</h1>

        <FormInput
          label="Verification Code"
          placeholder="123456"
          register={register("code")}
          error={errors.code}
        />

        <input
          type="submit"
          value={isPending ? "Verifying..." : "Verify"}
          disabled={isPending}
          className="bg-[#BE968E] text-white py-2 rounded-lg"
        />

        <button
          type="button"
          onClick={() => resend()}
          disabled={resendPending}
          className="text-sm text-[#BE968E]"
        >
          {resendPending ? "Sending..." : "Resend code"}
        </button>
      </form>
    </div>
  );
};

export default VerifyForm;
