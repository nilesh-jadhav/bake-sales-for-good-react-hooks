function SearchDeal(props) {
    const { searchText = '', updateSearch, searchDeals, clearSearchText } = props;
    return(
        <div className="Search-container">
            <input type="text" value={searchText} placeholder="Search Term" onChange={e => updateSearch(e.target.value)} />
            <button className="Button-primary" onClick={() => searchDeals()}>Search</button>
            <button onClick={() => clearSearchText()}>Clear</button>
            <button className="Button-primary" onClick={() => null}>Add Deal</button>
        </div>
    )
}

export default SearchDeal;
