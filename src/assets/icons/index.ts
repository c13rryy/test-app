import CardIcon from "./CardIcon";
import Click from "./Click";
import Close from "./Close";
import Disease from "./Disease";
import Heart from "./Heart";
import HeartAttack from "./HeartAttack";
import Person from "./Person";
import Raiting from "./Raiting";
import SectionIcon from "./SectionIcon";
import Triangle from "./Triangle";

export const content = {
  "card-icon": CardIcon,
  triangle: Triangle,
  "section-icon": SectionIcon,
  click: Click,
  raiting: Raiting,
  person: Person,
  close: Close,
  heart: Heart,
  "heart-attack": HeartAttack,
  disease: Disease,
};

export type IAvailableIcons = keyof typeof content;
