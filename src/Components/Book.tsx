import { BookProps } from "../Types/Interfaces";

export default function Book({ bookData }: BookProps) {
  return (
    <div className="grid md:grid-cols-2">
      <div>{bookData.attributes.name}</div>
      <div>{bookData.relationships.author?.data.id}</div>
    </div>
  );
}
