import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex h-[100vh] w-full justify-center items-center">
      <div className="flex flex-col gap-24px">
        <h1 className="xl:text-[70px] sm:text-[50px] mds:text-[40px] text-[25px] uppercase font-bold text-black_1">
          the page doesn&lsquo;t exist.
        </h1>

        <Link className="text-bold" href={"/"}>
          Go back
        </Link>
      </div>
    </section>
  );
}
