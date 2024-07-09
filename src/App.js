import { useState } from "react";
import RoutingPage from "./Router";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  //   const topFilms = [
  //     { title: "Kalki", year: 2024 },
  //     { title: "The Godfather", year: 1972 },
  //     { title: "The Godfather: Part II", year: 1974 },
  //     { title: "The Dark Knight", year: 2008 },
  //     { title: "12 Angry Men", year: 1957 },
  //     { title: "Schindler's List", year: 1993 },
  //     { title: "Pulp Fiction", year: 1994 },
  //     {
  //       title: "The Lord of the Rings: The Return of the King",
  //       year: 2003,
  //     },
  //   ];
  //   const [selectedOption, setSelectedOption] = useState(null);
  //   const handleChange = (value) => {
  //     console.log(value);
  //     setSelectedOption(value);
  //   };

  return (
    <Router>
      <div
        className="App"
        //   style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        {/* <CustomSelect
        label="Subject"
        options={topFilms}
        onChange={handleChange}
      /> */}
        <RoutingPage />
      </div>
    </Router>
  );
}

export default App;
