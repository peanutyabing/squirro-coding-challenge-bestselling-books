import useStoreData from "../Hooks/useStoreData";
import Book from "./Book";
import { StoreProps } from "../Types/Interfaces";
import moment from "moment";

export default function BookStore({ store }: StoreProps) {
  const { storeData } = useStoreData();
  const formatDate = (date: string): string => {
    return moment(new Date(date)).format("DD.MM.YYYY");
  };

  const getCountryCode = () => {
    let countryCode;
    const countryId = store.relationships.countries?.data.id;
    const country = storeData?.included.filter(
      (item) => item.type === "countries" && item.id === countryId
    );
    if (country && country[0].attributes && "code" in country[0].attributes) {
      countryCode = country[0].attributes.code;
    }
    return countryCode?.toLocaleLowerCase() || "";
  };

  const getFlagUrl = (countryCode: string) => {
    return `https://flagcdn.com/${countryCode}.svg`;
  };

  return (
    <div className="border-2 my-2 mx-4 p-2">
      <div className="flex gap-6 my-4 items-center">
        <img
          src={store.attributes.storeImage}
          alt={store.attributes.name}
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
        />
        <div className="w-full">
          <div className="sm:flex justify-between">
            <div className="font-bold text-2xl">{store.attributes.name}</div>
            <div>Placeholder for interactive rating</div>
          </div>
          <div>
            <div className="font-semibold">Best-selling books</div>
            <Book />
            <Book />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="text-sm">
          {formatDate(store.attributes.establishmentDate)} -{" "}
          <a href={store.attributes.website} className="hover:text-blue-500">
            {store.attributes.website}
          </a>
        </div>
        <img
          src={getFlagUrl(getCountryCode())}
          alt={getCountryCode()}
          className="h-4"
        />
      </div>
    </div>
  );
}
