import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddBook from "./AddBook";
import RentalList from "./RentalList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/addBook`} element={<AddBook />} />
        <Route path={`/rentalList`} element={<RentalList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
