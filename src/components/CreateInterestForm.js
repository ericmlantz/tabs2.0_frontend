import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateInterest } from '../services/InterestServices'

const CreateInterestForm = ({theUserId}) => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    topic: '',
    description: '',
  })

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await CreateInterest({
      topic: formValues.topic,
      description: formValues.description,
      userId: theUserId,
    })
    setFormValues({
      topic: '',
      description: '',
    })
    navigate('/interests')
  }
  
    return (
      <div className="interest-form">
        <h1 className="createpage-title">Create A New Interest</h1>
        <br/>
        <form onSubmit={handleSubmit}>
          <div classname='interest-form'>
            <label className='section-name'><b>Interest Topic:</b></label>
            <br/>
            <input
              name='topic'
              type="text"
              value={formValues.topic}
              placeholder="Interest Topic"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className='section-name'><b>Description:</b></label>
            <textarea
              name='description'
              type="text"
              value={formValues.description}
              placeholder="Description/Purpose of Interest"
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

  export default CreateInterestForm