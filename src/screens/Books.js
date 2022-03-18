import React from "react";
import { useEffect } from "react";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "./../redux/books";
import Book from "../components/Book";

export default function Books() {
  const dispatch = useDispatch();

  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <Container>
      {books.map((book) => {
        return <Book item={book} />;
      })}
    </Container>
  );
}
