import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../lib/firebase/firebase";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";

const forgotPasswordSchema = z.object({
    email: z.string().email("E-mail inválido"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

interface ForgotPasswordFormProps {
    onSuccess: () => void;
}

const COOLDOWN_TIME = 60;
const STORAGE_KEY = "forgot-password-cooldown-end";

export function ForgotPasswordForm({ onSuccess }: ForgotPasswordFormProps) {
    const [loading, setLoading] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordSchema),
    });

    useEffect(() => {
        const storedEnd = localStorage.getItem(STORAGE_KEY);

        if (!storedEnd) return;

        const remaining = Math.ceil(
            (Number(storedEnd) - Date.now()) / 1000
        );

        if (remaining > 0) {
            setTimeLeft(remaining);
        } else {
            localStorage.removeItem(STORAGE_KEY);
        }
    }, []);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    localStorage.removeItem(STORAGE_KEY);
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft]);

    async function onSubmit(data: ForgotPasswordFormData) {
        if (timeLeft > 0) return;

        setLoading(true);
        try {
            await sendPasswordResetEmail(auth, data.email);

            const cooldownEnd = Date.now() + COOLDOWN_TIME * 1000;
            localStorage.setItem(STORAGE_KEY, cooldownEnd.toString());
            setTimeLeft(COOLDOWN_TIME);

            onSuccess();
        } catch (error) {
            console.error("Erro ao enviar e-mail de recuperação", error);
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
                    {...register("email")}
                    error={errors.email?.message}
                />

                <Button loading={loading} disabled={timeLeft > 0}>
                    {timeLeft > 0
                        ? `Reenviar em ${timeLeft}s`
                        : "Enviar instruções"}
                </Button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
                Lembrou da senha?{" "}
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
