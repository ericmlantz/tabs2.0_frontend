import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CreateSearch } from '../services/SearchServices'


const CreateSearchForm = () => {
  const navigate = useNavigate()
  let { id } = useParams()

  const [formValues, setFormValues] = useState({
    noteName: '',
    noteBody: '',
    noteUrl: '',
  })
  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await CreateSearch({
      noteName: formValues.noteName,
      noteBody: formValues.noteBody,
      noteUrl: formValues.noteUrl,
      interestId: id,
    })
    setFormValues({
      noteName: '',
      noteBody: '',
      noteUrl: '',
    })
    navigate(`/interests/${id}`)
  }
    return (
      <div>
        <h1 className="createpage-title" >Create New Note</h1>
        <br/>
        <form className="register-form interest" onSubmit={handleSubmit}>
          <div>
            <label className="section-name"><b>Name:</b></label>
            <input
            className="input-form-input"
              name='noteName'
              type="text"
              value={formValues.noteName}
              placeholder="Name of Note"
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              name='noteBody'
              type="text"
              value={formValues.noteBody}
              placeholder="Note Text"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="section-name"><b>Associated Url:</b></label>
            <input
              className="input-form-input"
              name='noteUrl'
              type="text"
              value={formValues.noteUrl}
              placeholder="https://www.google.com/puppies"
              onChange={handleChange}
            />
          </div>
          <div className="button-wrapper">
            <button className="submit-button" type="submit" disabled={!formValues.noteName || !formValues.noteBody}>
              Submit</button>
          </div>
        </form>
      </div>
      
    )
  }
  export default CreateSearchForm