import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export type ContainerUsersProps = {
  children?: ReactNode;
  className?: string;
};

export const ContainerUsers: FC<ContainerUsersProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="visible"
      {...rest}
      className={`rounded-xl w-auto sm:w-72 md:w-80 p-2 lg:w-96 border shadow-md border-gray-300 grid  gap-2 items-center content-center ${className}`}
    >
      {children}
    </motion.ul>
  );
};
