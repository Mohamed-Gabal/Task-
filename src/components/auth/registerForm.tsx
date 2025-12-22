"use client";
import { useRegister } from "@/src/hooks/useRegister";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { registerSchema } from "@/src/validation/registerSchema";


const RegisterForm = () => {
  type Inputs = {
    name: string;
    email: string;
    password: string;
    mobile: string;
    password_confirmation: string;
    mobile_country_code: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate, isPending } = useRegister();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    mutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full max-w-md mx-auto p-6 sm:p-8 bg-white rounded-xl shadow-md"
      >
        <input
          {...register("name", { required: true })}
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && (
          <span className="text-sm text-red-500">{errors.name.message}</span>
        )}

        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && (
         <span className="text-sm text-red-500">{errors.email.message}</span>
        )}

        <input
          {...register("mobile", { required: true })}
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.mobile && (
         <span className="text-sm text-red-500">{errors.mobile.message}</span>
        )}

        <input
          {...register("password", { required: true })}
          type="text"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password && (
          <span className="text-sm text-red-500">{errors.password.message}</span>
        )}

        <input
          {...register("password_confirmation", { required: true })}
          type="text"
          placeholder="password Confirmation"
          className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password_confirmation && (
          <span className="text-sm text-red-500">{errors.password_confirmation.message}</span>
        )}

        <input
          {...register("mobile_country_code", { required: true })}
          placeholder="Mobile Country Code"
          className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.mobile_country_code && (
          <span className="text-sm text-red-500">{errors.mobile_country_code.message}</span>
        )}

        <input
          type="submit"
          value={isPending ? "Registering..." : "Register"}
          disabled={isPending}
          className="mt-2 bg-blue-600 text-white py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition"
        />
      </form>
    </div>
  );
};
export default RegisterForm;
