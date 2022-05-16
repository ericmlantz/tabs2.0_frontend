import React from 'react'

const SearchCard = ({search, page, pages, interestcard}) => {

  return (
    <div className='note-card'>
      <h5 className='note-title'>{search.noteName}</h5>
      <hr/>
      <p className="note-body">{search.noteBody}</p>
  </div>
  )
}

export default SearchCard