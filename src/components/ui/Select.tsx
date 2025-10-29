import React from "react";

export type SelectProps = {
  options: Array<{ value: string; label: string }>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  required?: boolean;
  name?: string;
  placeholder?: string;
};

export const Select = ({
  options,
  value,
  onChange,
  className = "",
  required = false,
  name,
  placeholder = "Select an option",
}: SelectProps) => {
  return (
    <select
      value={value}
      onChange={onChange}
      required={required}
      name={name}
      className={`w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white ${className}`}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
