import React from "react";

const Book = ({ item }) => {
  // console.log(item);
  return (
    <div
      style={{
        width: "400px",
        height: "70vh",
        marginTop: "10vh",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          height: "100%",
          width: "100%",
          margin: "auto",
          transition: "0.3s",
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
          "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
          },
        }}
      >
        <h4 style={{ fontSize: "30px" }}>{item.name}</h4>
        <hr style={{ color: "red" }} />
        <p>🖊️Author : {item.authors[0]}</p>
        <p> 🏳️Country : {item.country} </p>
        <p>Released : {item.released.slice(0, 10)}</p>
      </div>
    </div>
  );
};

export default Book;
