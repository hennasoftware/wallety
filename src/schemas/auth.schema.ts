import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, "E-mail obrigatório")
        .email("E-mail inválido"),
    password: z
        .string()
        .min(6, "Mínimo 6 caracteres"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const registerSchema = z
    .object({
        email: z
            .string()
            .min(1, "E-mail obrigatório")
            .email("E-mail inválido"),
        password: z
            .string()
            .min(6, "Mínimo 6 caracteres"),
        confirmPassword: z
            .string()
            .min(6, "Confirme sua senha"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "As senhas não conferem",
    });

export type RegisterFormData = z.infer<typeof registerSchema>;
