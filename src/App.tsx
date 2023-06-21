import { useEffect, useState } from "react";
import BookStore from "./Components/BookStore";
import { Store } from "./Types/Interfaces";
import axios from "axios";
import Book from "./Components/Book";

function App() {
  const [stores, setStores] = useState<Store[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    try {
      const storesRes = await axios.get("http://localhost:3000/stores");
      console.log(storesRes);
      setStores(storesRes.data.data);
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);
      setError(message);
    }
  };

  return (
    <div className="">
      <header>
        <p className="m-2 text-sm text-red-700">hey{error}</p>
        {stores.map((store) => (
          <BookStore storeData={store} />
        ))}
      </header>
    </div>
  );
}

export default App;
