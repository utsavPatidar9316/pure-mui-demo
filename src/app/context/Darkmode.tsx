import React, { createContext, useContext, useState, useEffect } from "react";
import { ReactNode } from "react";

interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedDarkMode = localStorage.getItem("darkMode");
      if (savedDarkMode !== null) {
        setDarkMode(JSON.parse(savedDarkMode));
      } else {
        // Fallback to system preference (if applicable) or light mode
        setDarkMode(
          (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches) ||
            false
        );
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      if (typeof window !== "undefined") {
        localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
      }
      return newDarkMode;
    });
  };

  const contextValue: DarkModeContextType = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;
