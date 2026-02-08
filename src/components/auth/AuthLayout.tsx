import {AnimatePresence} from "framer-motion";
import {CardTransition} from "../animations/CardTransition.tsx";

interface AuthLayoutProps {
    title: string;
    subtitle?: string | undefined;
    loading?: boolean;
    children: React.ReactNode;
    footer?: React.ReactNode;
}

export function AuthLayout({
                               title,
                               subtitle,
                               loading = false,
                               children,
                               footer,
                           }: AuthLayoutProps) {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gray-50">

            <aside
                className="
          relative flex flex-col justify-between
          px-6 py-10 lg:px-16
          bg-gradient-to-br
          from-emerald-400 via-emerald-500 to-emerald-600
          lg:from-emerald-500 lg:via-emerald-600 lg:to-emerald-700
          text-white overflow-hidden
        "
            >
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/25 rounded-full blur-3xl"/>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"/>

                <div className="relative z-10">
                    <h1 className="text-2xl font-bold tracking-tight">
                        Wallety
                    </h1>
                </div>

                <div className="relative z-10 max-w-md mt-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold leading-tight mb-4">
                        Tenha controle total
                        <br/>
                        sobre seu dinheiro
                    </h2>

                    <p className="text-sm lg:text-base text-white/90 leading-relaxed">
                        Visualize, organize e acompanhe suas finanças de forma simples,
                        clara e eficiente.
                    </p>
                </div>

                <div className="relative z-10 text-xs text-white/70 mt-10">
                    © {new Date().getFullYear()} Henna Software. Todos os direitos reservados.
                </div>

            </aside>

            <main className="flex items-center justify-center px-4 py-10">
                <AnimatePresence mode="wait">
                    <CardTransition key={title}>
                        <div
                            className="
            w-full max-w-md bg-white rounded-2xl
            p-6 sm:p-8
            shadow-lg border border-gray-100
          "
                        >
                            <header className="mb-6">
                                {loading ? (
                                    <div className="space-y-3 animate-pulse">
                                        <div className="h-6 w-3/4 bg-gray-200 rounded"/>
                                        <div className="h-4 w-full bg-gray-200 rounded"/>
                                    </div>
                                ) : (
                                    <>
                                        <h2 className="text-2xl font-semibold text-gray-800">
                                            {title}
                                        </h2>
                                        {subtitle && (
                                            <p className="text-sm text-gray-500 mt-1">
                                                {subtitle}
                                            </p>
                                        )}
                                    </>
                                )}
                            </header>
                            {children}


                            {footer && !loading && (
                                <div className="mt-6 text-center text-sm text-gray-500">
                                    {footer}
                                </div>
                            )}
                        </div>
                    </CardTransition>
                </AnimatePresence>
            </main>
        </div>
    );
}
