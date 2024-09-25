import React from 'react';

type ProgressBar = {
  titulo: string;
  percentage: number;
};

const ProgressBar = ({ titulo, percentage }: ProgressBar) => {
  return (
    <div className="mb-4 w-full">
      <div className="flex justify-between text-gray-600">
        <span>{titulo}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded">
        <div
          className="bg-yellow-400 h-2 rounded"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;