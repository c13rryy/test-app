import HobbleCard from "@/components/Cards/HobbleCard/HobbleCard";
import Section from "@/components/ui/Section/Section";
import { typoStyles } from "@/components/ui/Typography/TypoStyles";
import { FC } from "react";

interface HobbleInfoProps {}

const HobbleInfo: FC<HobbleInfoProps> = ({}) => {
  return (
    <Section title="ХОБЛ: мифы и реальность">
      <div className="mt-[83px] flex flex-col gap-[40px]">
        <HobbleCard
          icon={"person"}
          description={
            "В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание..."
          }
        >
          <p className={`${typoStyles.defaultP} text-blue`}>
            ХОБЛ болеют{" "}
            <span className="font-bold">преимущественно мужчины?</span>
          </p>
        </HobbleCard>
        <HobbleCard
          icon={"raiting"}
          description={
            "Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение..."
          }
        >
          <p className={`${typoStyles.defaultP} text-blue`}>
            <span className="font-bold">Опасно</span> не наличие заболевания, а
            обострения?
          </p>
        </HobbleCard>
      </div>
    </Section>
  );
};

export default HobbleInfo;
