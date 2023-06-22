import useStoresData from "./Hooks/useStoresData";
import BookStore from "./Components/BookStore";

function App() {
  const { storesData } = useStoresData();
  return (
    <div className="">
      <header>
        <h1 className="mt-2 -mb-3 py-2 font-bold text-2xl text-center text-slate-700 bg-gray-200">
          Bookstores
        </h1>
        {storesData?.data.map((store) => (
          <BookStore key={store.id} store={store} />
        ))}
      </header>
    </div>
  );
}

export default App;
