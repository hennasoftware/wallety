import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Login from "../pages/Login";
import Register from "../pages/Register";
import ComingSoon from "../pages/ComingSoon";
import { PrivateRoute } from "./PrivateRoute";
import ForgotPassword from "../pages/ForgotPassword.tsx";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />

                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <ComingSoon />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
}

export function AppRoutes() {
    return (
        <BrowserRouter>
            <AnimatedRoutes />
        </BrowserRouter>
    );
}
