import { IAvailableIcons } from "@/assets/icons";

export interface StrategicCardProps {
  icon: IAvailableIcons;
  title: string;
  description: string;
}

export interface InfoCardProps {
  description: string;
}

export interface ModalCardProps {
  icon: IAvailableIcons;
  title: string;
  description: string;
  thinyText: string;
}
