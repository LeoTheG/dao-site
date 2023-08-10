import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeartFilled
} from "@tabler/icons-react";
import { ThemeProvider } from "@/components/theme-provider";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import logo from "@/assets/logo3.png";
import Image from "next/image";
import { fontFamily } from "./util";
import { Separator } from "@/components/ui/separator";
import { MetamaskAuthProvider } from "./contexts/MetamaskAuthContext";
import { UserAddress } from "@/components/wallet";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DAO Creation and Management",
  description: "Create and manage your DAOs"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const Header = (
    <div className="flex justify-between items-center px-12 pt-8">
      <div className="flex gap-4 items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={75}
            height={75}
            className="rounded-full shadow-lg"
          />
        </Link>
        <h1 className={`text-7xl text-primary`} style={{ ...fontFamily.style }}>
          DAONow
        </h1>
      </div>
      <UserAddress />
    </div>
  );

  const Footer = (
    <div className="flex flex-col gap-8 pb-12 px-8 text-primary">
      <Separator className="bg-slate-500" />
      <strong className="text-2xl flex items-center gap-2">
        Created by Leo with <IconHeartFilled />
      </strong>
      <div className="flex gap-4 items-center">
        <div className="rounded-full border-white border-2 p-1">
          <a href="https://github.com/LeoTheG/dao-site" target="_blank">
            <IconBrandGithub />
          </a>
        </div>
        <a href="https://linkedin.com/in/leonar-gharib" target="_blank">
          <IconBrandLinkedin size={36} />
        </a>
      </div>
    </div>
  );
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <MetamaskAuthProvider>
          <ThemeProvider attribute="class">
            <div className="flex flex-col min-h-screen justify-between">
              {Header}
              {children}
              {Footer}
            </div>
          </ThemeProvider>
        </MetamaskAuthProvider>
      </body>
    </html>
  );
}
