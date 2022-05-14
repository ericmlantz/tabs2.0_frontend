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
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
    })
    setFormValues({
      name: '',
      email: '',
      password: '',
    })
    alert(`Registration complete. Click 'Ok' to continue and sign in!`)
  } 

  return (
    <div>
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
      </div>
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