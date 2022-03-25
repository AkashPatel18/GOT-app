import React from "react";

const House = ({ house }) => {
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
      ></div>
    </div>
  );
};

export default House;
