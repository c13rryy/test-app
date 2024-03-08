import type { SVGProps } from "react";

export default function Raiting({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="80"
      height="81"
      viewBox="0 0 80 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M0 0.5H40C62.0914 0.5 80 18.4086 80 40.5C80 62.5914 62.0914 80.5 40 80.5C17.9086 80.5 0 62.5914 0 40.5V0.5Z"
        fill="url(#paint0_linear_0_6020)"
      />
      <path
        d="M56.0043 56.5043C64.6842 47.824 64.6842 33.7008 56.0043 25.0206C51.7997 20.8159 46.2089 18.5 40.2622 18.5C34.3155 18.5 28.7251 20.8159 24.5201 25.0201C20.3157 29.2248 18 34.8155 18 40.7622C18 46.7089 20.3159 52.2994 24.5201 56.5043C28.7248 60.709 34.3155 63.0244 40.2622 63.0244C46.2089 63.0244 51.7994 60.7086 56.0043 56.5043ZM25.6414 55.3834C21.7364 51.4779 19.5854 46.2856 19.5854 40.7625C19.5854 35.2395 21.7364 30.0472 25.6414 26.1417C29.5463 22.2362 34.7392 20.0857 40.2622 20.0857C45.7853 20.0857 50.9776 22.2367 54.8831 26.1417C62.9446 34.2037 62.9446 47.3219 54.8831 55.3834C50.9776 59.2888 45.7853 61.4393 40.2622 61.4393C34.7392 61.4393 29.5469 59.2889 25.6414 55.3834Z"
        fill="#01457A"
      />
      <path
        d="M38.7875 43.3586L51.1478 30.9983V36.0911C51.1478 36.5293 51.5028 36.8839 51.9405 36.8839C52.3781 36.8839 52.7332 36.5293 52.7332 36.0911V29.0844C52.7332 28.9818 52.712 28.8852 52.6771 28.7954C52.6756 28.7916 52.6751 28.7874 52.6733 28.7831C52.593 28.5881 52.4371 28.4322 52.2421 28.3519C52.2378 28.3503 52.2336 28.3498 52.2298 28.3481C52.14 28.3126 52.0428 28.292 51.9408 28.292L44.9336 28.2922C44.496 28.2922 44.1409 28.6467 44.1409 29.0849C44.1409 29.523 44.496 29.8776 44.9336 29.8776H50.0264L37.0659 42.8373L38.2338 48.6765L31.5274 55.3834C31.2178 55.693 31.2178 56.1947 31.5274 56.5043C31.6822 56.6592 31.8852 56.7364 32.088 56.7364C32.291 56.7364 32.4939 56.6592 32.6487 56.5043L39.9553 49.1976L38.7875 43.3586Z"
        fill="#01457A"
      />
      <defs>
        <linearGradient
          id="paint0_linear_0_6020"
          x1="-1.42492e-06"
          y1="33"
          x2="80"
          y2="33"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDD966" />
          <stop offset="0.685406" stopColor="#BCD77E" />
        </linearGradient>
      </defs>
    </svg>
  );
}