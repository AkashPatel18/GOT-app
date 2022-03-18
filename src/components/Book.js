import React from "react";
import { Container } from "@mui/material";

const Book = ({ item }) => {
  console.warn(item.url, " in book");
  return (
    <Container>
      <p>{item.id}</p>
      <img src={item.url} style={{ height: "100px", width: "100px" }}></img>
    </Container>
  );
};

export default Book;
