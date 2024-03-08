"use client";
import { disableScroll } from "@/helpers/disableScroll";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { FC, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "../Icon/Icon";

interface ModalProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  toggle: () => void;
  className?: string;
}

const Modal: FC<ModalProps> = ({ isOpen, toggle, className, children }) => {
  const [mounted, setMounted] = useState(false);
  const modalWindow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMounted(true);
    }

    if (isOpen) {
      disableScroll(isOpen);
    }

    return () => {
      disableScroll(false);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        toggle();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, toggle]);

  useOnClickOutside(modalWindow, () => toggle());

  if (!isOpen) {
    return null;
  }

  return mounted
    ? createPortal(
        <div className="fixed inset-[0] flex justify-center overflow-y-auto overflow-x-hidden items-center z-[130] bg-[#000] bg-opacity-25 backdrop-blur-sm">
          <div
            ref={modalWindow}
            className={`max-w-[1290px] relative 2xl:w-full w-[95%] modal-animation border-[1px]  overflow-y-auto border-solid  rounded-[20px] border-blue bg-white xl:px-[38px] px-20 xl:py-40 py-20 ${className}`}
          >
            {children}
            <div className="absolute xl:right-[15px] right-[4px] top-[10px]">
              <button onClick={() => toggle()}>
                <Icon icon="close" size={24} />
              </button>
            </div>
          </div>
        </div>,
        document.getElementById("modal")!
      )
    : null;
};

export default Modal;
