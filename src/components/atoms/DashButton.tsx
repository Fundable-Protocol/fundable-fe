"use client"
import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline';

}

export const DashButton: React.FC<ButtonProps> = ({ 
  children, 
  variant = "primary",
  type = "button",
  disabled = false,
  className = "",
  ...rest
}) => {
     const variantClasses = {
      primary: "bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 text-white",
      outline: "border border-gray-600 hover:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-400 hover:text-gray-300"
     };
     
    const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  
     return (
       <button 
       
       className={`px-3 py-1 rounded text-sm transition-colors ${variantClasses[variant]} ${disabledClasses} ${className}`}
       disabled={disabled}
       type={type}
       {...rest}
       >
         {children}
       </button>
     );
   };