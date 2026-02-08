export function AppSkeleton() {
    return (
        <div className="min-h-screen bg-gray-50 p-6 animate-pulse">
            <div className="max-w-6xl mx-auto space-y-6">
                <div className="h-10 w-40 bg-gray-200 rounded-lg" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="h-32 bg-gray-200 rounded-xl" />
                    <div className="h-32 bg-gray-200 rounded-xl" />
                    <div className="h-32 bg-gray-200 rounded-xl" />
                </div>

                <div className="h-64 bg-gray-200 rounded-xl" />
            </div>
        </div>
    );
}
