import React from "react";

export type TextareaProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  required?: boolean;
  name?: string;
  rows?: number;
};

export const Textarea = ({
  placeholder,
  value,
  onChange,
  className = "",
  required = false,
  name,
  rows = 4,
}: TextareaProps) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      name={name}
      rows={rows}
      className={`w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none ${className}`}
    />
  );
};
