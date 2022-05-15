import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CreatePage } from '../services/PageServices'


const CreatePageForm = () => {

  const navigate = useNavigate()

  let { id } = useParams()

  const [formValues, setFormValues] = useState({
    title: '',
    url: '',
  })
  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await CreatePage({
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
      <div className="page-form-wrapper">
        <h1 className="X-page-header">Create New Page</h1>
        <br/>
        <form onSubmit={handleSubmit}>
          <div>
            <label><b>Page Title:</b></label>
            <input
              name='title'
              type="text"
              value={formValues.title}
              placeholder="Page Title"
              onChange={handleChange}
            />
          </div>
          <div>
            <label><b>URL:</b></label>
            <input
              name='url'
              type="text"
              value={formValues.url}
              placeholder="https://www.google.com/search?q=puppies"
              onChange={handleChange}
            />
          </div>
          <div className="button-wrapper">
            <button className="submit-button" type="submit" disabled={!formValues.title}>Submit</button>
          </div>
        </form>
      </div>
      
    )
  }
  export default CreatePageForm