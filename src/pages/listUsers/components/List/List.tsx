import { FC, HTMLAttributes } from "react";
import { ButtonRating } from "../ButtonRating";
import { motion } from "framer-motion";
import { ButtonClear } from "../ButtonClear";
import { useAppState } from "../../../../state/AppStateContext";
import { clearUser } from "../../../../state/actions";
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
  const { dispatch } = useAppState();
  const clearButtonClear = () => {
    console.log("click clear");
    dispatch(clearUser(userId));
  };
  return (
    <motion.li
      variants={item}
      className=" flex items-center w-full justify-between group gap-3"
    >
      <p className="w-3/6 truncate">
        {firstName}&nbsp;{lastName}
      </p>
      <p className="w-1/6 text-center">{rating}</p>
      <div className="w-2/6 flex items-center justify-end gap-1">
        {rating === 0 ? <ButtonClear onClick={clearButtonClear} /> : null}
        <ButtonRating className="" id={userId} />
      </div>
    </motion.li>
  );
};
