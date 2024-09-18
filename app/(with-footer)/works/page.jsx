import Work from "@/components/work/Work";
import GitHub from "./_components/Github";

function Works() {
  return (
    <div className="w-full">
      <div className="w-full">
        <GitHub />
        <div className="w-full flex items-center justify-center my-4">
          <div className="max-w-3xl w-full flex items-center justify-start">
            <p className="text-gray-400 text-xl font-semibold tracking-wider p-0 ml-6 selection:text-purple-900 text-left">
              WORK
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center flex-col">
          <div className="max-w-3xl w-full h-full flex flex-col gap-5 items-center justify-center">
            {/* <p className="text-gray-400 text-xl font-semibold tracking-wider p-0 selection:text-purple-900 mb-2">
            WORK
          </p> */}
            <Work />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
