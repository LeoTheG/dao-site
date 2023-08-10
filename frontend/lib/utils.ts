import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Playfair_Display } from "next/font/google";

declare global {
  interface Window {
    ethereum: any;
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fontFamily = Playfair_Display({
  weight: "400",
  subsets: ["latin"]
});

export const shortenAddress = (address: string) => {
  return address.slice(0, 6) + "..." + address.slice(-4);
};
