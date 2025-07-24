import { Download, Lock } from "lucide-react";

export default function paymentStream() {
  return (
    <section className=" h-[785px] mx-[20px] bg-transparent flex gap-8">
      <main className="bg-[#151718]/70 backdrop-blur-sm  flex-1 h-[784px] rounded-xl p-6">
        <div className="flex flex-col gap-6">
          <header className="pb-[30px] border-b-2 border-borderbottom">
            <h1 className="text-base font-semibold text-link">Create Stream</h1>
          </header>
          <form className="flex flex-col gap-6">
            <div className="flex gap-6 items-start">
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
                  className="w-full bg-[#1E212F] rounded-md px-3 py-5 placeholder:text-base placeholder:font-medium placeholder:text-[#4E5679]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <label
                  className="font-medium text-base text-[#8792AB]"
                  htmlFor="stream-token"
                >
                  Token
                </label>
                <div className="w-full bg-[#1E212F] rounded-md px-3  flex items-center justify-between ">
                  <div className="w-[24px] h-[26px] rounded-[13px] bg-[#242838]"></div>
                  <input
                    placeholder="Choose a token..."
                    type="text"
                    id="stream-token"
                    className="flex-1 mx-1 placeholder:text-base placeholder:font-medium placeholder:text-[#4E5679] bg-transparent outline-none py-5"
                  />
                  <button className="px-[10px] py-[8.5px] bg-[#242838] rounded text-base font-medium text-[#8792AB]">
                    Choose
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex flex-1 flex-col gap-2">
                <label
                  className="font-medium text-base text-[#8792AB]"
                  htmlFor="stream-transferable"
                >
                  Make the stream transferable?
                </label>
                <input
                  value="Transferability (on)"
                  type="text"
                  id="stream-transferable"
                  className="w-full bg-[#1E212F] rounded-md px-3 py-5 placeholder:text-base placeholder:font-medium placeholder:text-[#4E5679]"
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
                  value="Cancellability (on)"
                  type="text"
                  id="stream-cancellable"
                  className="w-full bg-[#1E212F] rounded-md px-3 py-5 placeholder:text-base placeholder:font-medium placeholder:text-[#4E5679]"
                />
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex flex-1 flex-col gap-2">
                <label
                  className="font-medium text-base text-[#8792AB]"
                  htmlFor="stream-recipient"
                >
                  Recipient
                </label>
                <input
                  placeholder="Fill in the address or ENS.."
                  type="text"
                  id="stream-recipient"
                  className="w-full bg-[#1E212F] rounded-md px-3 py-5 placeholder:text-base placeholder:font-medium placeholder:text-[#4E5679]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <label
                  className="font-medium text-base text-[#8792AB]"
                  htmlFor="stream-token"
                >
                  Streaming Duration
                </label>
                <div className="flex w-full items-center gap-6 ">
                  <input
                    value="Month (30d)"
                    type="text"
                    id="stream-duration"
                    className="flex-1 bg-[#1E212F] rounded-md px-3 py-5 placeholder:text-base placeholder:font-medium placeholder:text-[#4E5679]"
                  />
                  <input
                    value="1"
                    type="text"
                    id="stream-amount"
                    className="w-[61px] bg-[#1E212F] rounded-md px-3 py-5 placeholder:text-base placeholder:font-medium placeholder:text-[#4E5679]"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-end">
              <button className="flex items-center gap-3 px-[18px] py-[14px] bg-[#2A2E41] rounded text-base font-semibold text-[#E1E4EA] leading-4">
                <Download className="w-5 h-5 text-gray-600" />
                Save Draft
              </button>
              <button className="flex items-center gap-3 px-[18px] py-[14px] rounded text-base font-semibold text-white leading-4 bg-[linear-gradient(to_right,_#1F8EBE_0%,_#440495_39%,_#440495_69%,_#B102CD_98%)]">
                Continue
                <Lock className="w-5 h-5 " />
              </button>
              
            </div>
          </form>
        </div>
      </main>
      <main className="bg-[#151718] w-[311px] h-[370px] rounded-xl p-6">
         <div className="flex flex-col gap-6">
          <header className="pb-[30px] border-b-2 border-borderbottom">
            <h1 className="text-base font-semibold text-link">Summary</h1>
          </header>
          <div className="flex flex-col gap-6">
            <article className="flex justify-between items-center ">
              <h5 className="font-semibold text-base text-[#8792AB]">Name</h5>
              <p className="font-medium text-base text-[#4E5679]">First Stream</p>
            </article>
            <article className="flex justify-between items-center ">
              <h5 className="font-semibold text-base text-[#8792AB]">Token</h5>
              <p className="font-medium text-base text-[#4E5679]">First Stream</p>
            </article>
            <article className="flex justify-between items-center ">
              <h5 className="font-semibold text-base text-[#8792AB]">Streambility</h5>
              <p className="font-medium text-base text-[#4E5679]">ON</p>
            </article>
            <article className="flex justify-between items-center ">
              <h5 className="font-semibold text-base text-[#8792AB]">Cancellability</h5>
              <p className="font-medium text-base text-[#4E5679]">OFF</p>
            </article>
            <article className="flex justify-between items-center ">
              <h5 className="font-semibold text-base text-[#8792AB]">Recipient</h5>
              <p className="font-medium text-base text-[#4E5679]">0x000........987</p>
            </article>
            <article className="flex justify-between items-center ">
              <h5 className="font-semibold text-base text-[#8792AB]">Streaming Duration</h5>
              <p className="font-medium text-base text-[#4E5679]">Weekly</p>
            </article>
          </div>
          </div>
      </main>
    </section>
  );
}



