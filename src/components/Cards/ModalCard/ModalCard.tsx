import { IAvailableIcons } from "@/assets/icons";
import { Icon } from "@/components/ui/Icon/Icon";
import Typo from "@/components/ui/Typography/Typo";
import { FC } from "react";
import CardDescription from "./CardDescription/CardDescription";

interface ModalCardProps {
  icon: IAvailableIcons;
  title: string;
  description: string;
  thinyText: string;
}

const ModalCard: FC<ModalCardProps> = ({
  icon,
  title,
  description,
  thinyText,
}) => {
  return (
    <div className="bg-card-rgba px-[12px] flex flex-col gap-15 xl:items-center items-start xl:py-30 py-18 rounded-[20px]">
      <div className="flex justify-center">
        <Icon icon={icon} size={119} height={134} viewBox="0 0 119 134" />
      </div>
      <h3 className="2xl:text-[96px] text-[60px] font-bold text-blue ">
        {title}
      </h3>
      <CardDescription description={description} />
      <Typo
        type="thinyP"
        text={thinyText}
        className="text-blue xl:text-center text-start"
      />
    </div>
  );
};

export default ModalCard;
