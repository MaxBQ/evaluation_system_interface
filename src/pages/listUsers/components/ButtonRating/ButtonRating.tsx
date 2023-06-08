import { FC } from "react";
import { ButtonIntercalate } from "./ButtonIntercalate";
import { ButtonSubtract } from "./ButtonSubtract";
import { useAppState } from "../../../../state/AppStateContext";
import { intercalateRating, subtractRating } from "../../../../state/actions";

export type ButtonRatingProps = {
  className?: string;
  id: number;
};

export const ButtonRating: FC<ButtonRatingProps> = ({ id, className }) => {
  const { dispatch } = useAppState();
  const onClickIntercalate = () => {
    dispatch(intercalateRating(id));
  };
  const onClickSubtract = () => {
    dispatch(subtractRating(id));
  };
  return (
    <div
      className={`transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 flex items-center justify-end  ${className}`}
    >
      <ButtonIntercalate onClickIntercalate={onClickIntercalate} />
      <ButtonSubtract onClickSubtract={onClickSubtract} />
    </div>
  );
};
