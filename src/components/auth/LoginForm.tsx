import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../../schemas/auth.schema";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Divider } from "../ui/Divider";
import { useState } from "react";
import { getFirebaseAuthErrorMessage } from "../../lib/firebase/utils/firebaseErrors";

export function LoginForm() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [authError, setAuthError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    async function onSubmit(data: LoginFormData) {
        setLoading(true);
        setAuthError(null);

        try {
            await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            navigate("/");
        } catch (error) {
            setAuthError(getFirebaseAuthErrorMessage(error));
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
            >
                <Input
                    label="E-mail"
                    type="email"
                    autoComplete="email"
                    disabled={loading}
                    {...register("email")}
                    error={errors.email?.message}
                />

                <Input
                    label="Senha"
                    type="password"
                    autoComplete="current-password"
                    disabled={loading}
                    {...register("password")}
                    error={errors.password?.message}
                />

                <p className="text-sm text-right">
                    <Link
                        to="/forgot-password"
                        className="text-emerald-600 hover:underline"
                    >
                        Esqueci minha senha
                    </Link>
                </p>

                {authError && (
                    <p className="text-sm text-red-600 text-center">
                        {authError}
                    </p>
                )}

                <Button type="submit" loading={loading} disabled={loading}>
                    Entrar
                </Button>
            </form>

            <Divider />

            <button
                type="button"
                disabled={loading}
                className="
                  h-11 w-full rounded-lg border border-gray-300
                  text-sm font-medium
                  hover:bg-gray-50
                  transition
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                "
            >
                Entrar com Google
            </button>

            <p className="mt-6 text-center text-sm text-gray-500">
                Não tem conta?{" "}
                <Link
                    to="/register"
                    className="text-emerald-600 font-medium hover:underline"
                >
                    Criar agora
                </Link>
            </p>
        </>
    );
}
