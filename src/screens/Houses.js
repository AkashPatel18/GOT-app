import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Container } from "@mui/material";
import { gethouses } from "./../redux/houses";

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
          .filter((book) =>
            book.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((book) => {
            return <Book item={book} />;
          })}
      </ScrollMenu>
    </Container>
  );
};

export default Houses;
