import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    registerSchema,
    type RegisterFormData,
} from "../../schemas/auth.schema";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase/firebase.ts";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export function RegisterForm() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });

    async function onSubmit(data: RegisterFormData) {
        setLoading(true);

        try {
            await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            navigate("/");
        } catch (error) {
            console.error("Erro ao criar conta", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <Input
                    label="E-mail"
                    type="email"
                    {...register("email")}
                    error={errors.email?.message}
                />

                <Input
                    label="Senha"
                    type="password"
                    {...register("password")}
                    error={errors.password?.message}
                />

                <Input
                    label="Confirmar senha"
                    type="password"
                    {...register("confirmPassword")}
                    error={errors.confirmPassword?.message}
                />

                <Button loading={loading}>
                    Criar conta
                </Button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
                Já tem uma conta?{" "}
                <Link
                    to="/login"
                    className="text-emerald-600 font-medium hover:underline"
                >
                    Entrar
                </Link>
            </p>
        </>
    );
}
