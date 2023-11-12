import React, { FC } from 'react';

interface ButtonProps {
  color?: string;
  children: React.ReactNode;
  onClick?: any;
}

export const Button: FC<ButtonProps> = ({ children, color, onClick }) => {
  return (
    <button
      className={`${
        color ? color : 'bg-primary text-white border border-primary'
      } font-lato-bold rounded-md px-2 py-2 w-full`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
