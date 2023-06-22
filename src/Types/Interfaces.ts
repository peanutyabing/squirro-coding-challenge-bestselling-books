export interface StoreDataProviderProps {
  children: React.ReactNode;
}

export interface StoreDataContextType {
  storeData?: StoreData | null;
  setStoreData?:
    | React.Dispatch<React.SetStateAction<StoreData>>
    | React.Dispatch<React.SetStateAction<null>>;
}

export interface StoreData {
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
  attributes?: { code: string };
}

export interface Author {
  id: string;
  type: "authors";
  attributes?: { fullName: string };
}

export interface Book {
  type: "books";
  id: string;
  attributes?: { name: string; copiesSold: number };
  relationships?: Relationships;
}

export interface Relationships {
  countries?: { data: Country };
  author?: { data: Author };
  books: { data: Book[] };
}
