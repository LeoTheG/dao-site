import { Button } from "@/components/ui/button";
import logo from "@/assets/logo3.png";
import Image from "next/image";
import React, { PropsWithChildren, useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="px-12 py-8 gap-4 flex-col flex">
      <div className="flex gap-4 items-center border-b-2 pb-4">
        <Image
          src={logo}
          alt="Logo"
          width={75}
          height={75}
          className="rounded-full shadow-lg"
        />
        <h1 className="text-3xl text-primary">DAO Creation and Management</h1>
      </div>
      <div className="max-w-lg gap-4 flex flex-col">
        <p className="text-xl text-primary">
          Create and manage your DAOs with ease. Vote on proposals.
          <br />
          <br />
          Hurrah for democracy!
        </p>
        <div className="flex gap-4">
          <Button className="w-fit">Create a DAO</Button>
          <Button className="w-fit">View your DAOs</Button>
        </div>
      </div>
    </div>
  );
}

// const SlideInLeft: React.FC<PropsWithChildren<{}>> = ({ children }) => {
//   const [hasMounted, setHasMounted] = useState(false);
//   useEffect(() => {
//     setHasMounted(true);
//   }, []);
//   return (
//     <div
//       className={`${
//         hasMounted ? "animate-slideInLeft" : ""
//       } transition-all duration-500`}
//     >
//       {children}
//     </div>
//   );
// };
