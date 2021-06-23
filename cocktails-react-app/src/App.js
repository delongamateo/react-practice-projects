import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [cocktailName, setCocktailName] = useState("");
  try {
    async function fetchData() {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
      );
      const data = await response.json();
      console.log(data.drinks[1].strDrink);
      setCocktails(data.drinks);
    }

    useEffect(() => {
      cocktailName && fetchData();
    }, [cocktailName]);

    console.log(cocktails);
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="App">
      <SearchBar setCocktailName={setCocktailName} />
      {cocktails.map((cocktail, i) => (
        <p>{cocktail.strDrink}</p>
      ))}
    </div>
  );
}

export default App;
