import logo from '../assets/image/logo-wallety.png';

export default function ComingSoon() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-100 px-4">
            <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl px-10 py-14 text-center">

                <span className="inline-block mb-6 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-xs font-medium text-emerald-300">
          🚀 Novidades em breve!!
        </span>

                <div className="flex justify-center">
                    <img src={logo} alt="Wallety Logo" className="h-20 w-auto" />
                </div>

                <h1 className="text-4xl font-bold tracking-tight">
                    Wallety
                </h1>

                <p className="mt-4 text-slate-300 leading-relaxed">
                    Controle financeiro inteligente, moderno e direto ao ponto.
                    <br />
                    Construído para quem quer clareza e controle real.
                </p>

                <div className="my-8 h-px w-full bg-white/10" />

                <a
                    href="https://discord.gg/AqG8jeFx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-400 transition"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 127.14 96.36"
                        className="h-5 w-5 fill-current"
                    >
                        <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.17-16.15C129.31,53.09,121.8,29.29,107.7,8.07ZM42.45,65.69c-6.18,0-11.27-5.63-11.27-12.57S36.09,40.55,42.45,40.55c6.37,0,11.46,5.64,11.27,12.57C53.72,60.06,48.63,65.69,42.45,65.69Zm42.24,0c-6.18,0-11.27-5.63-11.27-12.57s5.09-12.57,11.27-12.57c6.37,0,11.46,5.64,11.27,12.57C95.96,60.06,91.06,65.69,84.69,65.69Z" />
                    </svg>

                    Entrar no Discord
                </a>

                <p className="mt-10 text-xs text-slate-500">
                    © {new Date().getFullYear()} Henna Software - Todos os direitos reservados.
                </p>
            </div>
        </div>
    )
}
