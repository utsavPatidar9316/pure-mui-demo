import React, { createContext, useContext, useState, useEffect } from "react";
import { ReactNode } from "react";

interface SmallScreenContextType {
  smallScreen: boolean;
}

const SmallScreenContext = createContext<SmallScreenContextType | undefined>(
  undefined
);

export const useSmallScreen = () => {
  const context = useContext(SmallScreenContext);
  if (!context) {
    throw new Error("useSmallScreen must be used within a smallScreenProvider");
  }
  return context;
};

interface SmallScreenProviderProps {
  children: ReactNode;
}

export const SmallScreenProvider: React.FC<SmallScreenProviderProps> = ({
  children,
}) => {
  const [smallScreen, setSmallScreen] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 600;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const contextValue: SmallScreenContextType = {
    smallScreen,
  };

  return (
    <SmallScreenContext.Provider value={contextValue}>
      {children}
    </SmallScreenContext.Provider>
  );
};

export default SmallScreenContext;
