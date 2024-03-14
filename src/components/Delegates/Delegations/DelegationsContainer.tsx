"use client";

import { Delegation } from "@/app/api/common/delegations/delegation";
import DelegationToRow from "./DelegationToRow";
import { HStack, VStack } from "@/components/Layout/Stack";
import DelegationFromRow from "./DelegationFromRow";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PaginatedResult } from "@/app/lib/pagination";
import { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

function DelegationsContainer({
  delegatees,
  initialDelegators,
  fetchDelegators,
}: {
  delegatees: Delegation[];
  initialDelegators: PaginatedResult<Delegation[]>;
  fetchDelegators: (page: number) => Promise<PaginatedResult<Delegation[]>>;
}) {
  const fetching = useRef(false);
  const [meta, setMeta] = useState(initialDelegators.meta);
  const [delegators, setDelegates] = useState(initialDelegators.data);
  // const { advancedDelegators } = useConnectedDelegate();

  useEffect(() => {
    setDelegates(initialDelegators.data);
    setMeta(initialDelegators.meta);
  }, [initialDelegators]);

  const loadMore = async () => {
    if (!fetching.current && meta.hasNextPage) {
      fetching.current = true;
      const data = await fetchDelegators(meta.currentPage + 1);
      setDelegates(delegators.concat(data.data));
      setMeta(data.meta);
      fetching.current = false;
    }
  };

  if (delegatees.length === 0 && delegators.length === 0) {
    return (
      <div className="p-8 text-center align-middle bg-gray-100 rounded-md">
        No delegations found
      </div>
    );
  }

  return (
    <div className="max-w-full">
      <Tabs className="max-w-full mb-8" defaultValue="delegatedFrom">
        <HStack className="items-center justify-between">
          <TabsList>
            <TabsTrigger className="text-2xl" value="delegatedFrom">
              Delegated from
            </TabsTrigger>
            <TabsTrigger className="text-2xl" value="delegatedTo">
              Delegated to
            </TabsTrigger>
          </TabsList>
          <div className="hidden px-3 py-1 text-xs font-medium rounded-full text-slate-700 bg-slate-100 sm:block">
            Advanced delegation beta
          </div>
        </HStack>
        <TabsContent value="delegatedFrom" className="max-w-full">
          <VStack
            gap={3}
            className="border shadow-sm rounded-xl border-gray-eb"
          >
            <Table>
              <TableHeader className="text-xs text-slate-700">
                <TableRow>
                  <TableHead className="h-10">Allowance</TableHead>
                  <TableHead className="h-10">Delegated on</TableHead>
                  <TableHead className="h-10">Type</TableHead>
                  <TableHead className="h-10">Amount</TableHead>
                  <TableHead className="h-10">From</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* @ts-ignore */}
                <InfiniteScroll
                  hasMore={meta.hasNextPage}
                  pageStart={1}
                  loadMore={loadMore}
                  loader={
                    <TableRow key={0}>
                      <TableCell
                        key="loader"
                        className="gl_loader justify-center py-6 text-sm text-stone-500"
                      >
                        Loading...
                      </TableCell>
                    </TableRow>
                  }
                  element="div"
                >
                  {delegators.length === 0 ? (
                    <div className="w-full p-4">None found</div>
                  ) : (
                    delegators.map((delegation) => (
                      <DelegationFromRow
                        key={delegation.from}
                        delegation={delegation}
                      />
                    ))
                  )}
                </InfiniteScroll>
              </TableBody>
            </Table>
          </VStack>
        </TabsContent>
        <TabsContent value="delegatedTo">
          <VStack
            gap={3}
            className="border shadow-sm rounded-xl border-gray-eb"
          >
            <Table>
              <TableHeader className="text-xs text-slate-700">
                <TableRow>
                  <TableHead className="h-10">Allowance</TableHead>
                  <TableHead className="h-10">Delegated on</TableHead>
                  <TableHead className="h-10">Type</TableHead>
                  <TableHead className="h-10">Amount</TableHead>
                  <TableHead className="h-10">To</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {delegatees.length === 0 ? (
                  <div className="w-full p-4">None found</div>
                ) : (
                  delegatees.map((delegation) => (
                    <DelegationToRow
                      key={delegation.to}
                      delegation={delegation}
                    />
                  ))
                )}
              </TableBody>
            </Table>
          </VStack>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default DelegationsContainer;
