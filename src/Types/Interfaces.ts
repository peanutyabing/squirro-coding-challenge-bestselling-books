export interface StoreData {
  data: Store[];
  included: (Country | Author | Book)[];
}

export interface StoreProps {
  storeData: Store;
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
