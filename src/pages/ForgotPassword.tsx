import { Navigate, Link } from "react-router-dom";
import { AuthLayout } from "../components/auth/AuthLayout";
import { ForgotPasswordForm } from "../components/auth/ForgotPasswordForm";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { ForgotPasswordSkeleton } from "../components/skeletons/ForgotPasswordSkeleton";
import { usePageSkeleton } from "../hooks/usePageSkeleton";

export default function ForgotPassword() {
    const [success, setSuccess] = useState(false);
    const { user } = useAuth();
    const pageLoading = usePageSkeleton();


    if (pageLoading) {
        return (
            <AuthLayout title="Recuperar senha">
                <ForgotPasswordSkeleton />
            </AuthLayout>
        );
    }

    if (user) {
        return <Navigate to="/" replace />;
    }

    return (
        <AuthLayout
            title="Recuperar senha"
            subtitle={
                success
                    ? undefined
                    : "Informe seu e-mail para redefinir sua senha"
            }
        >
            {success ? (
                <div className="text-center space-y-4">
                    <p className="text-sm text-gray-600">
                        Se este e-mail estiver cadastrado, você receberá uma mensagem
                        com instruções para redefinir sua senha.
                    </p>

                    <Link
                        to="/login"
                        className="text-emerald-600 font-medium hover:underline text-sm"
                    >
                        Voltar para o login
                    </Link>
                </div>
            ) : (
                <ForgotPasswordForm onSuccess={() => setSuccess(true)} />
            )}
        </AuthLayout>
    );
}
