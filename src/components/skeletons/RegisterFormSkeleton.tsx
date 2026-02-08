export function RegisterFormSkeleton() {
    return (
        <div className="flex flex-col gap-4 animate-pulse">
            <div className="flex flex-col gap-2">
                <div className="h-4 w-20 bg-gray-200 rounded" />
                <div className="h-11 w-full bg-gray-200 rounded-lg" />
            </div>

            <div className="flex flex-col gap-2">
                <div className="h-4 w-20 bg-gray-200 rounded" />
                <div className="h-11 w-full bg-gray-200 rounded-lg" />
            </div>

            <div className="flex flex-col gap-2">
                <div className="h-4 w-28 bg-gray-200 rounded" />
                <div className="h-11 w-full bg-gray-200 rounded-lg" />
            </div>

            <div className="h-11 w-full bg-gray-300 rounded-lg mt-2" />

            <div className="flex justify-center mt-6">
                <div className="h-4 w-44 bg-gray-200 rounded" />
            </div>
        </div>
    );
}
