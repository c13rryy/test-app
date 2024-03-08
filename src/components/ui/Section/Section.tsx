import { FC, ReactNode } from "react";
import DivWrapper from "../DivWrapper/DivWrapper";
import Typo from "../Typography/Typo";
import sectionBg from "public/images/bg-section.png";
import Image from "next/image";

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Section: FC<SectionProps> = ({ title, className, children }) => {
  return (
    <section className={`${className} relative`}>
      <DivWrapper>
        <Typo tag="h1" className="text-blue relative z-[3]">
          {title}
        </Typo>
        {children}
      </DivWrapper>
      <div className="absolute top-[0]">
        <Image src={sectionBg} alt="section-bg" priority />
      </div>
    </section>
  );
};

export default Section;
