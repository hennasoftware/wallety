import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { AuthLayout } from "../components/auth/AuthLayout";
import { RegisterForm } from "../components/auth/RegisterForm";
import { RegisterFormSkeleton } from "../components/skeletons/RegisterFormSkeleton.tsx";
import { usePageSkeleton } from "../hooks/usePageSkeleton";

export default function Register() {
    const { user, loading } = useAuth();
    const pageLoading = usePageSkeleton();

    if (user) {
        return <Navigate to="/" replace />;
    }

    if (pageLoading) {
        return (
            <AuthLayout title="Crie sua conta">
                <RegisterFormSkeleton />
            </AuthLayout>
        );
    }

    return (
        <AuthLayout
            title="Crie sua conta"
            subtitle="Comece a organizar sua vida financeira"
            loading={loading}
        >
            {loading ? <RegisterFormSkeleton/> : <RegisterForm />}
        </AuthLayout>
    );
}
