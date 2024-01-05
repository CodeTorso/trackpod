"use client";
import { useState } from "react";
import { response, onResponse } from "@/utils/newResponse";

export default function Home() {
  const [show, setShow] = useState(false);
  function onsubmit(index, value) {
    onResponse(index, value);
    if (
      response.length === 3 &&
      response.findIndex((i) => i === undefined) === -1
    ) {
      setShow(true);
    }
  }
  return (
    <div className="relative w-[95%] sm:min-w-[40rem] sm:max-w-[45rem] border-[1px] border-neutral-400 p-6 py-9  max-w-lg flex flex-col gap-4">
      <div id="wrapper" className=" flex flex-col gap-3">
        <h1 className="text-2xl font-medium pb-1 truncate w-[80%]">
          Q. Did you wake up early in the morning
        </h1>
        <div className="text-center relative ">
          <button
            onClick={() => onsubmit(0, true)}
            className="tracking-wider hover:tracking-widest font-bold text-3xl transition-all duration-300 hover:font-extrabold  hover:bg-green-600 hover:text-black hover:border-neutral-200 w-[46%]  py-8 border-[1px] border-neutral-600 rounded-md rounded-r-none "
          >
            Yes
          </button>
          <p className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-950  border-[1px] border-neutral-500 rounded-md px-1">
            or
          </p>
          <button
            onClick={() => onsubmit(0, false)}
            className="tracking-wider hover:tracking-widest font-bold text-3xl transition-all duration-300 hover:font-extrabold  hover:bg-red-400 hover:text-black w-[46%] hover:border-neutral-200 py-8 border-[1px] border-neutral-600 rounded-md rounded-l-none "
          >
            No
          </button>
        </div>
        <h1 className="text-2xl font-medium pb-1">Q. Did You do the brush</h1>
        <div className="text-center relative ">
          <button
            onClick={() => onsubmit(1, true)}
            className="tracking-wider hover:tracking-widest font-bold text-3xl transition-all duration-300 hover:font-extrabold  hover:bg-green-600 hover:text-black hover:border-neutral-200 w-[46%]  py-8 border-[1px] border-neutral-600 rounded-md rounded-r-none "
          >
            Yes
          </button>
          <p className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-950  border-[1px] border-neutral-500 rounded-md px-1">
            or
          </p>
          <button
            onClick={() => onsubmit(1, false)}
            className="tracking-wider hover:tracking-widest font-bold text-3xl transition-all duration-300 hover:font-extrabold  hover:bg-red-400 hover:text-black w-[46%] hover:border-neutral-200 py-8 border-[1px] border-neutral-600 rounded-md rounded-l-none "
          >
            No
          </button>
        </div>
        <h1 className="text-2xl font-medium pb-1">
          Q. Did You do cook the food
        </h1>
        <div className="text-center relative ">
          <button
            onClick={() => onsubmit(2, true)}
            className="tracking-wider hover:tracking-widest font-bold text-3xl transition-all duration-300 hover:font-extrabold  hover:bg-green-600 hover:text-black hover:border-neutral-200 w-[46%]  py-8 border-[1px] border-neutral-600 rounded-md rounded-r-none "
          >
            Yes
          </button>
          <p className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-950  border-[1px] border-neutral-500 rounded-md px-1">
            or
          </p>
          <button
            onClick={() => onsubmit(2, false)}
            className="tracking-wider hover:tracking-widest font-bold text-3xl transition-all duration-300 hover:font-extrabold  hover:bg-red-400 hover:text-black w-[46%] hover:border-neutral-200 py-8 border-[1px] border-neutral-600 rounded-md rounded-l-none "
          >
            No
          </button>
        </div>
      </div>
      <button className={`${!show && 'text-neutral-500 border-neutral-500'} absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 bg-neutral-950 border-[1px] p-2 px-4 rounded-md ${show && 'hover:bg-slate-300 hover:font-black hover:text-black transition-all '}`}>
        Submit
      </button>
    </div>
  );
}
