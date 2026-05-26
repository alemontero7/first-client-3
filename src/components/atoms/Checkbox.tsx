import React from 'react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, className = '', ...props }) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer group min-h-[44px] py-2 active:scale-[0.97] transition-transform duration-150">
      <input
        type="checkbox"
        className={`form-checkbox h-4 w-4 text-cx-walnut rounded-sm border-border focus:ring-ring focus:ring-offset-background transition-all duration-200 ${className}`}
        {...props}
      />
      <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">
        {label}
      </span>
    </label>
  );
};
