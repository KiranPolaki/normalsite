"use client";

import { Button } from "@/components/ui/button";
import { Suspense, useState } from "react";
import GitHubCalendar from "react-github-calendar";

function GetYears() {
  const years = [2022, 2023, 2024];
  const [yearState, setYearState] = useState(0);

  const handleYearChange = (year) => {
    console.log(year);
    setYearState(year);
  };
  return (
    <div>
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
  );
}

export default GetYears;
