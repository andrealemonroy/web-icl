import React, { useRef, InputHTMLAttributes } from 'react';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ id, label, ...props }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex items-center hover:bg-gray-200 p-2 rounded">
      {/* The label that wraps both the styled part and the actual input */}
      <label htmlFor={id} className="radio-button mr-2 cursor-pointer">
        {/* Invisible but functional radio input */}
        <input
          type="radio"
          id={id}
          ref={inputRef}
          className="opacity-0 absolute"
          {...props}
        />
        {/* Custom styled part for the radio button */}
        <div className="radio-inner"></div>
      </label>
      {/* Label for the radio button's text */}
      <label htmlFor={id} className="cursor-pointer font-medium text-gray-700">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
