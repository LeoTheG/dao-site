import logo from "@/assets/logo3.png";
import Image from "next/image";
import { fontFamily } from "@/lib/utils";
import { UserAddress } from "@/components/wallet";
import Link from "next/link";
export const Header = () => (
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
      <Link href="/">
        <h1 className={`text-7xl text-primary`} style={{ ...fontFamily.style }}>
          DAONow
        </h1>
      </Link>
    </div>
    <UserAddress />
  </div>
);
