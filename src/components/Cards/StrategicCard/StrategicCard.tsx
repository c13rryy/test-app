import { IAvailableIcons } from "@/assets/icons";
import { Icon } from "@/components/ui/Icon/Icon";
import Typo from "@/components/ui/Typography/Typo";
import { FC } from "react";
import CardTitle from "./CardTitle/CardTitle";

export interface StrategicCardProps {
  icon: IAvailableIcons;
  title: string;
  description: string;
  cardNumber: number;
}

const StrategicCard: FC<StrategicCardProps> = ({
  title,
  icon,
  description,
  cardNumber,
}) => {
  return (
    <div className="strategic-bg w-full rounded-[20px] flex flex-col xl:gap-15 gap-[12px] xl:items-center items-start xl:px-[19px] px-[13px] xl:py-30 py-20">
      <div className="relative">
        <Icon icon={icon} size={126} height={106} viewBox="0 0 126 106" />
        <div className="xl:w-[80px] w-[60px] absolute xl:right-[-52px] right-[-32px] xl:top-[62px] top-[64px] xl:h-[80px] h-[60px] flex justify-center items-center rounded-[50%] circle-bg">
          <span className="font-bold xl:text-[48px] text-35 text-blue">
            {cardNumber}
          </span>
        </div>
      </div>
      <div className="mt-25 flex flex-col xl:gap-[12px]">
        <CardTitle title={title} />
        <Typo
          type="defaultP"
          className="text-blue xl:text-center text-start"
          text={description}
        />
      </div>
    </div>
  );
};

export default StrategicCard;
