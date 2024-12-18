import React from "react";

const Logs = () => {
  const logs = [
    { type: "win", val: 1 },
    { type: "win", val: 2 },
    { type: "lost", val: 100 },
  ];
  return (
    <div className="w-[20%] h-full p-5 border-l border-white/40 flex gap-3 flex-col">
      <div>
        <span className="font-semibold">Your Activity</span>
      </div>
      <div className="flex flex-col">
        {logs.map((item, id) => (
          <span key={id} className="font-light text-sm">
            {item.type === "win" ? (
              <>
                You won{" "}
                <span className="text-green-500 font-medium">${item.val}</span>
              </>
            ) : (
              <>
                You lost{" "}
                <span className="text-red-500 font-medium">${item.val}</span>
              </>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Logs;
