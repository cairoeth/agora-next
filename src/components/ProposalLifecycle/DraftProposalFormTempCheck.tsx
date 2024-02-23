"use client";

import React, { useContext, useEffect, useState } from "react";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion-proposal-draft";

import { ProposalLifecycleDraftContext } from "@/contexts/ProposalLifecycleDraftContext";
import { ProposalDraft } from "@prisma/client";
import { ProposalDraftWithTransactions } from "./types";

const staticText = {
  heading: "Create a temp check on Discourse",
  description:
    "We encourage you to go to Discourse to post a temp check that helps gauge the community’s interest. It’s not mandatory, but helps create alignment with the voter base.",
};

interface DraftProposalFormTempCheckProps {
  setStage: React.Dispatch<
    React.SetStateAction<"draft-temp-check" | "draft-create" | "draft-submit">
  >;
  proposalState: ProposalDraftWithTransactions;
  updateProposal: (
    proposal: ProposalDraft,
    updateData: Partial<ProposalDraft>
  ) => Promise<ProposalDraft>;
}

const DraftProposalFormTempCheck: React.FC<DraftProposalFormTempCheckProps> = (
  props
) => {
  const validateTempCheckLink = (link: string) => {
    // check if starts with "https://discuss.ens.domains/"
    const discourseLinkRegex = /^https:\/\/discuss.ens.domains/;

    return discourseLinkRegex.test(link);
  };

  const { setStage, proposalState, updateProposal } = props;

  const [tempCheckInput, setTempCheckInput] = useState(
    proposalState.temp_check_link
  );
  const [isValidDiscourseLink, setIsValidDiscourseLink] = useState(
    validateTempCheckLink(tempCheckInput)
  );

  const saveAndContinue = async () => {
    // currently updates optimistically, notice no await
    const updateData = {
      temp_check_link: tempCheckInput,
    };
    updateProposal(proposalState, updateData);

    if (isValidDiscourseLink) {
      setStage("draft-create");
    }
  };

  function handleNewTempCheckLink(link: string) {
    setTempCheckInput(link);
  }

  return (
    <AccordionItem
      value="draft-temp-check"
      className="w-full rounded-2xl border border-gray-eo shadow-sm"
    >
      <AccordionTrigger>
        <h2 className="text-2xl font-black">{staticText.heading}</h2>
      </AccordionTrigger>
      <AccordionContent>
        <p className="text-gray-4f px-6 pb-7 max-w-[620px]">
          {staticText.description}
        </p>
        <div className="border-b border-gray-eo w-full"></div>
        <div className="py-1 px-6 flex flex-row w-full">
          <div className="flex flex-row items-center justify-between py-6 font-medium w-full">
            <input
              className={`py-3 px-4 w-80 border border-gray-eo placeholder-gray-af bg-gray-fa rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-af focus:border-transparent ${
                !isValidDiscourseLink &&
                tempCheckInput !== "" &&
                "border-red-500 text-red-500"
              }`}
              placeholder="https://discuss.ens.domains/t/..."
              value={tempCheckInput}
              onChange={(e) => handleNewTempCheckLink(e.target.value)}
            ></input>
            <div className="flex flex-row gap-x-6">
              <button
                className="py-3 px-5 border border-gray-eo rounded-lg"
                onClick={() => setStage("draft-create")}
              >
                Skip
              </button>
              <button
                className={`py-3 px-6 border border-black bg-black text-white rounded-lg disabled:opacity-75 disabled:cursor-not-allowed`}
                disabled={!isValidDiscourseLink}
                onClick={() => saveAndContinue()}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default DraftProposalFormTempCheck;