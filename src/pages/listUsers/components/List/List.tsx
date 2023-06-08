import { FC, HTMLAttributes } from "react";
import { ButtonRating } from "../ButtonRating";

export type ListProps = {
  firstName: string;
  lastName: string;
  rating?: number;
} & HTMLAttributes<HTMLLIElement>;

export const List: FC<ListProps> = ({ firstName, lastName, rating }) => {
  return (
    <li className="flex items-center w-full justify-between group gap-3">
      <p className="w-3/6 truncate">
        {firstName}&nbsp;{lastName}
      </p>
      <p className="w-1/6 text-center">{rating}</p>
      <ButtonRating className="w-2/6" />
    </li>
  );
};
