import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <input
        type='search'
        className='search-box' 
        placeholder='Search monsters'
        onChange={this.props.onChangeHandler} 

      />
    )
  }
}

export default SearchBox;