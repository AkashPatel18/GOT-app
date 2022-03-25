import React from "react";
import { Container, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Image from "../assets/main.png";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Container
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* <img src={Image} style={{ height: "50vh", width: "40vw" }} /> */}
      <h3 style={{ fontSize: "80px" }}>⚔️ Game Of Thrones. 🏰 </h3>
      <p style={{ fontStyle: "italic", fontSize: "20px" }}>
        🧊 Explore the Universe Of Ice and Fire. 🔥
      </p>

      <Button className={"actionBtn1"} onClick={() => navigate("books")}>
        Explore Books
      </Button>

      <Button className={"actionBtn2"} onClick={() => navigate("characters")}>
        Explore Characters
      </Button>
      <Button className={"actionBtn1"}>Explore Houses</Button>
    </Container>
  );
};

export default Landing;
