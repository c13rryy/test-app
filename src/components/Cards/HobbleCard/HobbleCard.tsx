import { Icon } from "@/components/ui/Icon/Icon";
import Typo from "@/components/ui/Typography/Typo";
import { FC, ReactNode } from "react";
import HobbleButton from "./HobbleButton/HobbleButton";
import HobbleArrow from "./HobbleArrow/HobbleArrow";
import { IAvailableIcons } from "@/assets/icons";

interface HobbleCardProps {
  icon: IAvailableIcons;
  children: ReactNode;
  description: string;
}

const HobbleCard: FC<HobbleCardProps> = ({ icon, description, children }) => {
  return (
    <div className="border-[1px] border-solid xl:max-h-[194px] h-full border-blue rounded-[20px] shadow lg:pl-[38px] pl-[24px] lg:pr-[52px] pr-[24px] xl:py-40 py-20 relative">
      <div className="flex xl:flex-row flex-col gap-29">
        <div className="flex xs:flex-row flex-col gap-29">
          <div>
            <Icon icon={icon} size={80} viewBox="0 0 80 80" />
          </div>
          <HobbleArrow>{children}</HobbleArrow>
        </div>
        <div className="relative xl:ml-[47px] ml-[0px] text-[13px] max-h-[99px] w-full overflow-clip">
          <Typo type="defaultP" text={description} className="text-blue" />
          <div className="absolute xl:bottom-[-1px] bottom-[4px] left-[0] h-[15px] w-full bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>
      <HobbleButton type={icon} />
    </div>
  );
};

export default HobbleCard;
