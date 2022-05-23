import { useState, createContext } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Calendar from "./components/Calendar";

const FilterContext = createContext({
  filters: [],
  setFilters: () => {},
});
const ClickedContext = createContext({
  clicked: [],
  setClicked: () => {},
});

function App() {
  const [filters, setFilters] = useState([
    "Design",
    "Product Management",
    "Mindfullness",
    "Productivity",
    "Mental Health",
  ]);
  const [clicked, setClicked] = useState(new Array(filters.length).fill(false));
  return (
    <>
      <FilterContext.Provider value={{ filters, setFilters }}>
        <ClickedContext.Provider value={{ clicked, setClicked }}>
          <Navbar />
          <Calendar />
        </ClickedContext.Provider>
      </FilterContext.Provider>
    </>
  );
}
export { FilterContext, ClickedContext };

export default App;
