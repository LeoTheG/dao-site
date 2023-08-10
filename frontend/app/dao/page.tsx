"use client";
import { Button } from "@/components/ui/button";
import {
  useMetamaskAuth,
  withMetamaskAuth
} from "../contexts/MetamaskAuthContext";
import { shortenAddress } from "../util";
import { IDaoItem } from "../types";
import Link from "next/link";

function Dao() {
  const { connected } = useMetamaskAuth();
  return (
    <div className="flex flex-col text-primary flex-initial p-12">
      <div className="flex flex-col gap-4 flex-1">
        {connected && (
          <>
            <div className="flex justify-between items-center">
              <h1 className="text-5xl text-primary">Your DAOs</h1>
              {sampleDaoItems.length && (
                <Link href="/dao/create">
                  <Button>Create a DAO</Button>
                </Link>
              )}
            </div>
            <div className="flex flex-col gap-4">
              {sampleDaoItems.map((item) => {
                return <DaoItem key={item.address} {...item} />;
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default withMetamaskAuth(Dao);

const sampleDaoItems: IDaoItem[] = [
  {
    name: "CommunityDAO",
    description:
      "A community-driven organization focusing on various initiatives.",
    address: "0x9876543210987654321098765432109876543210",
    memberAddresses: ["0x1111111111111111111111111111111111111111"],
    activeProposalIds: ["2", "4", "5"],
    closedProposalIds: ["0", "1", "3"]
  },
  {
    name: "InnovationDAO",
    description:
      "An innovative organization dedicated to driving positive change.",
    address: "0x5555555555555555555555555555555555555555",
    memberAddresses: ["0x3333333333333333333333333333333333333333"],
    activeProposalIds: [],
    closedProposalIds: ["0"]
  },
  {
    name: "ImpactDAO",
    description:
      "A collaborative group striving to make an impact in various sectors.",
    address: "0x9999999999999999999999999999999999999999",
    memberAddresses: ["0x6666666666666666666666666666666666666666"],
    activeProposalIds: ["2", "4", "5"],
    closedProposalIds: ["0", "1", "3"]
  },
  {
    name: "SustainabilityDAO",
    description:
      "A sustainable organization dedicated to driving positive change.",
    address: "0xd2090025857B9C7B24387741f120538E928A3a59",
    memberAddresses: ["0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B"],
    activeProposalIds: [],
    closedProposalIds: []
  }
];

const DaoItem = ({
  name,
  description,
  address,
  memberAddresses,
  activeProposalIds,
  closedProposalIds
}: IDaoItem) => {
  const totalNumProposals = activeProposalIds.length + closedProposalIds.length;
  return (
    <div className="flex flex-col text-primary-foreground flex-1 p-6 bg-secondary rounded-lg">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">{name}</h1>
        <h1 className="text-2xl">{description}</h1>
        <h1 className="text-2xl">{shortenAddress(address)}</h1>
        <h1 className="text-2xl">
          {memberAddresses.length} member
          {memberAddresses.length !== 1 ? "s" : ""}
        </h1>
        <h1 className="text-2xl">
          {totalNumProposals} proposal
          {totalNumProposals !== 1 ? "s" : ""}
        </h1>
        <div className="w-full flex justify-end">
          <Button className="w-fit mt-2">View</Button>
        </div>
      </div>
    </div>
  );
};
