import React from 'react';
import './Search.css';

class Search extends React.Component{
  render() {
    const selfprop = this.props;
    const {searchChange} = selfprop;
    return(
      <div className='pa2'>
        <input
        className='searchbox pa3 ba b--dark-red bg-black'
        type='search'
        placeholder='search starship name'
        onChange={searchChange}
        />
      </div>
    )
  }
}

export default Search;
