import { FC } from "react";
import { Button } from "../ui/Button";
export type ButtonProps = {
  onClickSubtract: () => void;
};

export const ButtonSubtract: FC<ButtonProps> = ({ onClickSubtract }) => {
  return (
    <Button onClick={onClickSubtract} className="rounded-l-none px-4">
      +
    </Button>
  );
};
