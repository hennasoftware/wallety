export function LoginFormSkeleton() {
    return (
        <div className="flex flex-col gap-4 animate-pulse">
            <div className="space-y-2">
                <div className="h-4 w-20 bg-gray-200 rounded" />
                <div className="h-11 w-full bg-gray-200 rounded-lg" />
            </div>

            <div className="space-y-2">
                <div className="h-4 w-16 bg-gray-200 rounded" />
                <div className="h-11 w-full bg-gray-200 rounded-lg" />
            </div>

            <div className="h-11 w-full bg-gray-300 rounded-lg mt-2" />

            <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-gray-200" />
                <div className="h-3 w-10 bg-gray-200 rounded" />
                <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="h-11 w-full bg-gray-200 rounded-lg" />

            <div className="h-4 w-40 bg-gray-200 rounded mx-auto mt-4" />
        </div>
    );
}
