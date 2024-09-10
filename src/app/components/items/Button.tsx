"use client"

// Button.tsx
import React from 'react';

interface ButtonProps {
  text: string;
  isRounded?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, isRounded = false }) => {
  return (
    <button
      className={`font-poppins font-medium text-sm text-black bg-[#F2DD52] px-12 py-3 transition duration-300 hover:-translate-y-1 ${
        isRounded ? 'rounded-full' : 'rounded-md'
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
