import React, { ReactNode } from "react";

interface BackgroundProps {
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#FFFBF7] md:bg-[#BB1850]">
      {children}
    </div>
  );
};

export default Background;
