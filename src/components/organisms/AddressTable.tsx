"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2, Edit2 } from "lucide-react";
import { Input } from "@/components/ui/input";

interface AddressTableProps {
  addresses: { address: string; amount: string }[];
  setAddresses: React.Dispatch<
    React.SetStateAction<{ address: string; amount: string }[]>
  >;
}

export function AddressTable({ addresses, setAddresses }: AddressTableProps) {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editValues, setEditValues] = useState({ address: "", amount: "" });

  const handleRemoveAddress = (index: number) => {
    const newAddresses = [...addresses];
    newAddresses.splice(index, 1);
    setAddresses(newAddresses);
  };

  const handleEditClick = (index: number) => {
    setEditingIndex(index);
    setEditValues(addresses[index]);
  };

  const handleSaveEdit = () => {
    if (editingIndex !== null) {
      const newAddresses = [...addresses];
      newAddresses[editingIndex] = editValues;
      setAddresses(newAddresses);
      setEditingIndex(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
  };

  const handleInputChange = (field: "address" | "amount", value: string) => {
    setEditValues((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <tbody className="grid gap-2">
          {addresses.map((item, index) => (
            <tr
              key={index}
              className="md:grid md:grid-cols-[3fr_3fr_0.5fr] gap-3 items-end flex flex-col"
            >
              <td className="px-4 py-3 text-sm bg-[#1E212F] rounded-[6px] my-auto w-full">
                {editingIndex === index ? (
                  <Input
                    value={editValues.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                    className="h-full border-[#2A2E41] bg-transparent"
                  />
                ) : (
                  item.address
                )}
              </td>
              <td className="px-4 py-3 text-sm bg-[#1E212F] rounded-[6px] my-auto w-full">
                {editingIndex === index ? (
                  <Input
                    value={editValues.amount}
                    onChange={(e) =>
                      handleInputChange("amount", e.target.value)
                    }
                    className="h-full border-[#2A2E41] bg-transparent"
                  />
                ) : (
                  item.amount
                )}
              </td>
              <td className="text-sm h-full w-full">
                <div className="flex items-center justify-end md:gap-2 h-full">
                  {editingIndex === index ? (
                    <div className=" text-sm bg-[#1E212F] rounded-[6px] w-full h-full my-auto flex items-center justify-end md:px-4 gap-1 p-2 md:p-0">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 text-gray-400 hover:text-white hover:bg-[#1A1A1A]"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 text-[#7F3DFF] hover:text-[#7F3DFF] hover:bg-[#1A1A1A]"
                        onClick={handleSaveEdit}
                      >
                        Save
                      </Button>
                    </div>
                  ) : (
                    <div className=" text-sm bg-[#1E212F] rounded-[6px] w-full h-full my-auto flex items-center justify-end px-4 gap-1 p-2 md:p-0">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-400 hover:text-white hover:bg-transparent"
                        onClick={() => handleRemoveAddress(index)}
                      >
                        <Trash2 size={16} />
                        <span className="sr-only">Delete</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-400 hover:text-white hover:bg-transparent"
                        onClick={() => handleEditClick(index)}
                      >
                        <Edit2 size={16} />
                        <span className="sr-only">Edit</span>
                      </Button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
