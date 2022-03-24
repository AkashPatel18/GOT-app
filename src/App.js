import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getBooks } from "./redux/books";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./screens/Landing";
import Books from "./screens/Books";
import Header from "./components/Header";

function App() {
  const { books } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/books" element={<Books />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
