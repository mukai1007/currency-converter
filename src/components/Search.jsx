import React from 'react'

const Search = ({ value, onChangeValue }) => {

  return (
    <div className='search-block'>
      <input
        className='search'
        type='text'
        placeholder='Искать'
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
      />
    </div>
  )
}

export default Search