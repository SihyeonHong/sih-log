import Link from "next/link";

export default function LogoTitle() {
  return (
    <Link href="/" className="group">
      <span className="bg-stone-800 p-1 font-mono text-lg font-bold tracking-tight text-white sm:text-xl md:text-2xl">
        sih.log
      </span>
      <div className="mt-1 h-0.5 w-full bg-stone-800"></div>
    </Link>
  );
}
