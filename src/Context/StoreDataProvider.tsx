import { createContext, useState } from "react";
import {
  StoreDataProviderProps,
  StoreDataContextType,
} from "../Types/Interfaces";

const StoreDataContext = createContext<StoreDataContextType>({});

export const StoreDataProvider = ({ children }: StoreDataProviderProps) => {
  const [storeData, setStoreData] = useState(null);

  return (
    <StoreDataContext.Provider value={{ storeData, setStoreData }}>
      {children}
    </StoreDataContext.Provider>
  );
};

export default StoreDataContext;
