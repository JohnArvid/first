import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <input 
        onChange={onSearchChange} 
        className='search-box' 
        type='search' 
        placeholder='Search monsters'
      />
    )
  }
}

export default SearchBox;