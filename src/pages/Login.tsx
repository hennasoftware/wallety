import {Navigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import {AuthLayout} from "../components/auth/AuthLayout";
import {LoginForm} from "../components/auth/LoginForm";
import {LoginFormSkeleton} from "../components/skeletons/LoginFormSkeleton.tsx";
import { usePageSkeleton } from "../hooks/usePageSkeleton";

export default function Login() {
    const {user, loading} = useAuth();
    const pageLoading = usePageSkeleton();

    if (user) {
        return <Navigate to="/" replace />;
    }

    if (pageLoading) {
        return (
            <AuthLayout title="Bem-vindo ao Wallety">
                <LoginFormSkeleton />
            </AuthLayout>
        );
    }

    return (
        <AuthLayout
            title="Bem-vindo ao Wallety"
            subtitle="Controle seu dinheiro. Simplifique sua vida."
            loading={loading}
        >
            {loading ? <LoginFormSkeleton /> : <LoginForm />}
        </AuthLayout>
    );
}
