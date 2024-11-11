import React from "react";

const ShimmerEffect = () => (
  <div className="flex flex-col items-center justify-center w-full h-screen space-y-6">
    {Array(8).fill().map((_, i) => (
      <div
        key={i}
        className="h-8 w-3/4 bg-gray-300 rounded-lg shadow-lg animate-pulse relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
      </div>
    ))}
  </div>
);

export default ShimmerEffect;