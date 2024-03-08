import InfoCard from "@/components/Cards/InfoCard/InfoCard";
import StrategicCard from "@/components/Cards/StrategicCard/StrategicCard";
import Arrow from "@/components/ui/Arrow/Arrow";
import Section from "@/components/ui/Section/Section";
import Typo from "@/components/ui/Typography/Typo";
import { INFO_CARDS, STRATEGIC_CARDS } from "@/data/home-data";
import { FC } from "react";

interface TherapyFocusProps {}

const TherapyFocus: FC<TherapyFocusProps> = ({}) => {
  return (
    <Section title="Терапия ХОБЛ: что в фокусе?" className="mt-100">
      <div className="xl:mt-[83px] sm:mt-[40px] mt-20">
        <div className="xl:py-[22px] py-[12px] 2xl:px-[80px] xl:px-[40px] px-[20px] rounded-[20px] block-bg">
          <Typo tag="h2" className="text-blue xl:text-center text-start">
            Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии
          </Typo>
        </div>
        <div className="xl:mt-40 mt-[25px]">
          <Typo
            tag="h3"
            text="Приоритетные направления фармакотерапевтической стратегии при ХОБЛ1:"
            className="text-blue text-center"
          />
          <div className="flex xl:gap-30 gap-15 xl:mt-[50px] mds:mt-[30px] mt-[25px] xl:flex-row flex-col lg:flex-nowrap flex-wrap card">
            {STRATEGIC_CARDS.map((card, idx) => (
              <StrategicCard
                key={card.title}
                icon={card.icon}
                cardNumber={idx + 1}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
          <div className="flex xl:gap-30 gap-[0px] justify-center mt-[4px] sm:mb-[22px] mb-16 px-20">
            <Arrow />
            <Arrow className="xl:flex hidden" />
          </div>
          <div className="flex xl:flex-row flex-col xl:gap-30 gap-15 relative">
            {INFO_CARDS.map(el => (
              <InfoCard key={el.description} description={el.description} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TherapyFocus;
