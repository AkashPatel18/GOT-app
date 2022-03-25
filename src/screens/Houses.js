import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Container } from "@mui/material";
import { gethouses } from "./../redux/houses";
import House from "./../components/House";

const Houses = ({ search }) => {
  const dispatch = useDispatch();

  const { houses } = useSelector((state) => state.houses);

  useEffect(() => {
    dispatch(gethouses());
  }, []);

  return (
    <Container>
      <ScrollMenu onWheel={(ev, api) => {}}>
        {houses
          .filter((house) =>
            book.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((house) => {
            return <House house={house} />;
          })}
      </ScrollMenu>
    </Container>
  );
};

export default Houses;
