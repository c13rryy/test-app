"use client";

import Typo from "@/components/ui/Typography/Typo";
import { FC, useMemo } from "react";

interface CardDescriptionProps {
  description: string;
}

const CardDescription: FC<CardDescriptionProps> = ({ description }) => {
  const cardDescription = useMemo(() => description.split(" "), [description]);
  const cardDescriptionBold = useMemo(
    () => cardDescription.slice(2).join(" "),
    [cardDescription]
  );

  return (
    <Typo type="defaultP" className="text-blue xl:text-center text-start">
      {cardDescription[0]} {cardDescription[1]}{" "}
      <span className="font-bold">{cardDescriptionBold}</span>
    </Typo>
  );
};

export default CardDescription;
