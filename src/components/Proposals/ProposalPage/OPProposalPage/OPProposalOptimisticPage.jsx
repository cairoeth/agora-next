import { HStack, VStack } from "@/components/Layout/Stack";
import ProposalDescription from "../ProposalDescription/ProposalDescription";
import styles from "./OPProposalPage.module.scss";
import ProposalVotesSummary from "./ProposalVotesSummary/ProposalVotesSummary";
import ProposalVotesList from "@/components/Votes/ProposalVotesList/ProposalVotesList";
import {
  getVoteForProposalAndDelegate,
  getVotesForProposal,
} from "@/app/api/votes/getVotes";
import CastVoteInput from "@/components/Votes/CastVoteInput/CastVoteInput";
import { getVotingPowerAtSnapshot } from "@/app/api/voting-power/getVotingPower";
import { getAuthorityChains } from "@/app/api/authority-chains/getAuthorityChains";
import { getDelegate } from "@/app/api/delegates/getDelegates";
import { getVotableSupply } from "@/app/api/votableSupply/getVotableSupply";
import { cn, formatNumber } from "@/lib/utils";
import { disapprovalThreshold } from "@/lib/constants";

async function fetchProposalVotes(proposal_id, page = 1) {
  "use server";

  return getVotesForProposal({ proposal_id, page });
}

async function fetchVotingPower(address, blockNumber) {
  "use server";

  return {
    votingPower: (
      await getVotingPowerAtSnapshot({ blockNumber, addressOrENSName: address })
    ).totalVP,
  };
}

async function fetchAuthorityChains(address, blockNumber) {
  "use server";

  return {
    chains: await getAuthorityChains({ blockNumber, address }),
  };
}

async function fetchDelegate(addressOrENSName) {
  "use server";

  return await getDelegate({
    addressOrENSName,
  });
}

async function fetchVoteForProposalAndDelegate(proposal_id, address) {
  "use server";

  return await getVoteForProposalAndDelegate({
    proposal_id,
    address,
  });
}

async function fetchVotableSupply() {
  "use server";

  return getVotableSupply();
}

export default async function OPProposalPage({ proposal }) {
  const votableSupply = await fetchVotableSupply();
  const proposalVotes = await fetchProposalVotes(proposal.id);

  const formattedVotableSupply = Number(
    BigInt(votableSupply) / BigInt(10 ** 18)
  );
  const againstLength = formatNumber(proposal.proposalResults.against, 18, 0);
  const againstRelativeAmount =
    (Math.floor(againstLength / formattedVotableSupply) * 100) / 100;
  const status =
    againstRelativeAmount <= disapprovalThreshold ? "approved" : "defeated";

  return (
    // 2 Colum Layout: Description on left w/ transactions and Votes / voting on the right
    <HStack
      gap={16}
      justifyContent="justify-between"
      alignItems="items-start"
      className={styles.proposal_container}
    >
      <ProposalDescription proposal={proposal} />
      <VStack
        gap={4}
        justifyContent="justify-between"
        className={styles.proposal_votes_container}
      >
        <VStack gap={4} className={styles.proposal_actions_panel}>
          <div>
            <div className={styles.proposal_header}>Proposal votes</div>
            <div
              className={cn(styles.proposal_votes_summary_container, "!py-4")}
            >
              <p
                className={
                  status === "approved"
                    ? "text-green-positive"
                    : "text-red-negative"
                }
              >
                This proposal is optimistically {status}
              </p>
              <p className="font-normal mt-1 text-gray-4f">
                This proposal will automatically pass unless{" "}
                {disapprovalThreshold}% of the votable supply of OP is against.
                Currently, {againstRelativeAmount}% ({againstLength} OP) is
                against.
              </p>
            </div>
          </div>
          {/* Show the scrolling list of votes for the proposal */}
          <ProposalVotesList
            initialProposalVotes={proposalVotes}
            fetchVotesForProposal={fetchProposalVotes}
            proposal_id={proposal.id}
          />
          {/* Show the input for the user to vote on a proposal if allowed */}
          <CastVoteInput
            proposal={proposal}
            fetchVotingPower={fetchVotingPower}
            fetchAuthorityChains={fetchAuthorityChains}
            fetchDelegate={fetchDelegate}
            fetchVoteForProposalAndDelegate={fetchVoteForProposalAndDelegate}
            isOptimistic
          />
          <p className="text-gray-4f text-xs mx-4">
            If you agree with this proposal, you don’t need to vote. Only vote
            against if you oppose this proposal.
          </p>
        </VStack>
      </VStack>
    </HStack>
  );
}