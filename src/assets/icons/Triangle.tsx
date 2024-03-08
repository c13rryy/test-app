import type { SVGProps } from "react";

export default function Triangle({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="26"
      height="21"
      viewBox="0 0 26 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M13 21L0.00961862 0.749999L25.9904 0.750002L13 21Z"
        fill="#01457A"
      />
    </svg>
  );
}
