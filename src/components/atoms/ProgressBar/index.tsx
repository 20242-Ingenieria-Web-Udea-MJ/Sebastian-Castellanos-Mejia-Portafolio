import React from 'react';

const ProgressBar = ({ title, percentage }: { title: string, percentage: number }) => {
  return (
    <div className="w-full mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-gray-500">{title}</span>
        <span className="text-gray-500">{percentage}%</span>
      </div>
      <div className="relative w-full h-4 bg-transparent border-2 border-secondary rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-secondary rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
