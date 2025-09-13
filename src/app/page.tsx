"use client";
import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculate = () => {
    try {
      // using eval only for demo (unsafe in production)
      setResult(eval(input).toString());
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2">
      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-3xl p-4 sm:p-6 w-full max-w-xs sm:max-w-sm border border-white/30">
        <h1 className="text-xl sm:text-2xl font-extrabold mb-4 text-center text-white drop-shadow">
          ✨ Next.js Calculator ✨
        </h1>

        {/* Display */}
        <div className="bg-black/70 text-green-400 px-2 py-3 sm:p-3 rounded-xl mb-4 text-right font-mono text-xl sm:text-2xl h-16 sm:h-20 flex flex-col justify-center break-all">
          <span className="truncate">{input || "0"}</span>
          <span className="text-xs sm:text-sm text-gray-300">{result}</span>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "0",
            ".",
            "=",
            "+",
          ].map((btn) => (
            <button
              key={btn}
              onClick={() => (btn === "=" ? calculate() : handleClick(btn))}
              className={`py-3 sm:p-4 rounded-xl font-bold shadow-md transform active:scale-95 transition-all text-base sm:text-lg
                ${
                  btn === "="
                    ? "bg-green-500 hover:bg-green-600 text-white col-span-2"
                    : "bg-white/30 hover:bg-white/50 text-black"
                }`}
            >
              {btn}
            </button>
          ))}
          <button
            onClick={clearInput}
            className="col-span-2 bg-red-500 hover:bg-red-600 text-white py-3 sm:p-4 rounded-xl font-bold shadow-md transform active:scale-95 transition-all text-base sm:text-lg"
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}
