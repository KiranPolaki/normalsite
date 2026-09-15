"use client";
import Work from "@/components/work/Work";
import GitHub from "./_components/Github";
import { useEffect } from "react";

function Works() {
  useEffect(() => {
    window.location.pathname;
  }, []);
  return (
    <div className="w-full">
      {/* <div className="w-full flex items-center justify-center h-full">
        <div className="w-4/5 h-full flex items-center justify-center bg-red-500 md:max-w-2xl rounded-b-lg text-white font-semibold p-2">
          work in progress
        </div>
      </div> */}
      <div className="w-full">
        <GitHub />
        <div className="page-shell mt-14 mb-5">
          <p className="eyebrow">Work</p>
        </div>
        <div className="page-shell pb-20">
          <div className="w-full flex flex-col gap-5">
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
