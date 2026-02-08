interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
}

export function Button({
                           children,
                           loading,
                           disabled,
                           ...props
                       }: ButtonProps) {
    return (
        <button
            disabled={loading || disabled}
            className="
            cursor-pointer
        h-11 w-full rounded-lg
        bg-emerald-600 text-white text-sm font-medium
        hover:bg-emerald-700
        transition
        disabled:opacity-70 disabled:cursor-not-allowed
        flex items-center justify-center gap-2
      "
            {...props}
        >
            {loading && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"/>
            )}
            {children}
        </button>
    );
}
