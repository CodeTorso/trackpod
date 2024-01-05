import getQuote from "@/utils/getQuote";
import Link from "next/link";
export default function Home() {
  const quote = getQuote();

  return (
    <div>
      <h1 className="font-medium text-white tracking-widest">{quote}</h1>
      <h2 className="italic text-right pt-2 text-neutral-300 tracking-wider font-light">
        - Bruce Lee
      </h2>
      <Link href="/step1">
        <button className="border-[1px] py-1 px-2 rounded-md transition-all duration-300 border-neutral-950 hover:border-neutral-400">
          Continue...
        </button>
      </Link>
    </div>
  );
}
