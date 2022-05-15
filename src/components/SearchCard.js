import React from 'react'

const SearchCard = ({search}) => {

  return (
    <div>
      <h1>{search.noteName}</h1>
      <p>{search.noteBody}</p>
      </div>
      
  )
}

export default SearchCard