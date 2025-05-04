import React from 'react';

export default function Loading() {
    return (
        <div className="h-screen w-full flex justify-center items-center bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 dark:border-blue-400"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
            </div>
        </div>
    );
}