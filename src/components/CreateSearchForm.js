import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CreateSearch } from '../services/SearchServices'
import InterestCard from './InterestCard'


const CreateSearchForm = () => {
  const navigate = useNavigate()
  let { id } = useParams()

  const [formValues, setFormValues] = useState({
    searchName: '',
    query: '',
  })
  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await CreateSearch({
      title: formValues.title,
      url: formValues.url,
      interestId: id,
    })
    setFormValues({
      title: '',
      url: '',
    })
    navigate(`/interests/${id}`)
  }
    return (
      <div>
        <h1>Create New Search</h1>
        <br/>
        <form onSubmit={handleSubmit}>
          <div>
            <label><b>Search Identifier/Name:</b></label>
            <input
              name='searchName'
              type="text"
              value={formValues.searchName}
              placeholder="Search Name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label><b>Search Query:</b></label>
            <input
              name='query'
              type="text"
              value={formValues.query}
              placeholder="Search terms/query"
              onChange={handleChange}
            />
          </div>
          <div className="button-wrapper">
            <button className="submit-button" type="submit">Submit</button>
          </div>
        </form>
      </div>
      
    )
  }
  export default CreateSearchForm