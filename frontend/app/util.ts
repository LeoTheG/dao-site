import { Playfair_Display } from "next/font/google";

export const fontFamily = Playfair_Display({
  weight: "400",
  subsets: ["latin"]
});

export const shortenAddress = (address: string) => {
  return address.slice(0, 6) + "..." + address.slice(-4);
};
