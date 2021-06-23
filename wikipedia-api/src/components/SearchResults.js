function SearchResult (props) {
    return (
        props.searchQuery.map((result, i) => (
            <div>
                <a
                    href={`https://en.wikipedia.org/wiki/${result.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {result.title}
                </a>
                <br />
            </div>
        ))
    )
}

export default SearchResult;