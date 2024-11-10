import React from "react";

const ShimmerEffect = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="h-8 w-3/4 bg-gray-300 rounded-lg overflow-hidden relative shadow-lg animate-pulse"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerEffect;
