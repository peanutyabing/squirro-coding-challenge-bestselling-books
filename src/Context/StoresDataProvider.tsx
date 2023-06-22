import { createContext, useState } from "react";
import {
  StoresDataProviderProps,
  StoresDataContextType,
} from "../Types/Interfaces";

const StoresDataContext = createContext<StoresDataContextType>({});

export const StoresDataProvider = ({ children }: StoresDataProviderProps) => {
  const [storesData, setStoresData] = useState(null);

  return (
    <StoresDataContext.Provider value={{ storesData, setStoresData }}>
      {children}
    </StoresDataContext.Provider>
  );
};

export default StoresDataContext;
