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
      className={`rounded-xl w-auto sm:w-72 md:w-80 p-2 lg:w-96 border shadow-md border-gray-300 ${className}`}
    >
      {children}
    </div>
  );
};
