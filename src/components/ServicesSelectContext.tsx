
import React, { createContext, useContext, useState } from "react";
import { servicesList } from "./servicesList";

type ServicesSelectContextType = {
  selectedServices: string[];
  setSelectedServices: (services: string[]) => void;
  selectService: (service: string) => void;
};

const ServicesSelectContext = createContext<ServicesSelectContextType>({
  selectedServices: [],
  setSelectedServices: () => {},
  selectService: () => {},
});

export function useServicesSelect() {
  return useContext(ServicesSelectContext);
}

export const ServicesSelectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const selectService = (service: string) => {
    if (!servicesList.includes(service)) return;
    setSelectedServices((prev) =>
      prev.includes(service) ? prev : [...prev, service]
    );
  };

  return (
    <ServicesSelectContext.Provider value={{ selectedServices, setSelectedServices, selectService }}>
      {children}
    </ServicesSelectContext.Provider>
  );
};
