"use client";

import { useMetamaskAuth } from "@/app/contexts/MetamaskAuthContext";
import { Skeleton } from "./ui/skeleton";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { shortenAddress } from "@/lib/utils";
import { Button } from "./ui/button";
import { ethers } from "ethers";
import { useEffect, useMemo } from "react";

export const UserAddress = () => {
  const { connected, address, isLoading, disconnect, provider } =
    useMetamaskAuth();

  // const userBalance = useMemo(async () => {
  //   if (connected && provider && address) {
  //     const balance = await provider.getBalance(address);
  //     return ethers.formatEther(balance);
  //   }
  //   return null;
  // }, [connected, provider, address]);

  return (
    <>
      {connected && (
        <Popover>
          <PopoverTrigger>
            <span className="bg-secondary p-2 rounded-md text-primary-foreground w-fit">
              {shortenAddress(address)}
            </span>
          </PopoverTrigger>
          <PopoverContent className="w-fit bg-transparent p-0 mt-4">
            <Button onClick={disconnect}>Disconnect</Button>
          </PopoverContent>
        </Popover>
      )}
      {isLoading && <Skeleton className="w-[113px] h-[40px]" />}
    </>
  );
};
