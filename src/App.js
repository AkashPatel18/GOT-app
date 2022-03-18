import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const { books } = useSelector((state) => state.books);
  return <div>{books.length}</div>;
}

export default App;
