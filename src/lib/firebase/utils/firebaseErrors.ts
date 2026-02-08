import { FirebaseError } from "firebase/app";

export function getFirebaseAuthErrorMessage(error: unknown): string {
    if (error instanceof FirebaseError) {
        switch (error.code) {
            case "auth/invalid-credential":
                return "E-mail ou senha inválidos.";

            case "auth/user-not-found":
                return "Conta não encontrada.";

            case "auth/wrong-password":
                return "Senha incorreta.";

            case "auth/email-already-in-use":
                return "Este e-mail já está em uso.";

            case "auth/weak-password":
                return "A senha deve ter pelo menos 6 caracteres.";

            case "auth/invalid-email":
                return "E-mail inválido.";

            case "auth/too-many-requests":
                return "Muitas tentativas. Tente novamente mais tarde.";

            default:
                return "Ocorreu um erro inesperado. Tente novamente.";
        }
    }

    return "Erro inesperado. Verifique sua conexão.";
}
