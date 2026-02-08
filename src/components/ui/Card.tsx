export function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
            {children}
        </div>
    );
}
