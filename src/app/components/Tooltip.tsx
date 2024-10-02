import React from "react";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className="relative group inline-block">
      {children}
      <div className="hidden md:block absolute left-0 z-10 w-max max-w-xs px-3 py-2 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg pointer-events-none">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
