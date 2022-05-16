import React from 'react'
import { GetAllPages } from '../services/PageServices'

const SearchCard = ({search, page, pages, interestcard}) => {

  // const handleSubmit = (id, arr) => {
  //   e.target.value
  // }

  return (
    <div className='note-card'>
      <h1>{search.noteName}</h1>
      <p>{search.noteBody}</p>
  <form>
  <label htmlFor="page">Page:</label>
  <select id="page" name="page">
  {pages &&
    pages.map((page, index) => (
      page.interestId === interestcard.id
        ? 
        <option key={page.id} value={page.title}>{page.title}</option>
        : null
      ))}
  </select>
  <input type="submit"/>
  {/* // onSubmit={(e) => {handleSubmit(search,page)}}/> */}
</form>
  </div>
  )
}

export default SearchCard