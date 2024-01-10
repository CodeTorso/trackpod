import Loading from "@/components/Loading";
import getQuote from "@/utils/getQuote";
import Link from "next/link";
export default function Home() {
  return (
    <div className="relative">
      <h1 className="font-medium text-white tracking-widest">{getQuote()}</h1>
      <h2 className="italic text-right pt-2 text-neutral-300 tracking-wider font-light">
        - Bruce Lee
      </h2>
      <Loading />
    </div>
  );
}
