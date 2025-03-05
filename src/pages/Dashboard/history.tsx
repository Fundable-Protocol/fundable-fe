// pages/transactions.tsx
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const TOKEN_SYMBOLS = {
    XLM: '/images/xlm.svg',
    TON: '/images/ton.svg',
    STRK: '/images/starknet.svg',
    ETH: '/images/eth.svg'
};

interface Transaction {
    id: number;
    amount: number;
    action: 'Sent' | 'Received';
    token: keyof typeof TOKEN_SYMBOLS;
    status: 'Successful' | 'Failed';
    date: string;
}

const HistoryComponent: React.FC = () => {
    const transactions: Transaction[] = [
        { id: 1, amount: 194.77, action: 'Sent', token: 'XLM', status: 'Successful', date: '12th Feb 2025' },
        { id: 2, amount: 15, action: 'Sent', token: 'TON', status: 'Successful', date: '12th Feb 2025' },
        { id: 3, amount: 80, action: 'Sent', token: 'STRK', status: 'Failed', date: '12th Feb 2025' },
        { id: 4, amount: 0.000343, action: 'Received', token: 'ETH', status: 'Successful', date: '12th Feb 2025' },
        { id: 5, amount: 556.7, action: 'Sent', token: 'XLM', status: 'Successful', date: '12th Feb 2025' },
        { id: 6, amount: 340, action: 'Sent', token: 'XLM', status: 'Successful', date: '12th Feb 2025' },
        { id: 7, amount: 354.99, action: 'Received', token: 'STRK', status: 'Successful', date: '12th Feb 2025' },
        { id: 8, amount: 80, action: 'Received', token: 'STRK', status: 'Failed', date: '12th Feb 2025' },
        { id: 9, amount: 5.68, action: 'Sent', token: 'TON', status: 'Failed', date: '12th Feb 2025' },
        { id: 10, amount: 325, action: 'Sent', token: 'STRK', status: 'Successful', date: '12th Feb 2025' }
    ];

    return (
        <div className="min-h-screen p-6">
            <Head>
                <title>Transaction History</title>
                <meta name="description" content="Cryptocurrency Transaction History" />
            </Head>

            <div className="max-w-6xl mx-auto rounded-lg shadow-lg overflow-hidden">
                <div className=" py-4 text-white font-bold  text-[16px]">
                    Transaction History
                </div>

                <div className="overflow-x-auto text-[14px]">
                    <table className="w-full">
                        <thead className="bg-gray-700 text-gray-300 border-b border-gray-700">
                            <tr>
                                <th className="px-4 py-3 text-center bg-[#21163F]">S/N</th>
                                <th className="px-4 py-3 text-center bg-[#21163F33]">Amount</th>
                                <th className="px-4 py-3 text-center bg-[#21163F33]">Action</th>
                                <th className="px-4 py-3 text-center bg-[#21163F33]">Token</th>
                                <th className="px-4 py-3 text-center bg-[#21163F33]">Status</th>
                                <th className="px-4 py-3 text-center bg-[#21163F33]">Date</th>
                                <th className="px-4 py-3 text-center  bg-[#21163F33]">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => (
                                <tr
                                    key={transaction.id}
                                    className="border-b border-gray-700 hover:bg-gray-700 transition-colors text-[12px] bg-gray-800"
                                >
                                    <td className="px-4 py-3 text-white text-center bg-[#21163F] border-b border-gray-700">{transaction.id}</td>
                                    <td className="px-4 py-3 text-center text-white border-b border-gray-700">
                                        {transaction.amount.toLocaleString()}
                                    </td>
                                    <td className="px-4 text-center py-3 border-b border-gray-700">
                                        <div className="text-center">

                                            <span className="text-white">{transaction.action}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 border-b border-gray-700">
                                        <div className="flex items-center space-x-2 justify-center">
                                            <Image
                                                src={TOKEN_SYMBOLS[transaction.token]}
                                                alt={`${transaction.token} icon`}
                                                width={18}
                                                height={18}
                                            />
                                            <span className="text-white">{transaction.token}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 text-center py-3 border-b border-gray-700">
                                        <span className={`
                      px-2 py-1 rounded-md text-xs font-semibold
                      ${transaction.status === 'Successful'
                                                ? 'bg-white  text-green-500'
                                                : 'bg-white text-red-500'
                                            }
                    `}>
                                            {transaction.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-center text-white border-b border-gray-700">{transaction.date}</td>
                                    <td className="px-4 py-3 border-b border-gray-700 text-center">
                                        <button className="text-blue-400 text-center hover:text-blue-300 transition-colors underline">
                                            View Receipt
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                <div className="flex justify-between p-4 text-white">
                    <div className="text-gray-300 px-2">Page 1 of 1</div>
                    <div>
                        <button
                            className="px-4 py-2 mx-2 bg-gray-600 rounded hover:bg-gray-500 disabled:opacity-50"
                            disabled
                        >
                            Previous
                        </button>
                        <button
                            className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500 disabled:opacity-50"
                            disabled
                        >
                            Next
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HistoryComponent;