import React from "react";
import { Container, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Image from "../assets/main.png";
const Landing = () => {
  const navigate = useNavigate();

  return (
    <Container
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img src={Image} style={{ height: "50vh", width: "40vw" }} />
      <Button onClick={() => navigate("books")}>Explore Books</Button>
      <Button>Explore Characters</Button>
      <Button>Explore Houses</Button>
    </Container>
  );
};

export default Landing;
