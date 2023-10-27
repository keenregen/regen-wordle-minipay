export interface TransactionData {
  id: string;
  type: string;
  time: string;
  value: number;
  sender: string;
  recipient: string;
  tokenName: string;
  tokenID: string;
  transactionHash: string;
  metadata: MetaData;
}

export interface MetaData {
  description: string;
  artist: string;
  yearMade: number;
}
