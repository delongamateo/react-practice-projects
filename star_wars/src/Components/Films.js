function Films(props) {
  return (
    <>
      {props.films.map((film, i) => (
        <div>
          <h1>{film.title}</h1>
          <p>{film.release_date}</p>
        </div>
      ))}
    </>
  );
}

export default Films;
