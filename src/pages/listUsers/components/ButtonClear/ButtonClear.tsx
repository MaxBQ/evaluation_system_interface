import { FC } from "react";
import { Button } from "../ui/Button";
import { MdClear } from "react-icons/md";

export type ButtonClearProps = {
  className?: string;
  onClick: () => void;
};

export const ButtonClear: FC<ButtonClearProps> = ({ className, onClick }) => {
  return (
    <Button className={className} onClick={onClick}>
      <MdClear />
    </Button>
  );
};
