import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { AppSkeleton } from "../components/skeletons/AppSkeleton";
import type { JSX } from "react";

export function PrivateRoute({ children }: { children: JSX.Element }) {
    const { user, loading } = useAuth();

    if (loading) {
        return <AppSkeleton />;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
