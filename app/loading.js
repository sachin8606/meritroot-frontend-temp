// app/loading.js
export default function Loading() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-600 mb-4">Loading...</p>
          {/* You can add a spinner or any custom loading animation here */}
          <div className="loader"></div>
        </div>
      </div>
    );
  }
  