import useStoreData from "./Hooks/useStoreData";
import BookStore from "./Components/BookStore";

function App() {
  const { storeData } = useStoreData();
  return (
    <div className="">
      <header>
        <p className="my-1 mx-4 text-sm text-red-700 h-4">{}</p>
        {storeData?.data.map((store) => (
          <BookStore key={store.id} store={store} />
        ))}
      </header>
    </div>
  );
}

export default App;
