import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'


const Register = (props) => {

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await RegisterUser({
      firstName: formValues.firstname,
      lastName: formValues.lastname,
      email: formValues.email,
      username: formValues.username,
      password: formValues.password,
      location: formValues.location
    })
    setFormValues({
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      location: ''
    })
    props.setShow(false)
    alert(`Registration complete. Click 'Ok' to continue and sign in!`)
  } 

  return (
    <div>
      <div className="signin-wrapper">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="signin-title">Sign In</h1>
          {/* Email */}
          <div className="form-item">
            <input
              className="reg-box"
              onChange={handleChange}
              type="text"
              id="email"
              name="email"
              value={formValues.email}
              placeholder="Email Address"
              required
            />
          </div>
          {/* Password */}
          <div className="form-item">
            <input
              className="reg-box"
              onChange={handleChange}
              type="password"
              id="passswordd"
              name="password"
              value={formValues.password}
              placeholder="Password"
              required
            />
          </div>
            <button className='signin-button' disabled={!formValues.email || !formValues.password}>
              Log In
            </button>
        </form>
      </div>
    </div>
  )
}

export default Home