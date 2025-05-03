export interface StreamItem {
    id: number;
    recipient: string;
    amountPerSecond: number;
    startDate: Date;
    endDate: Date;
    token: string;
    status: "Active" | "Paused" | "Completed";
  }
