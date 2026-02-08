import { forwardRef } from "react";
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, className, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                    {label}
                </label>

                <input
                    ref={ref}
                    className={clsx(
                        `
            h-11 rounded-lg border px-4 text-sm
            outline-none transition
            focus:ring-2 focus:ring-emerald-500/30
            `,
                        error
                            ? "border-red-500 focus:ring-red-500/30"
                            : "border-gray-300 focus:border-emerald-500",
                        className
                    )}
                    {...props}
                />

                {error && (
                    <span className="text-xs text-red-500 mt-1">
            {error}
          </span>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";
