import React from "react";
import { Container } from "@mui/material";

const Book = ({ item }) => {
  console.warn(item.url, " in book");
  return (
    <Container style={{ border: "1px solid black" }}>
      <p>{item.name}</p>
      <p>Author : {item.authors}</p>
      {/* <img src={item.url} style={{ height: "100px", width: "100px" }}></img> */}
    </Container>
  );
};

export default Book;
