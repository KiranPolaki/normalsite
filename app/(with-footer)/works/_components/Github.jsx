"use client";
import { Button } from "@/components/ui/button";
import { Suspense, useState } from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  const years = [2022, 2023, 2024];
  const [yearState, setYearState] = useState(0);

  const handleYearChange = (year) => {
    console.log(year);
    setYearState(year);
  };
  return (
    <>
      <div className="w-full flex justify-center items-center mt-12">
        <div className="flex flex-col gap-8 max-w-5xl items-center justify-center">
          <Suspense fallback="Loadin...">
            {yearState === 0 ? (
              <GitHubCalendar username="KiranPolaki" blockSize={8} />
            ) : (
              <GitHubCalendar
                username="KiranPolaki"
                blockSize={8}
                year={yearState}
              />
            )}
          </Suspense>
          <div className="flex gap-5">
            {years.map((year) => {
              return (
                <Button
                  variant="outline"
                  key={year}
                  onClick={() => handleYearChange(year)}
                >
                  {year}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Github;
