"use client";

import React, { ReactNode } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useAccount, useDisconnect } from "wagmi";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { HStack, VStack } from "../Layout/Stack";
import { icons } from "@/assets/icons/icons";
import ENSAvatar from "../shared/ENSAvatar";
import { pluralizeAddresses, shortAddress } from "@/lib/utils";
import Link from "next/link";
import TokenAmountDisplay from "../shared/TokenAmountDisplay";
import { PanelRow } from "../Delegates/DelegateCard/DelegateCard";
import useConnectedDelegate from "@/hooks/useConnectedDelegate";
import Tenant from "@/lib/tenant/tenant";

type Props = {
  ensName: string | undefined;
};

// Add your variants
const variants = {
  hidden: { y: "100%" },
  show: { y: "0%" },
  exit: { y: "100%" },
};

const MobileValueWrapper = ({
  children,
  isLoading,
}: {
  children: ReactNode;
  isLoading: boolean;
}) =>
  isLoading ? (
    <div className="animate-pulse bg-veil h-5 w-[90px] rounded-2xl"></div>
  ) : (
    <div className="text-base">{children}</div>
  );

export const MobileProfileDropDown = ({ ensName }: Props) => {
  const { ui } = Tenant.current();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const { isLoading, delegate, balance } = useConnectedDelegate();

  const hasStatement = !!delegate?.statement;
  const canCreateDelegateStatement = ui.toggle("delegates/edit")?.enabled;

  return (
    <Popover className="relative cursor-auto">
      {({ open }) => (
        <>
          <Popover.Button className="mt-1 outline-none">
            <div className="w-6 h-6 shadow-newDefault rounded-full">
              <ENSAvatar ensName={ensName} />
            </div>
          </Popover.Button>

          {open && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                exit={{ opacity: 0 }}
                className={"z-10 bg-black fixed top-0 left-0 right-0 bottom-0"}
              />
            </AnimatePresence>
          )}

          <Transition className="absolute z-10">
            <Popover.Panel>
              {({ close }) => (
                <motion.div
                  className="bg-white py-8 px-6 rounded-t-lg w-full fixed bottom-0 left-0"
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.2 }}
                >
                  <VStack
                    gap={3}
                    className="min-h-[325px] justify-center mb-10"
                  >
                    <HStack gap={2} alignItems="items-center" className="mb-1">
                      <div
                        className={`relative aspect-square ${
                          isLoading && "animate-pulse"
                        }`}
                      >
                        <ENSAvatar ensName={ensName} />
                      </div>
                      <VStack className={"flex-1"}>
                        {ensName ? (
                          <>
                            <span className="text-base">{ensName}</span>
                            <span className="text-xs text-secondary">
                              {shortAddress(address!)}
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="text-base">
                              {shortAddress(address!)}
                            </span>
                          </>
                        )}
                      </VStack>
                      <Image
                        src={icons.power}
                        onClick={() => disconnect()}
                        alt="Disconnect Wallet"
                        className="cursor-pointer"
                      />
                    </HStack>

                    <PanelRow
                      title="My token balance"
                      detail={
                        <MobileValueWrapper isLoading={isLoading}>
                          <TokenAmountDisplay amount={balance || BigInt(0)} />
                        </MobileValueWrapper>
                      }
                    />

                    <PanelRow
                      title="Delegated to"
                      detail={
                        <MobileValueWrapper isLoading={isLoading}>
                          <Link
                            href={`/delegates/${delegate?.address}`}
                            onClick={() => close()}
                            className="underline"
                          >
                            View more
                          </Link>
                        </MobileValueWrapper>
                      }
                    />

                    <PanelRow
                      title="My voting power"
                      detail={
                        <MobileValueWrapper isLoading={isLoading}>
                          <TokenAmountDisplay
                            amount={delegate?.votingPower || BigInt(0)}
                          />
                        </MobileValueWrapper>
                      }
                    />

                    <PanelRow
                      title="Delegated from"
                      detail={
                        <MobileValueWrapper isLoading={isLoading}>
                          {pluralizeAddresses(
                            Number(delegate?.numOfDelegators || 0)
                          )}
                        </MobileValueWrapper>
                      }
                    />

                    {isLoading ? (
                      <div className="animate-pulse bg-veil h-[50px] mt-1 w-full rounded-2xl"></div>
                    ) : (
                      <>
                        {canCreateDelegateStatement && (
                          <>
                            {hasStatement ? (
                              <Link
                                href={`/delegates/edit`}
                                className="rounded-lg border py-3 px-2 text-veil bg-black flex justify-center mt-1 hover:bg-primary"
                                onClick={() => close()}
                              >
                                Edit delegate statement
                              </Link>
                            ) : (
                              <Link
                                href={`/delegates/create`}
                                className="rounded-lg border py-3 px-2 text-veil bg-black flex justify-center mt-1 hover:bg-primary"
                                onClick={() => close()}
                              >
                                Create delegate statement
                              </Link>
                            )}
                          </>
                        )}

                        {hasStatement && (
                          <Link
                            href={`/delegates/${ensName ?? address}`}
                            onClick={() => close()}
                            className="rounded-lg border py-3 px-2 text-black bg-neutral mt-1 flex justify-center hover:bg-wash"
                          >
                            View my profile
                          </Link>
                        )}
                      </>
                    )}
                  </VStack>
                </motion.div>
              )}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
