import { Assistant } from "next/font/google";
import "./globals.css";

const assistant = Assistant({ subsets: ["latin"] });

export const metadata = {
  title: "Track Pod",
  description: "Take the control of your future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          assistant.className +
          " bg-neutral-950 text-neutral-50 flex items-center justify-center h-screen"
        }
      >
        {children}
      </body>
    </html>
  );
}
