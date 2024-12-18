"use client";

import { useState } from "react";

const Input = ({ label }: { label: string }) => {
  const [currentBalance, setCurrentBalance] = useState(1000);
  const [currentBet, setCurrentBet] = useState(0);

  // Handle changes in input field
  const handleBetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= currentBalance) {
      setCurrentBet(value);
    }
  };

  // Handle Half Bet
  const handleHalfBet = () => {
    const halfValue = Math.floor(currentBet / 2);
    setCurrentBet(halfValue);
  };

  // Handle Twice Bet
  const handleTwiceBet = () => {
    const twiceValue = Math.min(currentBet * 2, currentBalance);
    setCurrentBet(twiceValue);
  };

  return (
    <div className="space-y-1">
      {/* Label and Current Balance */}
      <div className="flex justify-between items-center">
        <span className="font-medium text-base text-white/80">{label}</span>
        <span className="text-sm font-medium">{`$${currentBalance}`}</span>
      </div>

      {/* Input Field and Action Buttons */}
      <div className="flex">
        <input
          type="number"
          className="h-10 w-full p-2 rounded-l bg-black border text-white placeholder-white/60 focus:outline-none"
          placeholder="Enter bet amount"
          value={currentBet}
          onChange={handleBetChange}
          min={0}
          max={currentBalance}
        />
        <div className="h-10 border bg-black/50 flex gap-2 text-white text-sm font-medium items-center justify-center px-2 rounded-r">
          <button
            onClick={handleHalfBet}
            className="cursor-pointer hover:text-gray-300"
          >
            1/2
          </button>
          |
          <button
            onClick={handleTwiceBet}
            className="cursor-pointer hover:text-gray-300"
          >
            2x
          </button>
        </div>
      </div>

      {/* Display Current Bet */}
      <div className="text-sm text-white/80">
        {`Current Bet: $${currentBet}`}
      </div>
    </div>
  );
};

export default Input;
