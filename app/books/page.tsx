import React from "react";
import BookList from "../components/BookList/BookList";
import { Book } from "@/types/book";
const page = async () => {
  const res = await fetch(
    "https://681ab75a17018fe5057883fc.mockapi.io/api/product"
  );
  const data: Book[] = await res.json();
  return <BookList books={data}/>;
};

export default page;
