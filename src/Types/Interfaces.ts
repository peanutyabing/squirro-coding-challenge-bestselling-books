export interface StoreProps {
  storeData: Store;
}

export interface Store {
  type: "stores";
  id: string;
  attributes: StoreAttributes;
  relationships: {
    countries?: Country;
    author?: Author;
    books: Books;
  };
}

export interface StoreAttributes {
  name: string;
  website: string;
  rating: number;
  storeImage: string;
  establishmentDate: string;
}

export interface Country {
  data: {
    id: string;
    type: "countries";
  };
}

export interface Author {
  data: {
    id: string;
    type: "authors";
  };
}

export interface Books {
  data: Book[];
}

export interface Book {
  id: string;
  type: "books";
}
