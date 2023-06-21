import Book from "./Book";
import { StoreProps } from "../Types/Interfaces";
import moment from "moment";

export default function BookStore({ storeData }: StoreProps) {
  const formatDate = (date: string): string => {
    return moment(new Date(date)).format("DD.MM.YYYY");
  };

  return (
    <div className="border-2 my-2 mx-4 p-2">
      <div className="flex gap-6 my-4 items-center">
        <img
          src={storeData.attributes.storeImage}
          alt={storeData.attributes.name}
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
        />
        <div className="w-full">
          <div className="sm:flex justify-between">
            <div className="font-bold text-2xl">
              {storeData.attributes.name}
            </div>
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
          {formatDate(storeData.attributes.establishmentDate)} -{" "}
          <a
            href={storeData.attributes.website}
            className="hover:text-blue-500"
          >
            {storeData.attributes.website}
          </a>
        </div>
        <div>Placeholder for flag</div>
      </div>
    </div>
  );
}
