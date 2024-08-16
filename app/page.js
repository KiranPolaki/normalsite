export default function Home() {
  return (
    <>
      <div className="w-full justify-center flex">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 my-14">
            <div className="w-20 h-20 rounded-full bg-red-600 bg-cover">
              {/* <Image alt="sai" width={500} height={500} href="/pfp.JPG" /> */}
            </div>
            <div className="font-semibold font-inter">
              <p className="text-2xl">Sai Kiran Polaki</p>
              <p className="flex ">
                @saiiik
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-right"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </p>
            </div>
          </div>
          <div className="text-2xl">
            I create web so i am spiderman. my current primary field of work is
            devops and yes i&apos;m a fullstack web developer. as of now i am
            21, rn living in hyderabad. And now, learning web3
          </div>
        </div>
      </div>
    </>
  );
}
