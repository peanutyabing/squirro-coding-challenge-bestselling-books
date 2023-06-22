import useStoresData from "./Hooks/useStoresData";
import BookStore from "./Components/BookStore";

function App() {
  const { storesData } = useStoresData();
  return (
    <div className="">
      <header>
        <p className="my-1 mx-4 text-sm text-red-700 h-4">{}</p>
        {storesData?.data.map((store) => (
          <BookStore key={store.id} store={store} />
        ))}
      </header>
    </div>
  );
}

export default App;
