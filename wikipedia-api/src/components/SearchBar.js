function SearchBar(props) {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    props.setData(e.target[0].value);
  };

  return (
    <form
      onSubmit={(e) => {
        handleClick(e);
      }}
    >
      <input name="searchResult" />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
