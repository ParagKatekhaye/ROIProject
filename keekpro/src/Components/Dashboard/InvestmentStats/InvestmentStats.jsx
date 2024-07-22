import React from 'react';

const InvestmentStats = ({ metrics = {} }) => {
  const {
    totalTarget = 1000,
    currentTarget =930,
    totalReturns = 330,
    totalProfitLoss = 60,
  } = metrics;

  return (
    <div className="flex items-center rounded-xl justify-around bg-white p-8 mt-6 min-h-[100px]">
      <div className="text-center">
        <p className="text-sm mb-2 text-muted-foreground">Total Target</p>
        <p className="text-lg font-bold">{totalTarget}</p>
      </div>
      <div className="text-center">
        <p className="text-sm mb-2 text-muted-foreground">Current Target</p>
        <p className="text-lg font-bold">{currentTarget}</p>
      </div>
      <div className="text-center">
        <p className="text-sm mb-2 text-muted-foreground">Total Returns</p>
        <p className="text-lg font-bold text-green-500">{totalReturns}</p>
      </div>
      <div className="text-center">
        <p className="text-sm mb-2 text-muted-foreground">Total Profit/ Loss</p>
        <p className="text-lg font-bold text-red-500">{totalProfitLoss.toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default InvestmentStats;
