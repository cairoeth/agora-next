import { EtherfiToken__factory, OptimismGovernor__factory } from "@/lib/contracts/generated";
import { ITokenContract } from "@/lib/contracts/common/interfaces/ITokenContract";
import { TenantContract } from "@/lib/tenant/tenantContract";
import { TenantContracts } from "@/lib/types";
import { IGovernorContract } from "@/lib/contracts/common/interfaces/IGovernorContract";
import { AlchemyProvider } from "ethers";
import { mainnet } from "wagmi/chains";

interface Props {
  isProd: boolean;
  alchemyId: string;
}

export const etherfiTenantContractConfig = (
  { isProd, alchemyId }: Props,
): TenantContracts => {

  const TOKEN = "0xFe0c30065B384F05761f15d0CC899D4F9F9Cc0eB";
  const GOVERNOR = "0x0";

  const provider = new AlchemyProvider("mainnet", alchemyId);
  const chain = mainnet;


  return {
    token: new TenantContract<ITokenContract>({
      abi: EtherfiToken__factory.abi,
      address: TOKEN as `0x${string}`,
      chain,
      contract: EtherfiToken__factory.connect(TOKEN, provider),
      provider,
    }),

    // PLACEHOLDER CONTRACT
    governor: new TenantContract<IGovernorContract>({
      abi: [],
      address: GOVERNOR,
      chain,
      contract: OptimismGovernor__factory.connect(GOVERNOR, provider),
      provider,
    }),
  };
};
