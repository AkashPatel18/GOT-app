import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import "./App.css";
import { getBooks } from "./redux/books";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./screens/Landing";
import Books from "./screens/Books";
import Header from "./components/Header";
import Houses from "./redux/houses";
import Characters from "./screens/Characters";

function App() {
  const { books } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/books" element={<Books search={search} />}></Route>
        <Route path="/houses" element={<Houses search={search} />}></Route>
        <Route
          path="/characters"
          element={<Characters search={search} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
