const SearchBox = (props) => {
    return (
        <div className="pa2">
            <input type="search" placeholder="Search Robots" className="pa3 ba b--green bg-lightest-blue" onChange={props.SearchChange} />
        </div>
    )
}

export default SearchBox