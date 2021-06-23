import Films from './Components/Films';
import { useState, useEffect } from "react";


function App() {
  const [films, setFilms] = useState([]);

  async function fetchData() {
    const response = await fetch(`https://swapi.dev/api/films`);
    const data = await response.json();
    console.log(data.results)
    setFilms(data.results);
  }

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div>
      <Films films={films}/>
    </div>
  );
}

export default App;
