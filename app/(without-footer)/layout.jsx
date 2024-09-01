import NavBar from "@/components/header/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import "../globals.css";

// app/ai/layout.js
export default function AiLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
