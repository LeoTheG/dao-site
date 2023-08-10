"use client";

import { useMetamaskAuth } from "@/app/contexts/MetamaskAuthContext";
import { Skeleton } from "./ui/skeleton";

export const UserAddress = () => {
  const { connected, address, isLoading, setIsLoading } = useMetamaskAuth();

  const addressFormatted = address
    ? `${address.slice(0, 6)}...` + address.slice(address.length - 4)
    : "";
  return (
    <>
      {connected && (
        <span className="bg-secondary p-2 rounded-md text-primary-foreground w-fit">
          {addressFormatted}
        </span>
      )}
      {isLoading && <Skeleton className="w-[113px] h-[40px]" />}
    </>
  );
};
