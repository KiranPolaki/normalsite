"use client";

import { Suspense, useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { isMobile } from "react-device-detect";
import { useTheme } from "next-themes";

function GetYears() {
  const years = [2022, 2023, 2024, 1];
  const [yearState, setYearState] = useState(0);
  const { theme, setTheme } = useTheme();

  const handleYearChange = (year) => {
    setYearState(year);
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="eyebrow">Contributions</p>
      </div>
      <div className="tabs self-start">
        {years.map((year) => {
          const isActive =
            yearState === year || (yearState === 0 && year === 1);
          return (
            <button
              type="button"
              className={`tab ${isActive ? "tab-active" : ""}`}
              key={year}
              aria-pressed={isActive}
              onClick={() => handleYearChange(year)}
            >
              {year != 1 ? year : "recent"}
            </button>
          );
        })}
      </div>
      <Suspense fallback="Loadin...">
        <>
          {yearState === 0 || yearState === 1 ? (
            <GitHubCalendar
              username="KiranPolaki"
              blockSize={!isMobile ? 8 : 4}
              colorScheme={theme === "dark" ? "dark" : "light"}
            />
          ) : (
            <GitHubCalendar
              username="KiranPolaki"
              blockSize={!isMobile ? 8 : 4}
              year={yearState}
              colorScheme={theme === "dark" ? "dark" : "light"}
            />
          )}
        </>
      </Suspense>
    </div>
  );
}

export default GetYears;
