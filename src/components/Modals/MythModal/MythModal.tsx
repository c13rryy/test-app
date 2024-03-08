"use client";

import Modal from "@/components/ui/Modal/Modal";
import { typoStyles } from "@/components/ui/Typography/TypoStyles";
import { ModalContext } from "@/store/modal-store";
import chart from "public/images/graph.png";
import Image from "next/image";
import { useContext, useState } from "react";

const MythModal = ({}) => {
  const [imageLoad, setImageLoad] = useState(false);
  const { open, toggle } = useContext(ModalContext);

  return (
    <Modal isOpen={open.mythModal} toggle={() => toggle("mythModal")}>
      <div className="flex xl:flex-col flex-col-reverse xl:gap-[40px] gap-[20px]">
        <div className="flex flex-col gap-[9px]">
          <p className={`${typoStyles.defaultP} text-blue`}>
            В десятилетнем исследовании{" "}
            <span className="font-bold">
              «Генетическая эпидемиология ХОБЛ» (COPDGene)
            </span>{" "}
            среди <br />
            пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено
            <span className="font-bold">
              преобладание женщин (66%),
            </span> <br /> а в возрасте 60-64 лет количество женщин и мужчин.
          </p>
          <p className={`${typoStyles.defaultP} text-blue`}>
            Такое эпидемиологическое распределение заболеваемости ХОБЛ может
            быть связано с тем, что дыхательные пути курящих женщин имеют более
            <span className="font-bold">
              высокий процент площади стенок,
            </span>{" "}
            но меньшую площадь просвета, внутренний диаметр и толщину
            дыхательных путей по сравнению с курящими мужчинами.
          </p>
        </div>
        <div className={!imageLoad ? "bg-[#f7f5f5]" : "bg-white"}>
          <Image
            src={chart}
            alt="chart"
            loading="lazy"
            onLoad={() => setImageLoad(true)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default MythModal;
