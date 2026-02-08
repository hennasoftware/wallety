import { AuthProvider } from "./context/AuthContext";
import { AppRoutes } from "./routes";

export default function App() {
    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    );
}
