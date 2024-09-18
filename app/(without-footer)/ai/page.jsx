function page() {
  return (
    <div>
      <div className="w-full flex items-center justify-center h-full">
        <div className="w-4/5 h-full flex items-center justify-center bg-red-500 md:max-w-2xl rounded-b-lg text-white font-semibold p-2">
          work in progress
        </div>
      </div>
      <div className={`w-full flex justify-center h-16 mt-3`}>
        <div className="w-full max-w-3xl absolute bottom-0 flex items-center flex-col">
          <div className="max-w-[45rem] bg-[#29253e] h-7 w-full rounded-t-lg text-xs p-2 tracking-wider flex font-semibold justify-between items-center">
            <span className="font-mono text-slate-300">
              Under Development for better response&apos;s :)
            </span>
            <button onClick={""}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <div
            className={`max-w-3xl w-full flex justify-between md:w-full bg-white/20 shadow-lg ring-1 ring-black/5 p-6 rounded-t-xl`}
          >
            <div className="flex w-full gap-5">
              <input
                className="w-full white:bg-white dark:bg-[#3b3b3b] text-white-500 p-1 placeholder-neutral-500 font-semibold outline outline-0 focus:outline-0 tracking-wide"
                placeholder="Ask anything about me...."
              ></input>

              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
