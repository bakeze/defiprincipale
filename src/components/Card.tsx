import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`w-full h-full md:bg-[#FFFBF7] md:rounded-[50px] flex flex-col items-center mt-16 justify-center p-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
