import { FC } from "react";
import { Icon } from "../Icon/Icon";

interface ArrowProps {
  className?: string;
}

const Arrow: FC<ArrowProps> = ({ className }) => {
  return (
    <div
      className={`xl:w-[425px] w-full flex flex-col items-center ${className}`}
    >
      <div className="border-x-[2px] border-b-[2px] w-full xl:h-[33px] h-[23px] border-solid border-blue" />
      <Icon
        icon="triangle"
        size={26}
        height={21}
        viewBox="0 0 26 21"
        className="relative top-[-1px]"
      />
    </div>
  );
};

export default Arrow;
