import { useState, useEffect } from "react";

function Joke () {
    const [joke, setJoke] = useState(null);

    async function fetchData() {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await response.json();
    setJoke(data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (joke === null) return null;
  
  setTimeout(() => {
      console.log(joke.delivery)
    }, 5000);

  return (
      <>
    <h1>{joke.setup}</h1>
    
    <button onClick={() =>{fetchData()}}>Chabge</button>
    </>
  )

}

export default Joke;