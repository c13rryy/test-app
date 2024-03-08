export function disableScroll(disable: boolean) {
  const html = document.getElementsByTagName("html")[0];

  const main = document.querySelector("main") as HTMLElement;
  const scrollbarWidth = window.innerWidth - document.body.clientWidth;

  if (main && scrollbarWidth !== 0) {
    main.classList.add("scroll-class");
  }

  html.classList[disable ? "add" : "remove"]("scroll-fixed");

  if (!disable) {
    main.classList.remove("scroll-class");
  }
}
