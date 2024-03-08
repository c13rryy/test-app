import Typo from "@/components/ui/Typography/Typo";
import { FC } from "react";

interface InfoCardProps {
  description: string;
}

const InfoCard: FC<InfoCardProps> = ({ description }) => {
  return (
    <div className="strategic-bg lg:px-40 xl:px-25 mds:px-[18px] px-[13px] md:py-30 sm:py-[22px] py-[16px] rounded-[20px] info-card">
      <Typo type="defaultP" text={description} className="text-blue" />
    </div>
  );
};

export default InfoCard;
