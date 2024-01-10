"use client";
import Link from "next/link";
import styles from "./loading.module.css";
import { useState } from "react";

const Loading = () => {
  const [text, setText] = useState("haha");
  setTimeout(() => {
    setText("Continue...");
  }, 3000);

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
        <div className={styles.spinner}>
          <svg viewBox="25 25 50 50">
            <circle
              cx="50"
              cy="50"
              r="20"
              fill="none"
              className={styles.path}
            ></circle>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Loading;
