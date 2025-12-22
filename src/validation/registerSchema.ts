import { z } from "zod";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

const countryCodeRegex = /^[1-9][0-9]{0,3}$/;
const mobileRegex = /^[1-9][0-9]{6,11}$/;

export const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),

    email: z.string().email("Invalid email address"),

    mobile_country_code: z
      .string()
      .regex(countryCodeRegex, "Invalid country code"),

    mobile: z
      .string()
      .regex(mobileRegex, "Invalid mobile number"),

    password: z
      .string()
      .regex(
        passwordRegex,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),

    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });
