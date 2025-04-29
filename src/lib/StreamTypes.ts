export interface StreamItem {
    id: number;
    recipient: string;
    amountPerSecond: number;
    startDate: string;
    endDate: string;
    token: string;
    status: "Active" | "Paused" | "Completed";
  }
