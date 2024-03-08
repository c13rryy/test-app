/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState } from "react";

type ModalType = "mythModal" | "realModal";

export const ModalContext = createContext<{
  open: {
    mythModal: boolean;
    realModal: boolean;
  };
  toggle: (modalType: ModalType) => void;
}>({
  open: {
    mythModal: false,
    realModal: false,
  },
  toggle: (modalType: ModalType) => {},
});

export function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState({
    mythModal: false,
    realModal: false,
  });

  function handleToggle(modalType: ModalType) {
    setIsOpen(prev => {
      if (modalType === "mythModal") {
        return { ...prev, mythModal: !prev.mythModal };
      }

      if (modalType === "realModal") {
        return { ...prev, realModal: !prev.realModal };
      }

      return prev;
    });
  }

  const modalCtx = {
    toggle: handleToggle,
    open: isOpen,
  };

  return (
    <ModalContext.Provider value={modalCtx}>{children}</ModalContext.Provider>
  );
}
