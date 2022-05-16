import React from 'react'
import { GetAllPages } from '../services/PageServices'

const SearchCard = ({search, page, pages, interestcard}) => {

  return (
    <div className='note-card'>
      <h5 className='note-title'>{search.noteName}</h5>
      <hr/>
      <p className="note-body">{search.noteBody}</p>
  <form>
  {/* <label htmlFor="page">Page:</label>
  <select id="page" name="page">
  {pages &&
    pages.map((page, index) => (
      page.interestId === interestcard.id
        ? 
        <option key={page.id} value={page.title}>{page.title}</option>
        : null
      ))}
  </select>
  <input type="submit"/> */}
</form>
  </div>
  )
}

export default SearchCard