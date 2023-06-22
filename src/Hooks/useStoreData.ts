import { useEffect, useContext } from "react";
import StoreDataContext from "../Context/StoreDataProvider";
import axios from "axios";

export default function useStoreData() {
  const { setStoreData } = useContext(StoreDataContext);

  useEffect(() => {
    fetchStoreData();
  }, []);

  const fetchStoreData = async () => {
    try {
      const storesRes = await axios.get("http://localhost:3000/stores");
      if (storesRes.data && setStoreData) {
        setStoreData(storesRes.data);
      }
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);
      console.log(message);
    }
  };

  return useContext(StoreDataContext);
}
