"use client";

import { HStack } from "@/components/Layout/Stack";
import { DelegateButton } from "./DelegateButton";
import { DelegateSocialLinks } from "./DelegateSocialLinks";
import { useAccount } from "wagmi";
import { useState } from "react";
import { AdvancedDelegateButton } from "./AdvancedDelegateButton";
import { Delegation } from "@/app/api/delegations/delegation";
import { useAgoraContext } from "@/contexts/AgoraContext";
import { DelegateChunk } from "../DelegateCardList/DelegateCardList";

export function DelegateActions({
  delegate,
  isAdvancedUser,
  className,
  fetchBalanceForDirectDelegation,
  fetchVotingPowerForSubdelegation,
  checkIfDelegatingToProxy,
  fetchCurrentDelegatees,
  getProxyAddress,
}: {
  delegate: DelegateChunk;
  isAdvancedUser: boolean;
  className?: string;
  fetchBalanceForDirectDelegation: (
    addressOrENSName: string
  ) => Promise<string>;
  fetchVotingPowerForSubdelegation: (
    addressOrENSName: string
  ) => Promise<string>;
  checkIfDelegatingToProxy: (addressOrENSName: string) => Promise<boolean>;
  fetchCurrentDelegatees: (addressOrENSName: string) => Promise<Delegation[]>;
  getProxyAddress: (addressOrENSName: string) => Promise<string>;
}) {
  const { isConnected } = useAgoraContext();
  const { address } = useAccount();
  const twitter = delegate?.statement?.twitter;
  const discord = delegate?.statement?.discord;

  return (
    <HStack
      alignItems="items-stretch"
      className={className ? className + "justify-between" : "justify-between"}
    >
      <DelegateSocialLinks discord={discord} twitter={twitter} />
      <div>
        {isConnected &&
          address &&
          (isAdvancedUser ? (
            <AdvancedDelegateButton
              delegate={delegate}
              fetchVotingPowerForSubdelegation={() =>
                fetchVotingPowerForSubdelegation(address)
              }
              checkIfDelegatingToProxy={() => checkIfDelegatingToProxy(address)}
              fetchCurrentDelegatees={() => fetchCurrentDelegatees(address)}
              getProxyAddress={() => getProxyAddress(address)}
            />
          ) : (
            <DelegateButton
              full={!twitter && !discord}
              delegate={delegate.address}
              fetchBalanceForDirectDelegation={() =>
                fetchBalanceForDirectDelegation(address)
              }
            />
          ))}
      </div>
    </HStack>
  );
}
