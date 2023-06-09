import { FC, useEffect } from "react";
import { ButtonIntercalate } from "./ButtonIntercalate";
import { ButtonSubtract } from "./ButtonSubtract";
import { useAppState } from "../../../../state/AppStateContext";
import {
  intercalateRating,
  subtractRating,
  userBan,
  userSuccess,
} from "../../../../state/actions";

export type ButtonRatingProps = {
  className?: string;
  id: number;
  rating?: number;
};

export const ButtonRating: FC<ButtonRatingProps> = ({
  id,
  className,
  rating,
}) => {
  const { dispatch } = useAppState();
  const onClickIntercalate = () => {
    console.log("click Intercalate");
    dispatch(intercalateRating(id));
  };
  const onClickSubtract = () => {
    console.log("click Subtract");
    dispatch(subtractRating(id));
  };
  useEffect(() => {
    if (rating === 5) {
      dispatch(userSuccess(id));
    }
    if (rating === -5) {
      dispatch(userBan(id));
    }
  }, [rating]);
  return (
    <div
      className={`transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 flex items-center justify-end  ${className}`}
    >
      <ButtonIntercalate onClickIntercalate={onClickIntercalate} />
      <ButtonSubtract onClickSubtract={onClickSubtract} />
    </div>
  );
};
