"use client";

import { ModalContextProvider } from "@/store/modal-store";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <ModalContextProvider>{children}</ModalContextProvider>;
};

export default Providers;
