import { FC, HTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
  children?: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={`rounded-xl p-1 shadow-md border-gray-300 bg-darkBlueSteel text-gray-200 transition duration-200 ease-in-out active:scale-90 hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};
