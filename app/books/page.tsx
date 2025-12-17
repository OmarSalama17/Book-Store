import React from "react";
import BookList from "../components/BookList/BookList";
import { Book } from "@/types/book";

const page = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}`
  );
  const data: Book[] = await res.json();
  return <BookList books={data}/>;
};

export default page;
