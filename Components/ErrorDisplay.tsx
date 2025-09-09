import type { ErrorDisplayProps } from "@/types";

export default function ErrorDisplay({ error, onRetry }: ErrorDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-900 border border-gray-700 rounded-lg mx-4 my-6">
      <div className="text-red-400 text-lg font-semibold mb-2">
        Something went wrong
      </div>
      <div className="text-gray-300 text-sm mb-4 text-center">{error}</div>
      <button
        onClick={onRetry}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
