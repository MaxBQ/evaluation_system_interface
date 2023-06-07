import { FC, HTMLAttributes, ReactNode } from "react";

export type ContainerUsersProps = {
  children?: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export const ContainerUsers: FC<ContainerUsersProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={`rounded-xl p-2 w-auto border shadow-md border-gray-300 ${className}`}
    >
      {children}
    </div>
  );
};
