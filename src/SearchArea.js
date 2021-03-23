import React from 'react';

const SearchArea = (props) => {
    return(
        <div className="search-area">
            <form onSubmit={props.searchBook} action="">
                <input onChange={props.handleSearch} type="text" 
                className="form-control mt-8"
                placeholder="Search for Books"
                autoComplete="off"
                 /> 
                <button type="submit" className="btn btn-danger">Search</button>
                <select 
                    defaultValue="Sort" 
                    onChange={props.handleSort} 
                    className="form-select form-select-lg mb-3" 
                    aria-label=".form-select-lg example">
                        <option disabled value="Sort">Sort</option>
                        <option value="Newest">新しい</option>
                        <option value="Oldest">古い</option>
                </select>
            </form>    
        </div>    
    )
}

export default SearchArea;