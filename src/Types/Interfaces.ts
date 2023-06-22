export interface StoresDataProviderProps {
  children: React.ReactNode;
}

export interface StoresDataContextType {
  storesData?: StoresData | null;
  setStoresData?:
    | React.Dispatch<React.SetStateAction<StoresData>>
    | React.Dispatch<React.SetStateAction<null>>;
}

export interface StoresData {
  data: Store[];
  included: (Country | Author | Book)[];
  jsonapi: { version: string };
  meta: { total: string };
}

export interface StoreProps {
  store: Store;
}

export interface Store {
  type: "stores";
  id: string;
  attributes: StoreAttributes;
  relationships: Relationships;
}

export interface StoreAttributes {
  name: string;
  website: string;
  rating: number;
  storeImage: string;
  establishmentDate: string;
}

export interface Country {
  id: string;
  type: "countries";
  attributes: { code: string };
}

export interface Author {
  id: string;
  type: "authors";
  attributes: { fullName: string };
}

export interface BookProps {
  bookData: Book;
}

export interface Book {
  type: "books";
  id: string;
  attributes: { name: string; copiesSold: number };
  relationships: Relationships;
  authorName?: string;
}

export interface Relationships {
  countries?: { data: { id: string; type: "countries" } };
  author?: { data: { id: string; type: "authors" } };
  books?: { data: { id: string; type: "books" }[] };
}

export interface RatingProps {
  rating: number;
}
