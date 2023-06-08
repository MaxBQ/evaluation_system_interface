import { FC } from "react";
import { Button } from "../ui/Button";
export type ButtonProps = {
  onClickIntercalate: () => void;
};

export const ButtonIntercalate: FC<ButtonProps> = ({ onClickIntercalate }) => {
  return (
    <Button onClick={onClickIntercalate} className="rounded-r-none px-4">
      -
    </Button>
  );
};
