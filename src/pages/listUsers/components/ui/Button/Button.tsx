import { FC, HTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
  children?: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={`rounded-xl p-1 shadow-md border-gray-300 bg-gray-400 ${className}`}
    >
      {children}
    </button>
  );
};
