import { useEffect, useContext } from "react";
import StoresDataContext from "../Context/StoresDataProvider";
import axios from "axios";

export default function useStoresData() {
  const { setStoresData } = useContext(StoresDataContext);

  useEffect(() => {
    fetchStoresData();
  }, []);

  const fetchStoresData = async () => {
    try {
      const storesRes = await axios.get("http://localhost:3000/stores");
      if (storesRes.data && setStoresData) {
        setStoresData(storesRes.data);
      }
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);
      console.log(message);
    }
  };

  return useContext(StoresDataContext);
}
