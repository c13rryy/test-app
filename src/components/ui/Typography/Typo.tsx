import { VariantTypoTags, VariantTypoTagsStyles } from "./types";
import classNames from "classnames";
import { typoStyles } from "./TypoStyles/index";

interface TypographyProps {
  text?: string | number;
  className?: string;
  children?: React.ReactNode;
  tag?: VariantTypoTags;
  type?: VariantTypoTagsStyles;
}

const Typo = ({ text, className, children, tag, type }: TypographyProps) => {
  const Tag = tag || "p";

  const classes = classNames({
    [typoStyles.h1]: tag === "h1",
    [typoStyles.h2]: tag === "h2",
    [typoStyles.h3]: tag === "h3",
    [typoStyles.h4]: tag === "h4",
    [typoStyles.defaultP]: type === "defaultP",
    [typoStyles.thinyP]: type === "thinyP",
  });

  return (
    <Tag className={`${classes} ${className}`}>
      {text}
      {children}
    </Tag>
  );
};

export default Typo;
