import React from "react";

const Character = ({ character }) => {
  console.log(character);
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
        <p>{character.aliases}</p>
        <p>Cultre : {character.culture}</p>
        <p>Died : {character.died}</p>
        <p>Gender : {character.gender}</p>
      </div>
    </div>
  );
};

export default Character;
