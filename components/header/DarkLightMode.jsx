"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { SunIcon } from "@radix-ui/react-icons";

function DarkLightMode() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Button
        variant="ghost"
        className="p-0 hover:bg-inherit"
        onClick={() =>
          theme == "light" ? setTheme("dark") : setTheme("light")
        }
      >
        {theme === "light" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-moon cursor-pointer"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        ) : (
          <SunIcon height={24} width={24} className="flex items-center" />
        )}
      </Button>
    </div>
  );
}

export default DarkLightMode;
