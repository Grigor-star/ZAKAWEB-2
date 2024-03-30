import * as z from "zod";

interface LoginSchemaProps {
  email: string;
  password?: string;
}

interface RegisterSchemaProps {
  name: string;
  email: string;
  passwrod: string;
}

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const RegisterSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
});
