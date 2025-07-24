"use client"
import { Download, Lock } from "lucide-react";
import { useState } from "react";

export default function PaymentStreamComponent() {
  const [istransferable, setIsTransferable] = useState(false);
  const [iscancellable, setIsCancellable] = useState(false);
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-8 p-4 md:flex-row">
      <main className="flex-1 rounded-xl bg-[#151718] p-6">
        <div className="flex flex-col gap-6">
          <header className="border-b-2 border-borderbottom pb-6">
            <h1 className="text-base font-semibold text-link">Create Stream</h1>
          </header>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex flex-1 flex-col gap-2">
                <label
                  className="font-medium text-base text-[#8792AB]"
                  htmlFor="stream-name"
                >
                  Name
                </label>
                <input
                  placeholder="Fill in the name of the stream..."
                  type="text"
                  id="stream-name"
                  className="w-full rounded-md bg-[#1E212F] px-3 py-5 placeholder:text-base placeholder:font-medium placeholder:text-[#4E5679]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <label
                  className="font-medium text-base text-[#8792AB]"
                  htmlFor="stream-token"
                >
                  Token
                </label>
                <div className="flex w-full items-center justify-between rounded-md bg-[#1E212F] px-3">
                  <div className="h-[26px] w-[24px] rounded-[13px] bg-[#242838]"></div>
                  <input
                    placeholder="Choose a token..."
                    type="text"
                    id="stream-token"
                    className="flex-1 bg-transparent py-5 outline-none placeholder:text-base placeholder:font-medium placeholder:text-[#4E5679]"
                  />
                  <button
                    type="button"
                    className="rounded bg-[#242838] px-[10px] py-[8.5px] text-base font-medium text-[#8792AB]"
                  >
                    Choose
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex flex-1 flex-col gap-2">
                <label
                  className="font-medium text-base text-[#8792AB]"
                  htmlFor="stream-transferable"
                >
                  Make the stream transferable?
                </label>
                <input
                  readOnly
                  onClick={() => setIsTransferable(!istransferable)}
                  value={`Transferability(${istransferable ? "on" : "off"})`}
                  type="text"
                  id="stream-transferable"
                  className="w-full rounded-md bg-[#1E212F] px-3 py-5 focus:outline-none cursor-pointer placeholder:text-base placeholder:font-medium placeholder:text-[#4E5679]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <label
                  className="font-medium text-base text-[#8792AB]"
                  htmlFor="stream-cancellable"
                >
                  Make the stream cancellable?
                </label>
                <input
                  readOnly
                  onClick={() => setIsCancellable(!iscancellable)}
                  value={`Cancellability(${iscancellable ? "on" : "off"})`}
                  type="text"
                  id="stream-cancellable"
                  className="w-full rounded-md bg-[#1E212F] px-3 py-5 focus:outline-none cursor-pointer placeholder:text-base placeholder:font-medium placeholder:text-[#4E5679]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex flex-1 flex-col gap-2">
                <label
                  className="font-medium text-base text-[#8792AB]"
                  htmlFor="stream-recipient"
                >
                  Recipient
                </label>
                <input
                  placeholder="Fill in the address or ENS..."
                  type="text"
                  id="stream-recipient"
                  className="w-full rounded-md bg-[#1E212F] px-3 py-5 placeholder:text-base placeholder:font-medium placeholder:text-[#4E5679]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <label
                  className="font-medium text-base text-[#8792AB]"
                  htmlFor="stream-duration"
                >
                  Streaming Duration
                </label>
                <div className="flex w-full items-center gap-6">
                  <input
                    value="Month (30d)"
                    type="text"
                    id="stream-duration"
                    className="flex-1 rounded-md bg-[#1E212F] px-3 py-5 placeholder:text-base placeholder:font-medium placeholder:text-[#4E5679]"
                  />
                  <input
                    value="1"
                    type="text"
                    id="stream-amount"
                    className="w-[61px] rounded-md bg-[#1E212F] px-3 py-5 placeholder:text-base placeholder:font-medium placeholder:text-[#4E5679]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <button
                type="button"
                className="flex items-center justify-center gap-3 rounded bg-[#2A2E41] px-[18px] py-[14px] text-base font-semibold leading-4 text-[#E1E4EA]"
              >
                <Download
                  className="h-5 w-5 text-gray-600"
                  aria-hidden="true"
                />
                Save Draft
              </button>
              <button
                type="submit"
                className="flex items-center justify-center gap-3 rounded bg-[linear-gradient(to_right,_#1F8EBE_0%,_#440495_39%,_#440495_69%,_#B102CD_98%)] px-[18px] py-[14px] text-base font-semibold leading-4 text-white"
              >
                Continue
                <Lock className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </main>
      <main className="w-full rounded-xl bg-[#151718] p-6 md:w-[311px]">
        <div className="flex flex-col gap-6">
          <header className="border-b-2 border-borderbottom pb-6">
            <h1 className="text-base font-semibold text-link">Summary</h1>
          </header>
          <div className="flex flex-col gap-6">
            <article className="flex items-center justify-between">
              <h5 className="text-base font-semibold text-[#8792AB]">Name</h5>
              <p className="text-base font-medium text-[#4E5679]">
                First Stream
              </p>
            </article>
            <article className="flex items-center justify-between">
              <h5 className="text-base font-semibold text-[#8792AB]">Token</h5>
              <p className="text-base font-medium text-[#4E5679]">
                First Stream
              </p>
            </article>
            <article className="flex items-center justify-between">
              <h5 className="text-base font-semibold text-[#8792AB]">
                Streambility
              </h5>
              <p className="text-base font-medium text-[#4E5679]">
                 {istransferable ? "ON" : "OFF"}
              </p>
            </article>
            <article className="flex items-center justify-between">
              <h5 className="text-base font-semibold text-[#8792AB]">
                Cancellability
              </h5>
              <p className="text-base font-medium text-[#4E5679]">
                {iscancellable ? "ON" : "OFF"}
              </p>
            </article>
            <article className="flex items-center justify-between">
              <h5 className="text-base font-semibold text-[#8792AB]">
                Recipient
              </h5>
              <p className="truncate text-base font-medium text-[#4E5679]">
                0x000........987
              </p>
            </article>
            <article className="flex items-center justify-between">
              <h5 className="text-base font-semibold text-[#8792AB]">
                Streaming Duration
              </h5>
              <p className="text-base font-medium text-[#4E5679]">Weekly</p>
            </article>
          </div>
        </div>
      </main>
    </section>
  );
}