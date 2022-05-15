import React from 'react'
import { GetAllPages, UpdatePage } from '../services/PageServices'

const SearchCard = ({search, pages, interestcard}) => {

  const updateNote = async (id, data) => {
    await UpdatePage(id,data)
  }

  return (
    <div>
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
</form>
  </div>
  )
}

export default SearchCard