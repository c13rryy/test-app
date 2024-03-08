"use client";

import { IAvailableIcons } from "@/assets/icons";
import { Icon } from "@/components/ui/Icon/Icon";
import { ModalContext } from "@/store/modal-store";
import { useContext } from "react";

interface HobbleButtonProps {
  type: IAvailableIcons;
}

const HobbleButton = ({ type }: HobbleButtonProps) => {
  const { toggle } = useContext(ModalContext);

  function handleClick() {
    toggle(type === "person" ? "mythModal" : "realModal");
  }
  return (
    <button
      onClick={handleClick}
      className="absolute xl:right-[-27px] xl:top-[-25px] top-[-22px] right-10"
    >
      <Icon icon="click" size={49} viewBox="0 0 49 49" />
    </button>
  );
};

export default HobbleButton;
