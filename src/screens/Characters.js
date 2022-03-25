import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "./../redux/characters";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Container } from "@mui/material";
import Character from "../components/Character";

const Characters = ({ search }) => {
  const dispatch = useDispatch();

  const { characters } = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <Container>
      <ScrollMenu onWheel={(ev, api) => {}} on>
        {characters
          .filter((character) =>
            character.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((character) => {
            return <Character character={character} />;
          })}
      </ScrollMenu>
    </Container>
  );
};

export default Characters;
