import { FC, ReactNode } from "react";

interface HobbleArrowProps {
  children: ReactNode;
}

const HobbleArrow: FC<HobbleArrowProps> = ({ children }) => {
  return (
    <div className="relative w-fit">
      <div className="xs:w-[248px] w-[200px] h-[115px] card-block flex items-center ">
        {children}
      </div>
      <div className="absolute top-[0] right-[-45px] z-[3]" id="triangle" />
      <div className="absolute top-[0] right-[-48px]" id="triangle-second" />
      <div className="w-full z-[4] absolute left-[1px] bottom-[-1px] h-[3px] line-bg" />
    </div>
  );
};

export default HobbleArrow;
