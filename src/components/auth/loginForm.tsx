
"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLogin } from "@/src/hooks/useLogin";
import { loginSchema } from "@/src/validation/loginSchema";
import FormInput from "../shared/ui/FormInput";

type LoginInputs = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const { mutate, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    mutate(data, {
      onError: (error: any) => {
        const backendErrors = (error as { response?: { data?: { errors?: Record<string, string[]> } } })?.response?.data?.errors;
        if (backendErrors) {
          Object.entries(backendErrors).forEach(([field, messages]) => {
            setError(field as keyof LoginInputs, {
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
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold text-gray-900">Login</h1>
        </div>

        <FormInput
          label="Email"
          type="email"
          placeholder="Email Address"
          register={register("email")}
          error={errors.email}
        />

        <FormInput
          label="Password"
          type="password"
          placeholder="Password"
          register={register("password")}
          error={errors.password}
        />

        <input
          type="submit"
          value={isPending ? "Logging in..." : "Login"}
          disabled={isPending || Object.keys(errors).length > 0}
          className={`mt-2 bg-[#BE968E] text-white py-2 rounded-lg cursor-pointer hover:bg-[#A97F78] transition ${isPending || Object.keys(errors).length > 0
            ? "opacity-50 cursor-not-allowed"
            : ""
            }`}
        />
      </form>
    </div>
  );
};

export default LoginForm;
