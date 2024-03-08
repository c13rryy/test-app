"use client";

import ModalCard from "@/components/Cards/ModalCard/ModalCard";
import Modal from "@/components/ui/Modal/Modal";
import { typoStyles } from "@/components/ui/Typography/TypoStyles";
import { CARD_DATA } from "@/data/modal-card-data";
import { ModalContext } from "@/store/modal-store";
import { useContext } from "react";

const RealModal = ({}) => {
  const { open, toggle } = useContext(ModalContext);
  return (
    <Modal
      className="h-full"
      isOpen={open.realModal}
      toggle={() => toggle("realModal")}
    >
      <div className="flex flex-col xl:gap-[40px] gap-[20px]">
        <div className="flex flex-col gap-[9px]">
          <p className={`!font-bold text-blue ${typoStyles.defaultP}`}>
            Большинство пациентов c ХОБЛ столкнется c обострениями: как минимум
            одно среднетяжелое или тяжелое обострение случится в течение 3 лет y
            77% пациентов.
          </p>
          <p className={`${typoStyles.defaultP} text-blue`}>
            B течение 5 лет после первого тяжёлого обострения в живых остаются
            только 40% пациентов. Прогноз после обострений ХОБЛ схож c таковым
            при сердечной недостаточности, инфаркте миокарда и некоторых
            злокачественных опухолях.
          </p>
        </div>
        <h2 className="text-30 font-bold text-blue text-center">
          Пятилетняя выживаемость пациентов
        </h2>
        <div className="grid xl:grid-cols-3 sm:grid-cols-1 2xl:gap-[54px] lg:gap-[34px] gap-[20px]">
          {CARD_DATA.map(card => (
            <ModalCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              thinyText={card.thinyText}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default RealModal;
