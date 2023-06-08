import { FC, HTMLAttributes } from "react";
import { ButtonRating } from "../ButtonRating";
import { motion } from "framer-motion";
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export type ListProps = {
  firstName: string;
  lastName: string;
  rating?: number;
  userId: number;
} & HTMLAttributes<HTMLLIElement>;

export const List: FC<ListProps> = ({
  userId,
  firstName,
  lastName,
  rating,
}) => {
  return (
    <motion.li
      variants={item}
      className=" flex items-center w-full justify-between group gap-3"
    >
      <p className="w-3/6 truncate">
        {firstName}&nbsp;{lastName}
      </p>
      <p className="w-1/6 text-center">{rating}</p>
      <ButtonRating className="w-2/6" id={userId} />
    </motion.li>
  );
};
