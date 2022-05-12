import React from 'react'
import { CreatePage } from '../services/PageServices'

const CreatePage = ({pages, interest}) => {

  const [formValues, setFormValues] = useState({
    title: '',
    url: '',
    interestId: 1,
  })
  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await CreatePage({
      title: formValues.title,
      url: formValues.url,
      interestId: interest.id
    })
    setFormValues({
      title: '',
      url: '',
      interestId: '',
    })
  }

    return (
      <div className="page-form-wrapper">
        <h1 className="create-page-header">Create New Page</h1>
        <br/>
        <form onSubmit={handleSubmit}>
          <div>
            <label><b>Page Title:</b></label>
            <input
              type="text"
              value={formValues.title}
              placeholder="Page Title"
              onChange={handleChange}
            />
          </div>
          <div>
            <label><b>URL:</b></label>
            <input
              type="text"
              value={formValues.url}
              placeholder="Logo Image URL"
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
  export default CreatePage