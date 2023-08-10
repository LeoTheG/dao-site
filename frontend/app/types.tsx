export interface IDaoItem {
  name: string;
  description: string;
  address: string;
  memberAddresses: string[];
  activeProposalIds: string[];
  closedProposalIds: string[];
}
