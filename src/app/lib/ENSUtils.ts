import { truncateAddress } from "@/app/lib/utils/text";
import { isAddress } from "viem";
import { cache } from "react";
import { AlchemyProvider } from "ethers";

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;
const provider = new AlchemyProvider("mainnet", alchemyId);


export async function resolveENSName(nameOrAddress: string) {
  if (isAddress(nameOrAddress)) {
    return nameOrAddress;
  }

  const address = await cache((name: string) => provider.resolveName(name))(
    nameOrAddress,
  );

  if (!address) {
    throw new Error("No address found for ENS name");
  }

  return address.toLowerCase();
}

export async function reverseResolveENSName(
  address: string,
): Promise<string | null> {
  try {

    const ensName = await cache((address: string) => provider.lookupAddress(address))(
      address,
    );
    return ensName || null;

  } catch (error) {
    console.error("ENS Resolution Error", error);
    return null;
  }
}

export async function resolveENSProfileImage(
  address: string,
): Promise<string | null> {
  const lowerCaseAddress = address.toLowerCase();

  // Return unless the address is a valid ENS name.
  // Basic detection for strings that start with 0x
  const pattern = /^0x[a-fA-F0-9]+/;
  if (pattern.test(address)) {
    return null;
  }

  try {
    return await cache((lowerCaseAddress: string) => provider.getAvatar(lowerCaseAddress))(
      lowerCaseAddress,
    );

  } catch (error) {
    console.error("ENS Avatar error", error);
    return null;
  }
}

/*
  Returns the ENS name for the address if it exists, otherwise truncates address
*/
export async function processAddressOrEnsName(addressOrENSName: string) {
  // Assume resolved ens name
  if (!isAddress(addressOrENSName)) {
    return addressOrENSName;
  }

  try {
    return (
      (await reverseResolveENSName(addressOrENSName)) ||
      truncateAddress(addressOrENSName)
    );
  } catch (error) {
    console.error("Error in reverse resolving ENS name:", error);
    return null;
  }
}
