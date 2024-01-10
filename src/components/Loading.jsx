"use client";
import Link from "next/link";
import styles from "./loading.module.css";
import { useState } from "react";

const Loading = () => {
  const [text, setText] = useState("");
  const [counter, setCounter] = useState(7);
  setInterval(() => {
    setCounter(counter - 1);
  }, 900);
  setTimeout(() => {
    setText("Continue...");
  }, 7000);

  return (
    <div className="absolute top-[250%] left-1/2 -translate-x-1/2 ">
      {text === "Continue..." ? (
        <Link href="/step1">
          <button
            className={
              styles.textAnimate +
              " text-animate border-[1px] py-1 px-2 rounded-md transition-all duration-300 border-neutral-950 hover:border-neutral-400"
            }
          >
            {text}
          </button>
        </Link>
      ) : (
        <div className={styles.spinner + " relative"}>
          <svg viewBox="25 25 50 50">
            <circle
              cx="50"
              cy="50"
              r="20"
              fill="none"
              className={styles.path}
            ></circle>
          </svg>
          <p className="text-neutral-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {counter}
          </p>
        </div>
      )}
    </div>
  );
};

export default Loading;
