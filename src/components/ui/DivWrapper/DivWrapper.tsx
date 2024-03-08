import { ReactNode } from "react";

const DivWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={`${className} lg:px-45 sm:px-25 px-[8px] `}>{children}</div>
  );
};

export default DivWrapper;
