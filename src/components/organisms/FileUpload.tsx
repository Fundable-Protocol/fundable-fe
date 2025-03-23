"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

export function FileUpload({ onFileUpload }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      if (
        droppedFile.type === "text/csv" ||
        droppedFile.name.endsWith(".csv")
      ) {
        setFile(droppedFile);
        onFileUpload(droppedFile);
      } else {
        alert("Please upload a CSV file");
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      onFileUpload(selectedFile);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={cn(
        "border border-dashed rounded-md p-8 transition-colors",
        isDragging ? "border-purple-600 bg-purple-600/5" : "border-gray-700",
        file ? "bg-gray-800/50" : ""
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center text-center">
        {file ? (
          <div className="flex flex-col items-center">
            <div className="mb-4 bg-gray-800 p-3 rounded-full">
              <FileText className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-sm font-medium mb-1">{file.name}</h3>
            <p className="text-xs text-gray-500 mb-4">
              {(file.size / 1024).toFixed(2)} KB
            </p>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-700 text-gray-400"
              onClick={handleButtonClick}
            >
              Change File
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-4 bg-gray-800 p-3 rounded-full">
              <Upload className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="text-sm font-medium mb-1">
              Drag and drop a CSV file here, or click to select a file
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              CSV format: address, amount (one per line)
            </p>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-700 text-gray-400"
              onClick={handleButtonClick}
            >
              Select File
            </Button>
          </>
        )}
        <input
          type="file"
          accept=".csv"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}
