"use client";
import { useRegister } from "@/src/hooks/useRegister";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { registerSchema } from "@/src/validation/registerSchema";
import { RegisterRequest } from "@/src/types/registerType";
import FormInput from "../shared/ui/FormInput";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate, isPending } = useRegister();

  const onSubmit: SubmitHandler<RegisterRequest> = (data) => {
    mutate(data, {
      onError: (error: unknown) => {
        const backendErrors = (error as { response?: { data?: { errors?: Record<string, string[]> } } })?.response?.data?.errors;
        if (backendErrors) {
          Object.entries(backendErrors).forEach(([field, messages]) => {
            setError(field as keyof RegisterRequest, {
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
        {/* Header */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold text-gray-900">
            Create Account
          </h1>
        </div>

        <FormInput
          label="Full Name"
          placeholder="Full Name"
          register={register("name")}
          error={errors.name}
        />

        <FormInput
          label="email"
          type="email"
          placeholder="Email Address"
          register={register("email")}
          error={errors.email}
        />

        <FormInput
          label="Phone Number"
          type="text"
          placeholder="Phone Number"
          register={register("mobile")}
          error={errors.mobile}
        />

        <FormInput
          label="password"
          type="password"
          placeholder="Password"
          register={register("password")}
          error={errors.password}
        />

        <FormInput
          label="password_confirmation"
          type="password"
          placeholder="Confirm Password"
          register={register("password_confirmation")}
          error={errors.password_confirmation}
        />

        <FormInput
          label="Mobile Country Code"
          placeholder="Mobile Country Code"
          register={register("mobile_country_code")}
          error={errors.mobile_country_code}
        />

        <input
          type="submit"
          value={isPending ? "Registering..." : "Register"}
          disabled={isPending || Object.keys(errors).length > 0}
          className={`mt-2 bg-blue-600 text-white py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition ${isPending || Object.keys(errors).length > 0 ? "opacity-50 cursor-not-allowed " : ""}`}
        />
      </form>
    </div>
  );
};
export default RegisterForm;
