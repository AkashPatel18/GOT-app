import React from "react";
import { useEffect } from "react";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "./../redux/books";
import Book from "../components/Book";
import { List, Stack } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

export default function Books({ search }) {
  const dispatch = useDispatch();

  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);

    return (
      // <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <p>Left</p>
      // </Arrow>
    );
  }

  function RightArrow() {
    const { isLastItemVisible, scrollNext } =
      React.useContext(VisibilityContext);

    return (
      // <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <p>Right</p>
      // </Arrow>
    );
  }

  const onWheel = (e, api) => {};

  return (
    <Container>
      <ScrollMenu onWheel={(ev, api) => {}}>
        {books
          .filter((book) =>
            book.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((book) => {
            return <Book item={book} />;
          })}
      </ScrollMenu>
    </Container>
  );
}
