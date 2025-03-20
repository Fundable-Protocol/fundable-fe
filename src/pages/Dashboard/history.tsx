"use client";

import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";

const TOKEN_SYMBOLS = {
  XLM: "/images/xlm.svg",
  TON: "/images/ton.svg",
  STRK: "/images/starknet.svg",
  ETH: "/images/eth.svg",
};

interface Transaction {
  id: number;
  amount: number;
  action: "Sent" | "Received";
  token: keyof typeof TOKEN_SYMBOLS;
  status: "Successful" | "Failed";
  date: string;
  recipient?: string;
  memo?: string;
  txFee?: number;
}

const HistoryComponent: React.FC = () => {
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const transactions: Transaction[] = [
    {
      id: 1,
      amount: 194.77189,
      action: "Sent",
      token: "XLM",
      status: "Successful",
      date: "12th February 2025",
      recipient: "GDT7...MTHIH",
      memo: "11349734",
      txFee: 0.00001,
    },
    {
      id: 2,
      amount: 15,
      action: "Sent",
      token: "TON",
      status: "Successful",
      date: "12th February 2025",
      recipient: "UQ12...8FGH",
      memo: "22598147",
      txFee: 0.00002,
    },
    {
      id: 3,
      amount: 80,
      action: "Sent",
      token: "STRK",
      status: "Failed",
      date: "12th February 2025",
      recipient: "STR9...45KJ",
      memo: "33641298",
      txFee: 0.00003,
    },
    {
      id: 4,
      amount: 0.000343,
      action: "Received",
      token: "ETH",
      status: "Successful",
      date: "12th February 2025",
      recipient: "0x4D...9E28",
      memo: "44758963",
      txFee: 0.00001,
    },
    {
      id: 5,
      amount: 556.7,
      action: "Sent",
      token: "XLM",
      status: "Successful",
      date: "12th February 2025",
      recipient: "GBV5...LK9H",
      memo: "55248961",
      txFee: 0.00001,
    },
    {
      id: 6,
      amount: 340,
      action: "Sent",
      token: "XLM",
      status: "Successful",
      date: "12th February 2025",
      recipient: "GDC4...OP7Y",
      memo: "66874123",
      txFee: 0.00001,
    },
    {
      id: 7,
      amount: 354.99,
      action: "Received",
      token: "STRK",
      status: "Successful",
      date: "12th February 2025",
      recipient: "STK7...TH5D",
      memo: "77514236",
      txFee: 0.00003,
    },
    {
      id: 8,
      amount: 80,
      action: "Received",
      token: "STRK",
      status: "Failed",
      date: "12th February 2025",
      recipient: "STL2...RF9K",
      memo: "88952364",
      txFee: 0.00003,
    },
    {
      id: 9,
      amount: 5.68,
      action: "Sent",
      token: "TON",
      status: "Failed",
      date: "12th February 2025",
      recipient: "UQF6...MN3B",
      memo: "99687412",
      txFee: 0.00002,
    },
    {
      id: 10,
      amount: 325,
      action: "Sent",
      token: "STRK",
      status: "Successful",
      date: "12th February 2025",
      recipient: "STH1...ZX5V",
      memo: "10369852",
      txFee: 0.00003,
    },
  ];

  const openModal = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <main className="min-h-screen p-3 sm:p-6">
      <Head>
        <title>Transaction History</title>
        <meta name="description" content="Cryptocurrency Transaction History" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="max-w-6xl mx-auto rounded-lg shadow-lg overflow-hidden">
        <div className="py-3 sm:py-4 text-white font-bold text-[14px] sm:text-[16px] px-2 sm:px-4">
          Transaction History
        </div>

        <div className="overflow-x-auto text-[12px] sm:text-[14px]">
          <table className="w-full">
            <thead className="bg-gray-700 text-gray-300 border-b border-gray-700">
              <tr>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-center bg-[#21163F]">
                  S/N
                </th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-center bg-[#21163F33]">
                  Amount
                </th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-center bg-[#21163F33]">
                  Action
                </th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-center bg-[#21163F33]">
                  Token
                </th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-center bg-[#21163F33]">
                  Status
                </th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-center bg-[#21163F33]">
                  Date
                </th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-center bg-[#21163F33]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-b border-gray-700 hover:bg-gray-700 transition-colors text-[10px] sm:text-[12px] bg-gray-800"
                >
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-white text-center bg-[#21163F] border-b border-gray-700">
                    {transaction.id}
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-white border-b border-gray-700">
                    {transaction.amount.toLocaleString()}
                  </td>
                  <td className="px-2 sm:px-4 text-center py-2 sm:py-3 border-b border-gray-700">
                    <div className="text-center">
                      <span className="text-white">{transaction.action}</span>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 border-b border-gray-700">
                    <div className="flex items-center space-x-1 sm:space-x-2 justify-center">
                      <Image
                        src={TOKEN_SYMBOLS[transaction.token]}
                        alt={`${transaction.token} icon`}
                        width={16}
                        height={16}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                      <span className="text-white">{transaction.token}</span>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 text-center py-2 sm:py-3 border-b border-gray-700">
                    <span
                      className={`
                                            px-1 sm:px-2 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-semibold
                                            ${
                                              transaction.status ===
                                              "Successful"
                                                ? "bg-white text-green-500"
                                                : "bg-white text-red-500"
                                            }
                                        `}
                    >
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-white border-b border-gray-700">
                    <span className="hidden sm:inline">{transaction.date}</span>
                    <span className="sm:hidden">
                      {transaction.date.split(" ")[0]}
                    </span>
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 border-b border-gray-700 text-center">
                    <button
                      className="text-white text-center hover:text-blue-300 transition-colors underline text-[10px] sm:text-[12px]"
                      onClick={() => openModal(transaction)}
                    >
                      View Receipt
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center p-2 sm:p-4 text-white">
          <div className="text-gray-300 px-2 mb-2 sm:mb-0 text-[12px] sm:text-[14px]">
            Page 1 of 1
          </div>
          <div>
            <button
              className="px-2 sm:px-4 py-1 sm:py-2 mx-1 sm:mx-2 bg-gray-600 rounded hover:bg-gray-500 disabled:opacity-50 text-[12px] sm:text-[14px]"
              disabled
            >
              Previous
            </button>
            <button
              className="px-2 sm:px-4 py-1 sm:py-2 bg-gray-600 rounded hover:bg-gray-500 disabled:opacity-50 text-[12px] sm:text-[14px]"
              disabled
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && selectedTransaction && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 modal-overlay p-3"
          onClick={handleModalClick}
        >
          <div className="bg-black rounded-lg w-full max-w-sm mx-auto shadow-lg overflow-hidden">
            <div className="p-3 sm:p-4">
              <div className="flex justify-between items-center mb-2 sm:mb-3">
                <div className="text-gray-300 font-medium text-[12px] sm:text-[14px]">
                  Sent
                </div>
                <div className="text-white font-medium text-[12px] sm:text-[14px]">
                  -{selectedTransaction.amount.toFixed(5)}{" "}
                  {selectedTransaction.token}
                </div>
              </div>

              <div className="flex justify-between items-center mb-2 sm:mb-3">
                <div className="text-gray-300 font-medium text-[12px] sm:text-[14px]">
                  Recipient
                </div>
                <div className="text-white font-medium text-[12px] sm:text-[14px] break-all">
                  {selectedTransaction.recipient}
                </div>
              </div>

              <div className="flex justify-between items-center mb-2 sm:mb-3">
                <div className="text-gray-300 font-medium text-[12px] sm:text-[14px]">
                  Memo
                </div>
                <div className="text-white font-medium text-[12px] sm:text-[14px]">
                  {selectedTransaction.memo}
                </div>
              </div>

              <div className="flex justify-between items-center mb-2 sm:mb-3">
                <div className="text-gray-300 font-medium text-[12px] sm:text-[14px]">
                  Transaction Fee
                </div>
                <div className="text-white font-medium text-[12px] sm:text-[14px]">
                  {selectedTransaction.txFee} {selectedTransaction.token}
                </div>
              </div>

              <div className="flex justify-between items-center mb-2">
                <div className="text-gray-300 font-medium text-[12px] sm:text-[14px]">
                  Date
                </div>
                <div className="text-white font-medium text-[12px] sm:text-[14px]">
                  {selectedTransaction.date}
                </div>
              </div>

              {/* Close button for mobile */}
              <div className="text-center mt-3 sm:hidden">
                <button
                  className="px-4 py-1 bg-gray-700 rounded text-white text-[12px]"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default HistoryComponent;
