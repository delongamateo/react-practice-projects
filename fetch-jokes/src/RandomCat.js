import { useState, useEffect } from "react";

function RandomCat() {
  const [catFact, setCatFact] = useState(null);

  async function fetchData() {
    const response = await fetch("https://cat-fact.herokuapp.com/facts/random");
    const data = await response.json();
    setCatFact(data);
  }

  useEffect(() => {
    fetchData();

    setInterval(() => {
      fetchData();
    }, 5000);
  }, []);

  if (catFact === null) return null;

  return <h1>{catFact.text}</h1>;
}

export default RandomCat;
