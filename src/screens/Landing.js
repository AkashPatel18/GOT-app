import React from "react";
import { Container, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h2">G.O.T.</Typography>
      <Button onClick={() => navigate("books")}>Books</Button>
      <Button>Characters</Button>
      <Button>Houses</Button>
    </Container>
  );
};

export default Landing;
