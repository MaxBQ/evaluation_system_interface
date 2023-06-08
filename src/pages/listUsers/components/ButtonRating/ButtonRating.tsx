import { FC } from "react";
import { ButtonIntercalate } from "./ButtonIntercalate";
import { ButtonSubtract } from "./ButtonSubtract";

export type ButtonRatingProps = {
  className?: string;
};

export const ButtonRating: FC<ButtonRatingProps> = ({ className }) => {
  return (
    <div
      className={`transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 flex items-center justify-end  ${className}`}
    >
      <ButtonIntercalate onClickIntercalate={() => {}} />
      <ButtonSubtract onClickSubtract={() => {}} />
    </div>
  );
};
