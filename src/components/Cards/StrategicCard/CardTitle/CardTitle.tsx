"use client";

import Typo from "@/components/ui/Typography/Typo";
import { FC, useMemo } from "react";

interface CardTitleProps {
  title: string;
}

const CardTitle: FC<CardTitleProps> = ({ title }) => {
  const cardTitle = useMemo(() => title.split(" "), [title]);

  return (
    <Typo tag="h4" className="text-blue xl:text-center text-start">
      {cardTitle[0]} <span className="font-bold">{cardTitle[1]}</span>{" "}
      {cardTitle[2] ? cardTitle[2] : null}
    </Typo>
  );
};

export default CardTitle;
