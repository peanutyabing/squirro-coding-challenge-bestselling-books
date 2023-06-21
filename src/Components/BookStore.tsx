import Book from "./Book";
import { StoreProps } from "../Types/Interfaces";

export default function BookStore({ storeData }: StoreProps) {
  return (
    <div className="border-2 m-2 p-2">
      <div className="flex gap-6 my-4">
        <img
          src={storeData.attributes.storeImage}
          alt={storeData.attributes.name}
          className="w-32 h-32 rounded-full object-cover"
        />
        <div className="w-full">
          <div className="flex justify-between">
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
          {storeData.attributes.establishmentDate} -{" "}
          {storeData.attributes.website}
        </div>
        <div>Placeholder for flag</div>
      </div>
    </div>
  );
}
