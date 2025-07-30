"use client";
import { Download, Lock } from "lucide-react";
import { useState } from "react";
import { TokenSelect } from "@/components/payment-stream/TokenSelect";
import { SwitchSelect } from "@/components/payment-stream/SwitchSelect";

export default function PaymentStreamComponent() {
  const [isTransferable, setIsTransferable] = useState(false);
  const [isCancellable, setIsCancellable] = useState(false);
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-8 p-4 md:flex-row">
      <main className="flex-1 rounded-xl bg-utility-mainBg p-6">
        <div className="flex flex-col gap-6">
          <header className="border-b-2 border-utility-borderbottom pb-6">
            <h1 className="text-base font-semibold text-link">Create Stream</h1>
          </header>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex flex-1 flex-col gap-2">
                <label
                  className="font-medium text-base text-utility-label"
                  htmlFor="stream-name"
                >
                  Name
                </label>
                <input
                  placeholder="Fill in the name of the stream..."
                  type="text"
                  id="stream-name"
                  className="w-full rounded-md bg-utility-input px-3 py-5 placeholder:text-base placeholder:font-medium placeholder:text-utility-placeholder"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <label
                  className="font-medium text-base text-utility-label"
                  htmlFor="stream-token"
                >
                  Token
                </label>
                <TokenSelect />
              </div>
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex flex-1 flex-col gap-2">
                <label
                  className="font-medium text-base text-utility-label"
                  htmlFor="stream-transferable"
                >
                  Make the stream transferable?
                </label>
                <SwitchSelect
                  label="Transferability"
                  value={isTransferable}
                  onValueChange={setIsTransferable}
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <label
                  className="font-medium text-base text-utility-label"
                  htmlFor="stream-cancellable"
                >
                  Make the stream cancellable?
                </label>
                <SwitchSelect
                  label="Cancellability"
                  value={isCancellable}
                  onValueChange={setIsCancellable}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex flex-1 flex-col gap-2">
                <label
                  className="font-medium text-base text-utility-label"
                  htmlFor="stream-recipient"
                >
                  Recipient
                </label>
                <input
                  placeholder="Fill in the address or ENS..."
                  type="text"
                  id="stream-recipient"
                  className="w-full rounded-md bg-utility-input px-3 py-5 placeholder:text-base placeholder:font-medium placeholder:text-utility-placeholder"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <label
                  className="font-medium text-base text-utility-label"
                  htmlFor="stream-duration"
                >
                  Streaming Duration
                </label>
                <div className="flex w-full items-center gap-6">
                  <input
                    defaultValue="Month (30d)"
                    type="text"
                    id="stream-duration"
                    className="flex-1 rounded-md bg-utility-input px-3 py-5 placeholder:text-base placeholder:font-medium placeholder:text-utility-placeholder"
                  />
                  <input
                    defaultValue="1"
                    type="text"
                    id="stream-amount"
                    className="w-[61px] rounded-md bg-utility-input px-3 py-5 placeholder:text-base placeholder:font-medium placeholder:text-utility-placeholder"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <button
                type="button"
                className="flex items-center justify-center gap-3 rounded bg-utility-borderbottom px-[18px] py-[14px] text-base font-semibold leading-4 text-link"
              >
                <Download
                  className="h-5 w-5 text-gray-600"
                  aria-hidden="true"
                />
                Save Draft
              </button>
              <button
                type="submit"
                className="flex items-center justify-center gap-3 rounded bg-gradient-to-r from-utility-gradient1 via-utility-gradient2 to-utility-gradient3 px-[18px] py-[14px] text-base font-semibold leading-4 text-white"
              >
                Continue
                <Lock className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </main>
      <main className="w-full rounded-xl bg-utility-mainBg p-6 md:w-[311px]">
        <div className="flex flex-col gap-6">
          <header className="border-b-2 border-utility-borderbottom pb-6">
            <h1 className="text-base font-semibold text-link">Summary</h1>
          </header>
          <div className="flex flex-col gap-6">
            <article className="flex items-center justify-between">
              <h5 className="text-base font-semibold text-utility-label">
                Name
              </h5>
              <p className="text-base font-medium text-utility-placeholder">
                First Stream
              </p>
            </article>
            <article className="flex items-center justify-between">
              <h5 className="text-base font-semibold text-utility-label">
                Token
              </h5>
              <p className="text-base font-medium text-utility-placeholder">
                First Stream
              </p>
            </article>
            <article className="flex items-center justify-between">
              <h5 className="text-base font-semibold text-utility-label">
                Streambility
              </h5>
              <p className="text-base font-medium text-utility-placeholder">
                {isTransferable ? "ON" : "OFF"}
              </p>
            </article>
            <article className="flex items-center justify-between">
              <h5 className="text-base font-semibold text-utility-label">
                Cancellability
              </h5>
              <p className="text-base font-medium text-utility-placeholder">
                {isCancellable ? "ON" : "OFF"}
              </p>
            </article>
            <article className="flex items-center justify-between">
              <h5 className="text-base font-semibold text-utility-label">
                Recipient
              </h5>
              <p className="truncate text-base font-medium text-utility-placeholder">
                0x000........987
              </p>
            </article>
            <article className="flex items-center justify-between">
              <h5 className="text-base font-semibold text-utility-label">
                Streaming Duration
              </h5>
              <p className="text-base font-medium text-utility-placeholder">
                Weekly
              </p>
            </article>
          </div>
        </div>
      </main>
    </section>
  );
}