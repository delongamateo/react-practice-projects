import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import { useState, useEffect } from "react";

function App() {
  const [searchData, setData] = useState("");
  const [searchQuery, setQuery] = useState([]);

  async function fetchData() {
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchData}`
    );
    const data = await response.json();
    setQuery(data.query.search);
  }

  useEffect(() => {
    searchData && fetchData();
  }, [searchData]);

  return (
    <>
      <SearchBar setData={setData} />
      <SearchResults searchQuery={searchQuery} />
    </>
  );
}

export default App;
